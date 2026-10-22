// Spread Operator

const fruits = ["Banana" , "Apple" , "Mango" , "Guava"]
const veggies = ["Carrot" , "Brinjal" , "Beetroot" , "Cabbage"]
const flowers = ["Rose" , "Jasmine" , "Lilly" , "Lotus"]

const items = [...fruits,...veggies,...flowers]

console.log(items)

// let vs const //

// let

let age = 20;
age = 21;

console.log(age);

//const

// const name = "Chinnu";
// name = "Chinni";

// console.log(name);

// Arrow functions //

//Normal function

function add (a,b) {
    return a+b;
}

//In ES6

const addition = (a,b) => {
    return a+b;
}

// Template Literals //

// Normal Function

let namee = "Chinnu";

console.log("Hello" + namee);

// In ES6

let person = "Chinna";

console.log(`Hello ${person}`);

// Destructing //

// Array

const numbers = [ 10, 20, 30 ];

const [ a ,b ,c ] = numbers;

console.log(a);
console.log(b);
console.log(c);

// Object

const student = {
    member : "Chinnu",
    agee : 21
};

const { member , agee } = student;

console.log(member);
console.log(agee);

const lecturer = {
    name: "Chinna",
    ageee: 20 ,
    course: "JavaScript" ,
}

const {name, ageee , course} = lecturer;

console.log(name);
console.log(ageee);
console.log(course);

// Default Parameters //

// Normal function

function greet(name) {
    console.log("Hello" + name);
}

greet("Chinnu")

// In ES6 = if we give call the function at last with name it will print "HelloChinnu" , if we not pass any argument at last 
// it will print "HelloGuest"

function greet(name = "Guest") {
    console.log("Hello" + name);
}

greet("Chinnu");

// Spread Operators - with numbers

let digits = [ 10, 20, 30 ];

let newDigits = [...digits];

console.log(newDigits);

// Spread Operators - with two arrays of numbers

let p = [ 10, 20 ];
let q = [ 30, 40 ];

let r = [...p, ...q];

console.log(r);

// Spread Operators - with string

let identity = "Chinnu";

let id = [...identity];

console.log(id);

// Rest Opertors

function additionn (...integers) {
    console.log(integers);
}

additionn(10,20,30)

// Rest Operators - Normal Parameters + Rest

function addi (m, n,...numberss) {
    console.log(m);
    console.log(n);
    console.log(numberss);
}

addi(10,20,30,40,50);

// Map()

let idd = [ "Chinnu" , "Chinna" ]

let upperIdd = idd.map( idd => idd.toUpperCase());

console.log(upperIdd);

// MAP()

let personn = [ "Sharmila" , "Bhargavi"];

let upperPersonn = personn.map( personn => personn.toUpperCase());

console.log(upperPersonn);

// Find()

let studentss = [ "Chinna" , "Chinnu" , "Konda" ];

let result = studentss.find( studentss => studentss === "Chinnu");

console.log(result);

// Find() - with numbers

let digitss = [ 10 , 20 , 30 , 40 ];

let resultt = digitss.find( digits => digits > 35 );

console.log(resultt);

// Some()

let integers = [ 10 , 20 , 30 , 40 ];

let total = integers.some( integers => integers < 40 );

console.log(total);

// Every()

let num = [ 10 , 20 , 30 , 40 ];

let totall = num.every( num => num > 5);

console.log(totall);

// Every - if 1 condition is false than 3 conditions = false 

let nums = [ 5 , 10 , 15 , 20 ];

let totals = nums.every( nums => nums < 18 );

console.log(totals);

// includes() //

let numss = [ 10, 20, 30, 40, 50 ];

console.log(numss.includes(30));
console.log(numss.includes(60));

// includes() - with strings

let persons = ["Ram" , "Sita" , "Lakshman" , "Hanuman"];

console.log(persons.includes("Sita"));
console.log(persons.includes("Indra"));

// reduce() //

let numb = [ 10, 20, 30, 40 ];

let res = numb.reduce((total,numb) => {
    return total + numb;
},0);

console.log(result);

// sort() //

let digiits = [ 30, 20, 40, 10, 50 ];

digiits.sort();

console.log(digiits);

// sort() - with strings

let memberss = [ "Chinni" , "Teju" , "Ammu" , "Ramya" , "Bhanu" ];

memberss.sort();

console.log(memberss);

// sort() - Ascending order

let integerss = [ 100 , 70 , 50 , 90 , 30 ];

integers.sort((a,b) => a-b);

console.log(integerss);

// sort() - Descending order

let integeers = [ 20 , 10 , 50 , 40 , 80 ];

integeers.sort((a,b) => b-a);

console.log(integeers);