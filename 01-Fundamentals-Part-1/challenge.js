//Coding Challenge - 1
const marksWeight_1 = 78, marksHeight_1 = 1.69, johnWeight_1 = 92, johnHeight_1 = 1.95;
const marksWeight_2 = 95, marksHeight_2 = 1.88, johnWeight_2 = 85, johnHeight_2 = 1.76;
const bmiMark_1 = marksWeight_1 / (marksHeight_1 ** 2), bmiJohn_1 = johnWeight_1 / (johnHeight_1 ** 2);
const bmiMark_2 = marksWeight_2 / (marksHeight_2 ** 2), bmiJohn_2 = johnWeight_2 / (johnHeight_2 ** 2);

const markHigherBMI_1 = bmiMark_1 > bmiJohn_1;
const markHigherBMI_2 = bmiMark_2 > bmiJohn_2;

console.log(bmiMark_1, bmiJohn_1, markHigherBMI_1);
console.log(bmiMark_2, bmiJohn_2, markHigherBMI_2);



//Coding Challenge - 2
if (bmiMark_1 > bmiJohn_1) {
    console.log(`Mark's BMI is higher than John's!`);
    console.log(`Mark's BMI ${bmiMark_1} is higher than John's ${bmiJohn_1}!`);
} else {
    console.log(`John's BMI is higher than Mark's!`);
}
if (bmiMark_2 > bmiJohn_2) {
    console.log(`Mark's BMI is higher than John's!`);
} else {
    console.log(`John's BMI is higher than Mark's!`);
    console.log(`John's BMI ${bmiJohn_2} is higher than Mark's ${bmiMark_2}!`);
}




//Coding Challenge - 3
const dolphinScore = 97 + 112 + 101, koalaScore = 109 + 95 + 106;
const dolphinAvg = dolphinScore / 3, koalaAvg = koalaScore / 3;

console.log(`Task_1`);
if (dolphinAvg > koalaAvg) {
    console.log(`Dolphin wins with an average of ${dolphinAvg} and ${dolphinAvg - koalaAvg} more than Koalas!`);
} else if (dolphinAvg < koalaAvg) {
    console.log(`Koala wins with an average of ${koalaAvg} and ${koalaAvg - dolphinAvg} more than Dolphins!`);
} else {
    console.log(`It's a draw`);
}

console.log(`Task_2_and_Task_3`);
if (dolphinAvg > koalaAvg && dolphinAvg >= 100) {
    console.log(`Dolphin wins with an average of ${dolphinAvg} and ${dolphinAvg - koalaAvg} more than Koalas!`);
} else if (dolphinAvg < koalaAvg && koalaAvg >= 100) {
    console.log(`Koala wins with an average of ${koalaAvg} and ${koalaAvg - dolphinAvg} more than Dolphins!`);
} else {
    if ((dolphinAvg >= 100) && (koalaAvg >= 100)) {
        console.log(`It's a Draw with an average of ${dolphinAvg}! `);
    } else if ((dolphinAvg < 100) && (dolphinAvg > koalaAvg)) {
        console.log(`Minimum ${100 - dolphinAvg} score more needed to win!`)
    } else if ((koalaAvg < 100) && (koalaAvg > dolphinAvg)) {
        console.log(`Minimum ${100 - koalaAvg} score more needed to win!`);
    } else {
        console.log(`No team has won!`);
    }
}




//Coding Challenge - 4
const value = 430;
const tip = (value >=50 && value <=300)? (value*0.15):(value*0.2);
console.log(`The bill was ${value}, the tip was ${tip}, and the total value ${value+tip}`);




