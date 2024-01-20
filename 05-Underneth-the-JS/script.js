'use strict';

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

  //   console.log(firstName);

  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1995) {
      const str = `Oh, you are a millenial too`;
      console.log(str);
    }
    // console.log(str);    Won't work. cause "str" is child function scoped variable of funtion printAge. If it was declared as "var" then it would have work.
  }
  printAge();

  return age;
}

const firstName = "Nafis";
calcAge(1991);

// console.log(age);   //Won't work. Cause it is in a child function scope.
// printAge();         //Similar reason for this too

