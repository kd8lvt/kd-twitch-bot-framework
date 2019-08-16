const tmi = require('tmi.js');
const Database = require('../database/index.js');
const Logger = require('./logger.js');
class InternalBot {
  constructor(optionsUsername,configFile,oauthKey,owner,streams) {
    if (typeof username === typeof {object:true}) {
      this.opts = username;
    } else {
      if (typeof streams == typeof ['array']) {var channels = streams} else { var channels = [streams];}
      this.logger = new Logger;
      this.opts = {
        options: {
          debug:true
        },
        connection: {
          reconnect: true
        },
        identity: {
          username: optionsUsername,
          password: oauthKey,
        },
        channels: channels,
        logger: this.logger
      };
      if (typeof owner == typeof ['array']) {this.owners = owner } else { this.owners = [owner];}
    }

    this.bot = {};
    this.bot.client = new tmi.client(this.opts);
    this.bot.databases = {};
    this.commandFunctions = {};
    this.config = require(configFile);
    new Database('users','users.json',{users:{default_user:{permission_group:'user'}}},this.bot)
    new Database('commands','commands.json',{commands:{example_command:{invoke:"★THIS_SHOULD_NEVER_BE_RUN★",response:"How'd you know!?",permissionGroups:['owner']}}},this.bot);
    this._finishInit();
  }

  connect() {
    return this.bot.client.connect();
  }

  addListener(event,cb) {
    this.bot.client.on(event,cb);
  }

  _finishInit() {
    this.addListener('message',(channel,userstate,message,self)=>{this.parseMessage(channel,userstate,message,self,this)});
  }

  parseMessage(channel,userstate,message,self,bot) {
    if (self) return;
    if (message.startsWith(bot.config.commands.prefix)) {
      this.parseCommands(channel,userstate,message,bot);
    }
  }

  parseCommands(chan,userstate,message,bot) {
    let args = message.split(" ");
    let invoke = args.splice(0,1)[0].replace(bot.config.commands.prefix,'');
    let commandExists = bot.bot.databases.commands.findValue('commands',{invoke:invoke});
    console.log(commandExists)
    if (commandExists !== null) {
      if (commandExists.function) {
        if (bot.commandFunctions[commandExists.function] !== null) {
            bot.commandFunctions[commandExists.function](bot.bot.client,chan,userstate,message);
        }
      } else {
        bot.bot.client.say(chan,commandExists.response);
      }
    }
  }
}
module.exports = InternalBot;
