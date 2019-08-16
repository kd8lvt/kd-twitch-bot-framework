const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

class Database {
  constructor(name,file,defaults,bot) {
    this.name = name;
    this.file = file;

    this.adapter = new FileSync(this.file);
    this.db = low(this.adapter);

    this.db.defaults = defaults;

    bot.databases[this.name] = this;
  }

  getValue(path) {
    return this.db.get(path).value();
  }

  setValue(path,value) {
    return this.db.set(path,value).write();
  }

  updateValue(path,callback) {
    return this.db.update(path,callback).write();
  }

  findValue(path,search) {
    return this.db.get(path).find(search).value();
  }

  getRawDB() {
    //Not recommended!
    return this.db;
  }
}

module.exports = Database;
