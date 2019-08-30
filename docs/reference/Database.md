#Database

##IMPORTANT INFORMATION
Databeses use lowdb, and as such are JSON flatfiles.

If you are going to be using this framework on a large scale, please consider doing your harddrives a favor and implementing your own MongoDB or other such database integration.

##reload
Reloads the database. This is run before every dataase call, so it shouldn't be required to ever run this.

USAGE:
```Javascript
Datase.reload();
```

##getValue
Gets a value at a certain database path.

USAGE:
```Javascript
let value = Database.getValue('path.to.value.you.want');
```

##setValue
Same as get value, but sets it.

USAGE:
```Javascript
Database.setValue('path.to.value',newValue);
```

##updateValue
Updates a value based on the current value, and a callback you specify. The callback MUST return a value.

USAGE:
```Javascript
//Simple incrementer
Databse.updateValue('path.to.value',(current) => {
	return current++;
});
```

##findValue
Finds the first matching value. Does not have to be the entire value in the case of objects and arrays, it just has to contain that value.

USAGE:
```Javascript
let foundValue = Database.findValue('path.to.parent.value',{key:value});
```

##getRawDB
Gets the raw lowd database. Not strictly required, but it you want to use lodash or other such features supplied bby lowdb, feel free to use it.

You'll have to reload the Database instance manually after changing anything using this.

USAGE:
```Javascript
let rawDb = Databse.getRawDB();
```