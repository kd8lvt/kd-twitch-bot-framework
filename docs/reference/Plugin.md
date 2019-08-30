#Plugin
Plugins are the bread and butter of this framework, and are what are used to add extra functionality and commands to your bot.

##Creating a plugin
There is an example on the plugin page of the documentation detailing how to make a simple plugin.

##Creating a simple command
Commands are the backbone of any chat bot, and as such are super simple to make!

In this framework, Commands are their own class, but are functionally indentical to an object. It's set up as a class to make it easier to understand.
```Javascript
Plugin.commands["namespace:commandID"] = new KdFramework.Command('how_you_invoke_your_command_(no_spaces!)','permission node (not useful is KdPermissions or some other permissions plugin is not installed)','the command function. this overrides the response argument (the next one)','A response. If you're using a response (this argument) the function argument (the one before) MUST be null!');
```

Now, lets say you want your function to access a database, or something on the internet. Simple enough done with command functions!

```Javascript
Plugin.commandFunctions["the command function. this overrides the response argument (the next one)"] = (bot,channel) => {
	bot.say(channel,'This used a commandFunction... even though it could have just been a response.');
}
```

#logger
This isn't a function, rather, it's an instance of the [Logger](https://kd-twitch-bot-framework.readthedocs.io/en/latest/reference/Logger) class created especially for your Plugin.

USAGE:

See [Logger](https://kd-twitch-bot-framework.readthedocs.io/en/latest/reference/Logger) documentation for usage of this class.
