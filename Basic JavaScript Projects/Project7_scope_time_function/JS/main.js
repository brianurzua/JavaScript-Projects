// This will be a global variable
var x = 'hello'  //Global variable because it is out of the function
function greet() {
	document.write( "<br>" +  "<br>" + x + "<br>" );
}
greet();

//This is a local variable
function greet2() {
	x = 'Hello World';  //local variable because it's within the function
	document.write('<br>' + x + "<br>");
}
greet2();

function multNum(x, y) {
	console.log (x * y); //The error will be the capital C in console
}
multNum(3,2);


// This is a nested function that I was testing out on my own.
// function multiplyNums() {
// 	document.getElementById('Nested').innerHTML = prodNum();
// 	function prodNum() {
// 		var x = 11;
// 		var y = 2;
// 		return x * y;
// 	}
// }



//This code is for the Method Assignment
function timeOfDay() {
	if (new Date().getHours()>12) {
		document.getElementById('tiempo').innerHTML = 'I see that you are back after 12pm today!'
	}
}

//This code is for my own if statement assigned on step #147 of JS course
	// This will turn text blue. 
function colorText() {
	var text = document.getElementById('inp').value; //Gathers input from input box
	if (text === "blue") {
		document.getElementById('myIfStatement').style.color = "blue"; // When user types in blue, the text turns blue
	}
	else{
		document.getElementById('myIfStatement').style.color = "black"; // text turns black, when user doesn't type blue.
	}
}


//This if the time function
function Time_Function() {
	var Time = new Date().getHours();
	var Reply;
	if (Time < 12 == Time > 0) {
		Reply = 'It is morning time!';
	}
	else if (Time >= 12 == Time < 18) {
		Reply = 'It is Afternoon.';
	}
	else{
		Reply = 'It is evening time.';
	}
	document.getElementById('Time_of_Day').innerHTML = Reply;
}