//Splice
/*
let arr = ["I", "study", "JavaScript", "right", "now"];

let removed = arr.splice(0, 2);

alert( removed );
*/

/*
let arr = ["I", "study", "JavaScript"];

arr.splice(2, 0, "complex", "language");

alert( arr );
*/


//Slice
/*
let arr = ["t", "e", "s", "t"];

alert( arr.slice(1, 3) ); 

alert( arr.slice(-2) );
*/

//ConCat
/*
let arr = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

alert( arr.concat(arrayLike) );
*/

/*
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
let user = users.find(item => item.id == 1);
  
alert(user.name);

let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length);
*/

/*
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths);

let arr = [ 1, 2, 15 ];

arr.sort(function(a, b) { return a - b; });

alert( arr );
*/

//Iterables(Range)
/*
let range = {
    from: 1,
    to: 5
};
  
  
range[Symbol.iterator] = function() {
  
  return {
    current: this.from,
    last: this.to,
  
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
    };
};
  
for (let num of range) {
  alert(num); 
}
*/

/*
let range = {
    from: 1,
    to: 5,
  
    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },
  
next() {
  if (this.current <= this.to) {
    return { done: false, value: this.current++ };
  } else {
    return { done: true };
  }
  }
};
  
for (let num of range) {
  alert(num); 
}
*/

/*
let map = new Map([
    ['1',  'str1'],
    [1,    'num1'],
    [true, 'bool1']
  ]);
  
alert( map.get('1') );
*/

/*
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map.entries());

alert(obj.orange); 
*/
/*
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

alert( set.size );

for (let user of set) {
  alert(user.name);
}
*/

/*
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
let readMessages = new WeakSet();
  
readMessages.add(messages[0]);
readMessages.add(messages[1]);
readMessages.add(messages[0]);
  
alert("Read message 0: " + readMessages.has(messages[0])); 
  
messages.shift();
*/

/*
function sumSalaries(salaries) {

  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum; 
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) );
*/

/*
let user = {
    name: "John",
    years: 30
  };
  
let {name, years: age, isAdmin = false} = user;
  
alert( name );
alert( age );
alert( isAdmin );
*/

/*
let date1 = new Date(2021, 10, 16, 3, 12);
alert( date1 );
let date2 = new Date("November 16, 2021 03:12:00");
alert( date2 );
*/

/*
function getSecondsToday() {
  let now = new Date();

  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today; 
  return Math.round(diff / 1000); 
}

alert( getSecondsToday() );
*/

let user = {
  name: "John Smith",
  age: 35
};

let user2 = JSON.parse(JSON.stringify(user));
