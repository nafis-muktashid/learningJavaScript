// Remember, we're gonna use strict mode in all scripts now!
"use strict";


const x = 21;
const y = 21;

if (x === y) {
  console.log("asdasd");
} else {
  console.log("probably");
}

console.log("My name Arpon");



//Small Task - 1
/*
	We work for a company building a smart home thermometer. Our most recent task is this:
	"Given an array of temparatures of one day, calculate the temparature amplitude. Keep in mind
	that sometimes there might be a sensor error."	
*/

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 1; i < temps.length; ++i) {
    const curTtemp = temps[i];

    if (curTtemp > max) max = curTtemp;
    if (curTtemp < min) min = curTtemp;
    if (curTtemp === NaN) continue;
  }

  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);



//Small Task - 2
//Function should now receive 2 arrays of temparatures.

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const temperatures_1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temparatures_2 = [4, -3, -1, -5, 3, 22, 18, 19, "error", 5, 7, 8];

const calcTempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 1; i < temps.length; ++i) {
    const curTtemp = temps[i];

    if (curTtemp > max) max = curTtemp;
    if (curTtemp < min) min = curTtemp;
    if (curTtemp === NaN) continue;
  }

  return max - min;
};

const amplitude = calcTempAmplitude(temperatures_1, temparatures_2);
console.log(amplitude);



//// Debugging

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",

    // C) FIX
    // value: Number(prompt('Degrees celsius:')),
    value: Number(prompt("Degrees celcius: ")),
  };

  // B) FIND
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());



//Debugger

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  //console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);


