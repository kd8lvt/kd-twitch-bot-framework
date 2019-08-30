let Logger = require('../bot/logger.js')
class Plugin {
  constructor(name) {
    if (name == null) {
      throw new Error('Plugins require a name!');
    }
    this.name = name;
    this.commands = {};
    this.commandFunctions = {};
    this.logger = new Logger(this.name);
  }
}

module.exports=Plugin;
