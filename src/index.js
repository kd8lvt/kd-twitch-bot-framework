let InternalBot = require('./bot/index.js');
let Plugin = require('./plugin');
let Logger = require('./bot/logger.js');
let Command = require('./plugin/Command.js');

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
      //Dynamically load commands, rather than saving them to a file.
      this.commands[command] = plugin.commands[command];

    }

    if (plugin.exports) {
      this.pluginExports[plugin.name] = plugin.exports;
    }
  }

}

module.exports = {Bot:Bot,Plugin:Plugin,Logger:Logger,Command:Command};
