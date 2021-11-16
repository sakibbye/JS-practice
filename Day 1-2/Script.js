/*
let firstName  = 'John';
console.log(firstName);


let lastName  = 'Smith';
let age  = 25;

let fullAge  = true;

console.log(fullAge);

let job;
console.log(job);

job ='Teacher';

console.log(job);


//variable naming rule
let _3years =3;
let johnMark ='John and mark'
*/



/********************
//type coerction
let firstName  = 'John';

let age  = 25;

console.log(firstName + ' ' + age ); 
 
let job, isMarried;
job = 'Teacher';
//isMarried =false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

//type mutation

age = 'Twenty five';
job  = 'driver';

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

let lastName  = prompt ('What is his last name?');
console.log(firstName + ' ' + lastName);
alert(firstName + ' ' + lastName);

*/


/**************
basic operators
**************/


/*
let year = 2020;
let yearJohn = 2020 - 25;
let markYear = year - 28;
ageJohn = 25;
ageMark = 28;
console.log(yearJohn);

console.log(year + 2);
console.log(year * 2);
console.log(year / 10);


//logical operators
let johnOlder  = ageJohn > ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older');
let x;

console.log(typeof x);

*/


/*
let now  = 2018;
let yearJohn  = 1989;
let fullAge = 18;

let isFullAge  = now - yearJohn >= fullAge;

console.log(isFullAge);

let ageJohn = now - yearJohn;
let ageMark = 35;
let avAge = (ageJohn + ageMark) / 2;
console.log(avAge);

let x, y;

x = y = (3 + 5) * 4 - 6;
console.log(x,y);

x = x + 2;
console.log(x);
x+= 10;
console.log(x);
x++;
console.log(x);

*/

/*
let r1 = 124;
let r2 = 48;
let r3 = 268;

let t1, t2, t3; 

if(r1 < 50)
    t1 = r1 * 0.2;
else if(50 < r1 && r1 < 200)
    t1 = r1 * 0.15;
else
    t1 = r1 * 0.1;

if(r3 < 50)
    t3 = r3 * 0.2;
else if(50 < r3 && r3 < 200)
    t3 = r3 * 0.15;
else
    t3 = r3 * 0.1;

if(r2 < 50)
    t2 = r2 * 0.2;
else if(50 < r2 && r2 < 200)
    t2 = r2 * 0.15;
else
    t2 = r2 * 0.1;


console.log('Tips are ' +t1+', '+ t2+', '+t3);
console.log('Bills are ' +(r1+t1)+', '+ (r2+t2)+', '+(r3+t3));

*/

/*

function tipCalc(bill) {
    let percentage;
    if (bill < 50)
        percentage  = .2;
    else if (bill >= 50 && bill < 200)
        percentage  = .15;
    else percentage  = .1;
    
    return percentage*bill;
}

console.log(tipCalc(200));

let bills =[124, 48, 268];
let tips = [tipCalc(bills[0]),
          tipCalc(bills[1]),
          tipCalc(bills[2])];
let finaleBill = [bills[0] + tips[0],
                bills[1] + tips[1],
               bills[2] + tips[2]];

console.log(tips);

console.log(finaleBill);


*/

/*
let john  = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
    this.bmi =this.mass / (this.height ** 2);
    return this.bmi;
}
}


let Mark  = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
    this.bmi =this.mass / (this.height * this.height);
    return this.bmi;
}
}



if(john.calcBMI() > Mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI of '+ john.bmi);
    
}

else if (john.bmi< Mark.bmi) {
    console.log(Mark.fullName + ' has a higher BMI of '+ Mark.bmi);
    
}

else console.log('Same BMI');
*/
/*
let john  = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'Teacher',
    isMarried: false
};

console.log(john.fullName);
let x  = 'birthYear'
console.log(john[x]);

john.Job  = 'Designer';
john['isMarried']  = true;
console.log(john);

let jane  = new Object();
jane.fullName  = 'Jane Smith';
jane.birthYear  = 1991;
console.log(jane);

*/

/*

let john  = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'Teacher',
    isMarried: false,
    calcAge : function() {
        this.age = 2021 - this.birthYear;
    }
}

john.calcAge();
console.log(john);

*/

/*
for(let i = 0; i < 10; i++) {
    console.log(i);
}
*/

/*
let i =0;
while (i < john.length ) {
    console.log(john[i]);
    i++;
}
*/


let john  = ['John', 'Smith', 1990, 'Teacher', false];

for (let i  = 0; i < john.length; i++) {
    if(typeof john[i] !== 'string') 
    break;
    console.log(john[i]);
} 
