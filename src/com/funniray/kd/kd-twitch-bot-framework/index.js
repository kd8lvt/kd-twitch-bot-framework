let InternalBot = require('./bot/index.js');
let Plugin = require('./plugin');
let Logger = require('./bot/logger.js');

class Bot extends InternalBot {
  constructor(optionsUsername,configFile,oauthKey,owner,streams) {
    super(optionsUsername,configFile,oauthKey,owner,streams);
  }

  addPlugin(pluginClass) {
    let plugin = pluginClass;
    plugin.onLoad();

    for (let key in plugin.commandFunctions) {
      if (!this.commandFunctions.hasOwnProperty(key)) {
        this.commandFunctions[key] = plugin.commandFunctions[key];
      }
    }
    for (let command in plugin.commands) {
      if (this.bot.databases.commands.getValue('commands.'+command) == null) {
        this.bot.databases.commands.setValue('commands.'+command,plugin.commands[command]);
      }
    }
  }

}

module.exports = {Bot:Bot,Plugin:Plugin,Logger:Logger};
