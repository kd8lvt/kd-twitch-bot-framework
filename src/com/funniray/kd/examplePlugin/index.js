const Plugin = require('kd-twitch-bot-framework').Plugin;

class ExamplePlugin extends Plugin {
  constructor() {
    super('ExmaplePlugin');
    this.commandFunctions.example = (bot) => {
      bot.say('Hi');
    }
  }
  onLoad() {
    this.logger.info('ExamplePlugin Loaded.');
  }
}
