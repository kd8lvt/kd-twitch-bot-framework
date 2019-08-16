const Plugin = require('kd-twitch-bot-framework').Plugin;
const Logger = require('kd-twitch-bot-framework').Logger;

class ExamplePlugin extends Plugin {
  constructor() {
    super();
    this.commandFunctions.example = (bot) => {
      bot.say('Hi');
    }
  }
  onLoad() {
    Logger.info('ExamplePlugin Loaded.');
  }
}
