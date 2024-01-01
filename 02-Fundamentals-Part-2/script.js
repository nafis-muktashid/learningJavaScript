'use strict';  //helps to write more secure codes


//Funtions
function logger() {
    console.log(`My name is Nafis`);
}
//Calling/Running/Invoking a function.
logger();
logger();

function cutPieces(fruit) {
    return 4 * fruit;
}

function fruitProcessor(apples, oranges) {
    const newApples = cutPieces(apples);
    const newOranges = cutPieces(orangesscript);

    const juice = `Juice with ${newApples} apples pieces and ${newOranges} oranges pieces. `;
    return juice;
}
const ans = fruitProcessor(2, 4);
console.log(ans);
console.log(fruitProcessor(5, 0));

//Function Declaration
function calculteAge(given) {
    return 2023 - given;
}
const age = 2002;
console.log(`You are ${calculteAge(age)} years old.`);

//Function Expression - can be called even before defining the expression
const calculteAge_2 = function calculteAge(given) {
    return 2023 - given;
}
console.log(`You are ${calculteAge_2(age)} years old.`);

//Arrow Function
//Simple
const calculteAge_3 = age => 2023 - age;
console.log(`You are ${calculteAge_3(age)} years old.`);
//Complex
const firstName = "Nafis";
const calculteAge_4 = (age, firstName) => {
    const boyosh = 2023 - age;
    return `${firstName} is ${boyosh} years old`;
}
console.log(calculteAge_4(age, firstName));



//Arrays
const friends = ["John", "Mike", "Peter"];
const years = new Array(1991, 2002, 2112, 2222);
console.log(friends);
console.log(years[0]);

console.log(friends[friends.length - 1]);

friends[1] = "Jade";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2023 - 1991, "teacher", friends];
console.log(jonas);

//Short Exercise
function calculteAge(given) {
    return 2023 - given;
}
const yearsNew = [1990, 1967, 2002, 2021];
const ages = [calculteAge(yearsNew[0]), calculteAge(yearsNew[1]), calculteAge(yearsNew[2]), calculteAge(yearsNew[3])];
console.log(ages);


const friends = ["John", "Mike", "Peter"];
//Array Methods
friends.push("Nafis");      //Add data to the end;
console.log(friends);

friends.unshift("Jade");    //Add data to the first;
console.log(friends);

friends.pop();              //Remove data from the end;
console.log(friends);

friends.shift();            //Remove data from the first;
console.log(friends);

console.log(friends.indexOf("Mike"));       //Returns the index of 'a' element;
console.log(friends.indexOf("Nafis"));      //Returns '-1' if not present in array;

//Uses strict equality (===)
console.log(friends.includes("Peter"));     //Returns true if element is present in the array;
console.log(friends.includes("Nafis"));     //Returns false if element is not present in the array;

And many more.........



//Objects
const jonas = {
    firstName: "Jonas",
    lastName: "Schmedmann",
    age: 2023 - 1991,
    job: "teacher",
    friends: ["John", "Peter", "Mike"]
}
console.log(jonas);

//Dot Notation
console.log(jonas.lastName);

//Bracket Notation      --  More convenient
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas[`first` + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt("What do you want to know about Jonas? firstName, lastname, age, job and friends");
if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
}

//Add value to the object
jonas.location = "Sweden";
jonas["passport"] = "Does have Passport";
console.log(jonas);

//Small Task
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


//Object Methods
const jonas = {
    firstName: "Jonas",
    lastName: "Schmedmann",
    birthYear: 1991,
    job: "teacher",
    friends: ["John", "Peter", "Mike"],
    hasDriversLicense: true,
    age: 0,

    // calcAge: function (birthYear) {
    //     return 2023 - birthYear;
    // }

    calcAge: function () {
        if (this.age != 0) return this.age;
        else return this.age = 2023 - this.birthYear;

    },

    getSummary: function () {
        let dLStr;
        if (this.hasDriversLicense) {
            dLStr = "has a driver's license";
        } else {
            dLStr = "does not have a driver's license";
        }
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he ${dLStr}`;
    }
}

console.log(jonas.calcAge());
console.log(jonas['calcAge']());

console.log(jonas.age);
console.log(jonas.age);

//Small task
console.log(jonas.getSummary());

//Array Methods are applicable to Objects too;



//Loops
let i = 1;
while (i <= 2) {
    console.log(`Line in while loop ${i}th time`);

    for (let j = 1; j <= 3; ++j) {
        console.log(`Line in for loop ${j}th time in a ${i}th time while loop`);

        let k = 1;
        do {
            console.log(`Line in do-while loop ${k}th time in ${j}th time for loop in a ${i}th time while loop`);
            ++k;
        } while (k <= 4)
    }

    ++i;
}


