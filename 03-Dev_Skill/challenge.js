"use strict";

//Coding Challenge - 1

const givenArr_1 = [17, 21, 23];
const givenArr_2 = [12, 5, -5, 0, 4];

function printForecast(arr_1, arr_2){
	const array = arr_1.concat(arr_2);	
	let str = "";
	for(let i=0; i<array.length; ++i){
		str += ` ... ${array[i]}^C in ${i+1} days`;
	}	
	console.log(str);
}

printForecast(givenArr_1, givenArr_2);
