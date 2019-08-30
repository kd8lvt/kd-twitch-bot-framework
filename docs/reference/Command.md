#Command
Commands are the backbonem of any chat-bot, and this framework aims to make them as simple as possible...

##Creating a Command
Creating a command is as simple as creating a `new` instance of the class, and applying it to your Plugin.

See [Plugin](https://kd-twitch-bot-framework.readthedocs.io/en/latest/reference/Plugin) documentation for more info on that, as I don't feel like typing it twice, and it's really simple.

#Command Functions
When creating a command, you're likely to run into a situation where just returning text won't be enough. That's where commandFunctions come in. Thes elittle guys are created in the Plugin class, and are just a function that is run when a command that references it is invoked.

##Creating a Command Function
Creating Command Functions is rather simple.

Within your Plugin class:
```Javascript
this.commandFunctions["commandFunctionId"] = (bot,channel) => {
	//do your stuff
};
```
When called, a commandFunction gets passed the main Bot instance, and the channel that invoked the command.

##CommandFunction notes
Note that when specifying a commandFunction while creating a Command instance, you use the id string of the commandFunction when you created it.

Meaning you don't specify the callback then and there, but rather an identifier for the parser to pick up on later.

Plugins are limited to their own scope, and therefore can't access other Plugin's commandFunctions.