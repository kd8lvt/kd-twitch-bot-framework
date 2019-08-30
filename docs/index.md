# kd-twitch-bot-framework
This framework is designed to make designing [Twitch.tv](https://twitch.tv) chat-bots easy!
Simply download [node.js](https://nodejs.org) and require the package!

In your shell of choice:
`npm init -y`
`npm i --save kd-twitch-bot-framework`

In your main bot file:
```Javascript
const KdFramework = require('kd-twitch-bot-framework');
let bot = new KdFramework.Bot("username","C:\\path\\to\\config.json","twitch oauth key",["owners","(NYI)"],["channels","to","join"]);
bot.connect();
```

And that's all you need for a simple bot! To make commands (especially those with custom functionality) you'll need a [plugin](https://kd-twitch-bot-framework.readthedocs.io/en/latest/plugin)!