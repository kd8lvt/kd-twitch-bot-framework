#Logger
The logger is used to send formatted messages to the console.

##Creating a logger
Loggers are created automatically, but if for some reason you *need* to make another one, here's how:
```Javascript
const Logger = require('kd-twitch-bot-framework.Logger;
let logger = new Logger('logger-name');
```

##info
Sends an information message to the console.

USAGE:
```Javascript
Logger.info('This is an info message!');
```
Output:
```
"[INFO] [10:11:32] [logger-name] >> This is an info message!"
```

##warn
Sends a warning message to the console.

USAGE:
```Javascript
Logger.warn('This is a warning message!');
```
Output:
```
"[WARN] [10:11:32] [logger-name] >> This is a warning message!"
```

##error
Sends an error message to the console.

USAGE:
```Javascript
Logger.error('This is an error message!');
```
Output:
```
"[ERROR] [10:11:32] [logger-name] >> This is an error message!"
```

##fatal
Sends a "fatal" message to the console.

USAGE:
```Javascript
Logger.fatal('This is a fatal message! Something super bad happened, and the bot probably crashed!');
```
Output:
```
"[FATAL] [10:11:32] [logger-name] >> This is a fatal message! Something super bad happened, and the bot probably crashed!"
```

##log
Sends a semi-customizable message to the console.

USAGE:
```Javascript
Logger.log('MSG','This is a custom message!');
```
Output:
```
"[MSG] [10:11:32] [logger-name] >> This is a custom message!"
```