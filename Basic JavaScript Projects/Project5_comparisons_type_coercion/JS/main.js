//Type of Operator Assignment
document.write(typeof 'Hello'); //This will print out 'string'

document.write('<br>'); //This break statement will separate operators

document.write(typeof 3);  //This will print out number

document.write('<br>');

//Type Coercion assignment
document.write('22' + 5); //This will print out 225
document.write('<br>');

// This is the NaN challenge
function myFunc() {
	document.getElementById('test').innerHTML = 0/0;  //Displays NaN
}
function myFunc2() {
	document.getElementById('test2').innerHTML = isNaN('This is a string'); //Results true
}
function myFunc3() {
	document.getElementById('test3').innerHTML = isNaN('007');  //Results false

}

//infinity Assignment
document.getElementById('inf').innerHTML = 3E310; //This will show as 'Infinity'
document.getElementById('ninf').innerHTML = -6E310; //This will show as '-Infinity'

//Boolean logic assignment
document.getElementById('booP').innerHTML = (6 > 3);  //This will be true
document.getElementById('booN').innerHTML = (8 < 7);  //This will be false

//Console log 
console.log(3 + 2); //This will be done in the console tab of the DevTools in browser.

//Boolean challenge using console log
console.log(5 > 10); //This will display false in console tab of DevTools in browser


// Double Equal sign assignment
document.getElementById('equalTr').innerHTML = ((10 + 7) == 17);  //This will be true
document.getElementById('equalFa').innerHTML = ( 111 == 100);  //This will be false

// Triple Equal assignment
var x = 22;
y = 22;
document.write(x === y); // Will return True

document.write('<br>');

var	birthDate = 1/22/98;
	runTime = 7.08;
document.write(birthDate === runTime); // Will return False, due to different data type and different value

document.write('<br>');

var	x = 22;
	y = '22';
document.write(x === y);  // Will return False, due to different data type but same value

document.write('<br>');

var	x = 22;
	y = 23;
document.write( x === y);  // Will return False, due to same data type but diff value

document.write('<br>');

//And & Or operator assignment
document.write(10 > 5 && 22>21); //This AND operator will display true
document.write('<br>');

document.write(5 > 10 && 22 < 50); //THis AND operator will display false
document.write('<br>');

document.write(22>25 || 22>21);  //This OR operator will display true because one is true
document.write('<br>');

document.write(21>22 || 19>25);  //This OR operator will display false because none are true
document.write('<br>');


// Not operator assignment
function notOp() {
	document.getElementById('not').innerHTML = !(22 > 12);  //This will return False
}

function notOp2() {
	document.getElementById('not2').innerHTML = !(15 > 18);  //This will return True
}