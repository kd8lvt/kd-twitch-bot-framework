class BotLogger {
    info(msg) {
      this.log('INFO',msg);
    }
    warn(msg) {
      this.log('WARN',msg);
    }
    error(msg) {
      this.log('ERROR',msg);
    }
    fatal(msg) {
      this.log('FATAL',msg);
    }
    log(level,msg) {
      let now = new Date(Date.now());
      let time = now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();
      console.log('['+level+'] '+'['+time+'] '+msg);
    }
}

module.exports = BotLogger;
