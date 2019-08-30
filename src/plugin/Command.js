class Command {
    constructor(invoke, permNode,func,response) {
        this.invoke = invoke;
        this.permissionNode = permNode;
        this.function = func;
        this.response = response;
        return this;
    }
}

module.exports = Command;