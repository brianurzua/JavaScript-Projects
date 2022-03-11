// This is an addition function
function addNums() {
	var addition = 3 + 3;
	document.getElementById('math').innerHTML = '3 + 3 = ' + addition;
}

// This is a subtraction function
function subtractNums(){
	var subtraction = 6 - 2;
	document.getElementById('restar').innerHTML = '6 - 2 = ' + subtraction;
}


//This is a multiplication function
function multNums() {
	var mult = 6 * 2;
	document.getElementById('prod').innerHTML = '6 * 2 = ' + mult;
}

// This is a division function
function divNums() {
	var dvsn = 10 / 2;
	document.getElementById('divi').innerHTML = '10 / 2 = ' + dvsn;
}

// This is a multiple operation function
function multOp() {
	var oper = (3 + 6) / 9 * 5 - 2;
	document.getElementById('pemdas').innerHTML = '(3 + 6) / 9 * 5 - 2 = ' + oper;
}

// This is a modulus operator function
function modOp() {
	var modulus = 25 % 7;
	document.getElementById('modu').innerHTML = 'When you divide 25 by 7, you have a remainder of: ' + modulus;
}

// This is a negation operator function
function negaOp() {
	var x = 22;
	document.getElementById('nega').innerHTML = -x;
}

// This is an increment operator
var a = 22;
a++;
document.write('I used to be 22, now I am ' + a);

// This is a decrement operator
var b = 23;
b--;
document.write(' I was 23 a second ago, now I am back to being ' + b);

// This is the math.random() function
function randFun(){
	var c = Math.random() * 5;
	document.getElementById('rando').innerHTML = 'I am a random number between 0 and 5, see: ' + c;
}

// This is a math method for rounding
function demo(){
	let x = 5.66676677628;
// console.log(Math.round(x))
	document.getElementById('demo').innerHTML = 'I am the round method ' + Math.round(x);
}