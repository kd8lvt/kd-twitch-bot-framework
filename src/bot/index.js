const tmi = require('tmi.js');
const Database = require('../database/index.js');
const Logger = require('./logger.js');
class InternalBot {
  constructor(optionsUsername,configFile,oauthKey,owner,streams) {
    if (typeof username === typeof {object:true}) {
      this.opts = username;
    } else {
      if (typeof streams == typeof ['array']) {var channels = streams} else { var channels = [streams];}
      this.logger = new Logger('MAIN');
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
    this.events = {};
    this.commandFunctions = {};
    this.config = require(configFile);
    this.pluginExports = {};
    new Database('users','users.json',{users:{default_user:{permGroups:['user']}}},this.bot)
    new Database('commands','commands.json',{commands:{example_command:{invoke:"★THIS_SHOULD_NEVER_BE_RUN★",response:"How'd you know!?",permissionGroups:['owner']}}},this.bot);
    this.commands = this.bot.databases.commands.getValue('commands');

    this.commands["hardcoded:botinfo"] = {invoke:'bot',permissionGroup:['user'],response:'This bot is powered by Kd-Twitch-Bot-Framework, designed by kd8lvt. For more information, click this link: https://github.com/kd8lvt/kd-twitch-bot-framework'}

    this._finishInit();
  }

  connect() {
    return this.bot.client.connect();
  }

  addListener(event,cb) {
    this.bot.client.on(event,cb);
  }

  addEventHandler(event,cb) {
    if (this.events[event] == null) this.events[event] = [];
    this.events[event].push(cb);
  }

  _finishInit() {
    this.addListener('message',(channel,userstate,message,self)=>{this._parseMessage(channel,userstate,message,self,this)});
  }

  _parseMessage(channel,userstate,message,self,bot) {
    if (self) return;
    if (bot.bot.databases.users.getValue('users.'+userstate.username) == null) {
      //this.databases.users.setValue('users.'+userstate.username,{permGroups:['user']})
      for (let i in this.events['newUser']) {
        this.events['newUser'][i](channel,userstate,message,bot);
      }
    }
    if (message.startsWith(bot.config.commands.prefix)) {
      this._parseCommands(channel,userstate,message,bot);
    }
  }

  _parseCommands(chan,userstate,message,bot) {
    let args = message.split(" ");
    let invoke = args.splice(0,1)[0].replace(bot.config.commands.prefix,'');
    let commandExists = null;
    for (let command in bot.commands) {
        if (bot.commands[command].invoke == invoke) {
          commandExists = bot.commands[command];
          break;
        }
    }
    if (commandExists !== null) {
      if (commandExists.permissionNode != null && bot.pluginExports["Kd_PermsPlugin"] !== null) { //If the command requires a permission AND the permissions plugin IS installed:
        if (!bot.pluginExports["Kd_PermsPlugin"].api.hasPermissionNode(userstate.username,commandExists.permissionNode)) { //If the user does not have the required node:
          return bot.say(channel,'You do not have permission to use this command.');
        }
      }
      if (commandExists.function) {
        if (bot.commandFunctions[commandExists.function] !== null) {
            }
            bot.commandFunctions[commandExists.function](bot,chan,userstate,args,message);
        }
      } else {
        bot.bot.client.say(chan,commandExists.response);
      }
    }
  }

  say(chan,msg) {
    this.bot.client.say(chan,msg);
  }
}
module.exports = InternalBot;
