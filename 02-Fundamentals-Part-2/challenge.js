'use strict';


//Task - 1
const calcAverage = (s1,s2,s3) => (s1+s2+s3)/3;

function checkWinner(avgKoala, avgDolphin){
	if(avgKoala >= 2*avgDolphin) return `Koala wins (${avgKoala} vs ${avgDolphin})`;
	else return `Dolphins wins (${avgDolphin} vs ${avgKoala})`; 
}

const avgDolph = calcAverage(44,23,71);
const avgKol = calcAverage(65,54,49);

const winner = checkWinner(avgKol, avgDolph);
console.log(winner);



// Task - 2
function calcTip(bill){
	let tip;	
	if((bill >= 50) && (bill<=300)){
		tip = (bill*0.15);		
	} else {
		tip = (bill*0.2);	
	}
	return tip;
}

const bills = [125,555,44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total =[tips[0]+bills[0], tips[1]+bills[1], tips[2]+bills[2]];

console.log(`Bills are`);
console.log(bills);
console.log(`Tips on bills are`);
console.log(tips);
console.log(`Total for bills are`);
console.log(total);



//Task - 3
const markInfo = {
	fullName: "Mark Miller",
	mass: 78,
	height: 1.69,
	BMI: 0,
	
	calcBMI: function(){
		this.BMI =  this.mass/(this.height**2);
	}
}
const johnInfo = {
	fullName: "John Smith",
	mass: 92,
	height: 1.95,	
	BMI: 0,
	
	calcBMI: function(){
		this.BMI = this.mass/(this.height**2);
	}
}

if(johnInfo.calcBMI()>markInfo.calcBMI()){
	console.log(`${johnInfo.fullName}'s BMI (${johnInfo.BMI}) is higher than ${markInfo.fullName}'s (${markInfo.BMI})`);
}else{	
	console.log(`${markInfo.fullName}'s BMI (${markInfo.BMI}) is higher than ${johnInfo.fullName}'s (${johnInfo.BMI})`);
}



//Task - 4
const bills = [22,295,176,440,37,105,10,1100,85,52];
const tips = [];
const totals = [];

function calcTip(bill){
	let tip;	
	if((bill >= 50) && (bill<=300)){
		tip = (bill*0.15);		
	} else {
		tip = (bill*0.2);	
	}
	return tip;
}

for(let i=0; i<bills.length; ++i){
	tips.push(calcTip(bills[i]));
	totals.push(tips[i]+bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

//Bonus Task
function calcAverage(arr){
	let tots = 0;
	for(let i=0; i<arr.length; ++i){
		tots += arr[i];
	}
	return tots/arr.length;
}

console.log(calcAverage(totals));


