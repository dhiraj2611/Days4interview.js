

console.log("day 4");

// 1.What is a Temporal Dead Zone
// A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible until
// the moment the computer completely initializes it with a value. It is a phase or zone between declaration and initialisation 
//for let and const variables where we can't access variables and js engine will throw error.

//==========================================================================================================================

//2. What is the for-in loop in JavaScript? Give its syntax
//for in loop will give you keys of an object an indexes of an array. 
let obj1 = {
  Brand: "Apple",
  Model: "Iphone 13",
  RAM: 3
};

for (let i in obj1) {
  console.log(i);
}

//==========================================================================================================================

//3. Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript

// Block scope: The block scope of a variable means that the variable is accessible within the block that is between the curly braces.

if(true)
{
  var v1 =10;
  let v2=20;
  console.log(v1);//10
  console.log(v2); //20
}

console.log(v1);//10
//console.log(v2);//error

// Function scope: This scope means that the variables are only accessible in the function in which they are declared.

function fun()
{
	var temp ="temp is defined in function scope";
	console.log(temp); 
}

fun();
//console.log(temp);//error

// Local scope: Variables declared inside a function become local to the function. Local variables are created when
// a function starts and deleted when the function is executed. Local variables have Function Scope which means that they
//  can only be accessed from within the function.

function createUserName() {
    var userName = "Bill";
}

function showUserName() {
    alert(userName);
}

createUserName();
showUserName(); // throws error: userName is not defined

// Global scope: Variables declared outside of any function become global variables. Global variables can be accessed and modified from any function.

var userName = "Bill";

function modifyUserName() {
        userName = "Steve";
    };

function showUserName() {
        alert(userName);
    };

alert(userName); // display Bill

modifyUserName();
showUserName();// display Steve

//==========================================================================================================================

// 4.What is difference between null and undefined and where to use what?

// In JavaScript, undefined means a variable has been declared but has not yet been assigned a value
// null is an assignment value. It can be later be updated with a value.

//==========================================================================================================================

//5. what is Symbol?
// Symbol Symbol is a primitive data type of JavaScript, along with string, number, boolean, null and undefined.
//The JavaScript ES6 introduced a new primitive data type called Symbol. Symbols are immutable (cannot be changed) and are unique.

// two symbols with the same description

const value1 = Symbol('hello');
const value2 = Symbol('hello');

console.log(value1 === value2); // false

//==========================================================================================================================

// 6.Write code to explain map and filter in arrays

let myArray = [10, 20, 30, 40, 50, 60, 70];

let myArray1 = myArray.map((item) => item + 50);
console.log(myArray1);

let myArray2 = myArray.filter((item) => item > 30);
console.log(myArray2);

//==========================================================================================================================

// 7. Explain passed by value and passed by reference
//In javascript pass by value, the function is called by directly passing the value of the variable as the argument. 
//Therefore, even changing the argument inside the function doesn’t affect the variable passed from outside the function.
let a = 10;
let b = a;
b = a + 10;
console.log(a);//10
console.log(b);//20

//In Pass by Reference, a function is called by directly passing the reference/address of the variable as the argument. 
//Changing the argument inside the function affects the variable passed from outside the function. In Javascript objects and arrays are passed by reference.

var object1 = { 
    'website': 'Scaler Topics',
    'topic': 'JavaScript'
    };
    
var object2 = object1;    
object1 === object2;  // true

//==========================================================================================================================

// 8.Please explain Self Invoking Function and its code
// In JavaScript, a 'Self-Invoking' function is a type of function that is invoked or called automatically after its definition. 
//The execution of such an anonymous function is done by enclosing it in a parenthesis set followed by another set of parenthesis.
//Ex.
(function () {
  console.log("I called Myself here!");
})();