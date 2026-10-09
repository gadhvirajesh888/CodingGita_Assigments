
// ==========================================
// Assignment : Introduction to Variables and Datatypes
// ==========================================


// Q-1 Personal Information Declare variables for name, age, and city using appropriate variable keywords. Assign values and print all three variables.
let name="Rajesh"
let age= 17
let city="Ahmedabad"

console.log(name)
console.log(age)
console.log(city)

//Q-2. Change the Score Create a variable score with the value 50. Change its value to 80 and print the final value. Use the appropriate keyword for a value that can change.
let score=50
score=80

console.log(score)

//Q-3. Constant Value Create a constant variable PI with the value 3.14. Print its value. Do not try to change the value.
const PI=3.14;
console.log(PI)

//Q-4. Uninitialized Variables Declare one variable having name num1 using var and one having name num2 using let without assigning values. Print both variables. Then assign values to them and print the values again.

var num1;
let num2;
console.log(num1);
console.log(num2);
num1 = 12;
num2 = 11;
console.log(num1);
console.log(num2);

/*Q-5. Choose the Correct Keyword Create the following variables using the most appropriate keyword:
. studentName — the value will not change
. marks — the value may change
. schoolName — the value will not change
Assign values to all three variables. Change marks and print all variables.*/

const studentName = "Rajesh"
let marks = 70
const schoolName = "CodingGita"

marks = 75

console.log(studentName)
console.log(marks)
console.log(schoolName)

//Q-6. Understand Scope Write a program where var, let, and const variables are declared inside an if block. Try to access all three variables outside the block. Observe and identify which variables can be accessed.

x=10
if(x){
    var user=1
    let user1=2
    const user2=3
}

console.log(user)
console.log(user1)
console.log(user2)

//Q-7. Test Re-declaration Declare a variable named user using var and declare it again with a different value. Then perform the same experiment using let. Observe what happens and identify which declaration allows re-declaration.

var user=1  // var allows re-declaration
var user=2
let user1=3 // let dont allows re-declaration
//let user1=4 --> shows error

console.log(user)
console.log(user1)

//Q-8. Test Re-assignment Create three variables using var, let, and const. Assign an initial value to each. Try to change the value of all three variables. Observe which variables allow re-assignment and which one produces an error.

var var1=111 // var => allows re-assignment
var1=222

let let1=111 // let => allows re-assignment
let1=222

const const1=111
//const1=222  --> shows error because const dont allow re-assignment

console.log(var1)
console.log(let1)
console.log(const1)

/* Q-9. Predict and Explain Without running the code, predict the output of each console.log() and identify which lines cause errors. Explain your answer using the rules of scope, re-assignment, and variable declaration.
var x = 10;

if (true) {
    var x = 20;
    let y = 30;
    const z = 40;
}

console.log(x);
console.log(y);
console.log(z); */

OUTPUT --> 
20
ReferenceError: y is not defined
ReferenceError: z is not defined


var x = 10; declares x in the surrounding function/global scope.
Inside the if block, var x = 20; does not create a new block-scoped variable. var is function-scoped, so it reassigns the existing x from 10 to 20.

/* Q-10. Fix the Program The following program contains multiple errors. Fix the code so that it runs correctly. Make sure your solution follows the rules for initialization, re-declaration, re-assignment, and scope.
const name;

let age = 20;
let age = 25;

if (true) {
    var city = "Delhi";
    let country = "India";
}

console.log(country);

const score = 50;
score = 80;
*/


const name = "John";

let age = 20;
age = 25;

if (true) {
    var city = "Delhi";
    let country = "India";

    console.log(country);
}

console.log(city);

const score = 50;
console.log(score);



