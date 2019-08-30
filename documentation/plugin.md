##Plugins

Making a plugin is easy, and attatching it to your bot is even easier!

Here's a quick demo to get you started:


#Plugin File

```JavaScript
const KdFramework = require('kd-twitch-bot-framework');
const https = require('https');

class KdPuns extends KdFramework.Plugin {
	constructor(bot) {
		super('KdPuns');
		this.bot = bot;
	}

	onLoad() {
		this.createCommands();
		this.createCommandFunctions();
		this.logger.info('KdPuns Plugin Loaded.');
		this.logger.info('Thanks, \'icanhazdadjoke.com\'!');
	}

	createCommands() {
		this.commands["kdpuns:pun"] = {invoke:'pun'permissionNode:null,function:'pun'};
	}

	createCommandFunctions() {
		this.commandFunctions.pun = (bot,channel)=> {
			let joke = http.get({host:'icanhazdadjoke.com',port:433,path:'',headers:{'Accept':'text/plain'}},(res) => {
				if (res.statusCodde !== 200) {
					bot.say(channel,'I couldn\'t find a pun... maye try some other time?');
				} else {
					res.on('data',(d) =>{
						bot.say(channel,d.toString('utf-8'));
					});
				}
			});
		}
	}
}

module.exports = KdPun;
```

#Adding it to your bot
```Javascript
const KdPuns = require('./relative/path/to/Plugin/index.js');
//create bot...
bot.addPlugin(new KdPuns(bot));
//other plugins...
bot.connect();
```