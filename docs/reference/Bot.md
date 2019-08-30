#Bot.js
Bots are the core of this module, but are relatively simple, and have very little associated with them...

##Creating a bot
Creating a bot is simple. Here's an example:
```Javascript
const KdFramework = require('kd-twitch-bot-framework');
let bot = new KdFramework.bot('your-awesome-bot','C:\\path\\to\\config.json','oauth:kD1sThEb35TtH0u6HtH1sIsn0tArEAlOAutHKeY',['list','of','owner','usernames','(not yet used)'],['list','of','stream','chats','to','join']);
```

##connect
Logs into Twitch, and joins the specified channels.

USAGE:
```Javascript
Bot.connect();
```

##say
Sends a message into the specified channel

USAGE:
```Javascript
Bot.say('#kd8lvt','Hello, world!');
```

##addPlugin
Adds the plugin to the bot's plugin list. You need to do this in order to use the plugin.

USAGE:
```Javascript
Bot.addPlugin(new Plugin(Bot));
```

#addListener
Adds a listener to the `tmi.js` bot class. See [tmi.js' documentation](https://github.com/tmijs/docs/tree/gh-pages/_posts) for information on events.

USAGE:
```Javascript
Bot.addListener('raided',(chan,user,viewerCount) => {
	Bot.say(chan,user+' just raided us with a party of '+viewerCount+'!');
});
```