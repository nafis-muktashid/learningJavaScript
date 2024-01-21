"use strict";

/*
JavaScript - JavaSctipt is a high-level, garbage-collected, Interpreted or just-in-time compiled, 
    multi-paradigm, prototype-based object oriented, first-class functioined, 
    dynamically typed, single-threaded, non-blocking event looped programming language.

Paradigm - An approach and mindset of structuring code, which will direct your 
    coding style and technique.
    
    Types of paradigm
    1. Procedural programming
            linear normal coding.
    2. Object-oriented programming (OOP)
    3. Functional programming (FR)

Every scope always has access to all the variables from all its outer scopes. This is the scope chain
Scope Chain - : Space or environment in which a certain variable is declared 
    (variable environment in case of functions). 
    
    There are 3-types of scopes: ;
    1. Global scope,
    2. Function scope, and
    3. Block scope. 

    var - Function scoped; const, let - block scoped
    
*/


function calcAge(birthYear) {
  const age = 2030 - birthYear;

  console.log(firstName);    //Will work because the firstName is the global scope

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1995) {
      //Creating new variable for this block
      const firstName = "Arpon";
      var millenial = true;
      const str = `Oh, you are a millenial too ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      //Reasinging the parent scoped variable.
      output = "NEW STRING";
    }
    console.log(str);        //Won't work. cause "str" is child function scoped variable of funtion printAge. If it was declared as "var" then it would have work.
    console.log(millenial); //Like this works.
    console.log(add(2, 3));  //Won't work. Case in "strict mode" function is block scoped.
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = "Nafis";
calcAge(1991);

console.log(age);   //Won't work. Cause it is in a child function scope.
printAge();         //Similar reason for this too







// Hoisting and TDZ in Practice
// Variables
console.log(me);
console.log(job);    //Won't work cause :- Let and Const stays in Temporal Dead Zone and won't work before initializing and declaring.
console.log(year);   //Won't work cause :- Let and Const stays in Temporal Dead Zone and won't work before initializing and declaring.

var me = "Jonas";
let job = "teacher";
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
