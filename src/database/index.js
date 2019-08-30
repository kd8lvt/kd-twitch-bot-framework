const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

class Database {
  constructor(name,file,defaults,bot) {
    this.name = name;
    this.file = file;

    this.adapter = new FileSync(this.file);
    this.db = low(this.adapter);

    this.db.defaults(defaults).write();

    bot.databases[this.name] = this;
  }

  reload() {
    this.adapter = new FileSync(this.file);
    this.db = low(this.adapter);
  }

  getValue(path) {
    this.reload();
    return this.db.get(path).value();
  }

  setValue(path,value) {
    this.reload();
    return this.db.set(path,value).write();
  }

  updateValue(path,callback) {
    this.reload();
    return this.db.update(path,callback).write();
  }

  findValue(path,search) {
    this.reload();
    return this.db.get(path).find(search).value();
  }

  getRawDB() {
    //Not recommended!
    this.reload();
    return this.db;
  }
}

module.exports = Database;
