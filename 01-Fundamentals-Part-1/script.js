//Values and Variables
let js = "bhala";
console.log(js);

let k = 45 + 43 - 8 + 20;
console.log(k);

let firstName = "Nafis";
console.log(firstName);

console.log("I am Apron");



//Data Types
let bool = true;
console.log(bool);
console.log(typeof (bool));

bool = "is not boolean anymore";
console.log(bool);
console.log(typeof (bool));



//Let, Const, Var
Let -       can be mutated(re-assigned) (Block-scoped)
Const -     can not be mutated (re-assigned) and must initialized when declaring
var -       somewhat similar to "let" (Function-scoped)



//Operators
//Arithmatic - Operators
const now = 2023;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah, 2 ** 5); //2**5 equals to 2 to the power 5

const firstName = "Nafis";
const lastName = "Arpon";
console.log(firstName + " " + lastName);

//Assignment - Operators
let x = 10 + 5;
console.log(x);
x += 5;
console.log(x);
++x;
console.log(x);

//Comparison - Operators
console.log(ageJonas < ageSarah);   //> < >= <=

//Strings, Templet Literals
//Template literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 2003;
const year = 2023;

const infoNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;        //No need to even use \n for new line. just hit enter
console.log(infoNew);

//Control/Conditional-Structures
//If-else also works the same way as other languages.
//Switch statements also works with strings
const day = "Wednesday";
switch (day) {
    case "Sunday":
    case "Saturday":
        console.log(`It's not Friday`);
        break;
    case "Friday":
        console.log(`Better pray!`);
        break;
    default:
        console.log(`Nothing to do`);

}

//Ternary-op
const age = prompt(`Whar is your age?`);
(age >= 18) ? console.log(`Die soon`) : console.log(`Too young`);

***const str = (age >= 18) ? `wine` : `water`;***
console.log(str);

//Type-Casting
//int-Number, string-String; NOT Booleans;
//Truthy-Falsy
//Falsy - 0, "", undefined, null, NaN will return False always;
//it seemed like bs 

//Type-Coercion (auto-conversion)
console.log("I'am "+ 21 + " years old") == console.log("i'am "+ "21" + " years old.");
// '+' = everyithing converting to String;      '-','*','/' = mostly converts to numbers;



//Logical-Operators
//same as other languages



//Equality - Operators
// === to check if the value is exact to something      (DOES NOT DO TYPE-COVERSION AUTO or TYPE COERCION)
// == to check if value is exact                        (Does TYPE COERCION)



//I/O;
const age = prompt("What is your age?");   //prompt - to get value with a prompt
console.log(age);                          //console.log() - to print value



