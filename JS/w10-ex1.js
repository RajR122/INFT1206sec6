// function Declaration\

function greeting1(){
    console.log("Hello World");
}

greeting1(); // Hello World

function greeting2(){
    return "Hello";
}

let str = greeting2();

console.log(str);
console.log(greeting2());

function greeting3(name){
    //return "Hello " + name;
    //return 'Hello ' + name;
    //return `Hello` + name;
    return `Hello ${name}`;
}
console.log(greeting3("Raj"));
console.log(greeting3(50));
console.log(greeting3());

function greeting4(name='Sam'){
    //return "Hello " + name;
    //return 'Hello ' + name;
    //return `Hello` + name;
    return `Hello ${name}`;
}
console.log(greeting4());
console.log(greeting3('Tom'));

function sum(num1=0, num2=0){
    return num1 + num2;
}
console.log(sum(3,5));
console.log(sum('3','5'));
console.log(sum('Hi ','Raj'));
console.log(sum(3));
console.log(sum(3,5,9));
console.log(sum());


// Functon Expression
let m = sum();
console.log(m);
console.log(typeof(m));

let f = sum;
console.log(typeof(f));
console.log(f(6,10));
f=9;
// console.log(f(6,10));

const f2 = function(){
    return "Good Afternoon";
};

console.log(f2());

// Arrow Expression
const f3 = ()=>"Good Night";

console.log(f3());

const sum2= function(num1=0, num2=0){
    return num1 + num2;
}

const sum3 = (num1=0, num2=0)=>num1 + num2;
console.log(sum2(2,3));
console.log(sum3(2,3));
console.log(typeof(sum3));


