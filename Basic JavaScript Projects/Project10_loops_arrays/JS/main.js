//This is a while loop
function my_whileLP() {
	var num = " ";
	var x = 0;
	while (x < 5){
		x++;
		num += '<br> I am number ' + x;
	}
	document.getElementById('whileLp').innerHTML = num;
}


//Length property challenge
var x = 'I want to go on a run';
document.getElementById('len').innerHTML = x.length;


//For loop Assignment
var music_genres = ['Hip-Hop', 'R&B', 'Pop', 'Dance', 'Rock'];
var genres = '';
var x;
function for_loop() {
	for (x = 0; x < music_genres.length; x++) {
		genres += music_genres[x] + '<br>';
	}
	document.getElementById('musiq').innerHTML = genres;
}

//Array Assignment
function array_function() {
	var Runs = ['Jogging', 'Sprinting', 'Intervals', 'long distance'];
	document.getElementById('Array').innerHTML = "I love " + Runs[2] + "."; 
	//index 2 would be Intervals, becuase arrays start at index 0
}


// Const Keyword Assignment
function constant_function() {
	const my_car = {make:"Audi", model:"RS7", year:"2017"};
	my_car.year = "2022";
	my_car.gas = "Premium";
	document.getElementById('Constant').innerHTML = 'I drive a ' + my_car.model + ' which was made in '
	+ my_car.year + '.';
}

//Let var assignment
function letKey(){
	let b = 25
	document.getElementById('letVar').innerHTML ='I am using the let keyword, I am b and I am ' + b + '.' 
}

//Return Statement
function sum() {
	document.getElementById('Numsadd').innerHTML = addNums();
	function addNums() {
		var x = 22;
		var y = 89349;
		return x + y
	}
}


// Object assignmnet
let shoe = {
	brand: "Nike",
	subBrand: "Jordan",
	style: "Air Jordan 1",
	material: "Leather",
	colorWay: "University Blue",
	model: "High top",
	releaseDate: function() {  //"function" must stay, if you try to change it will be a bug. Found out in DevTools.
		return "The release date for the " + this.colorWay + " " + this.style + " will be March 6th, 2021.";
	}
};
document.getElementById('shoe_release').innerHTML = shoe.releaseDate();


//Break and Continue statements
function breakState() {
	var x = 0 
	while(x < 6){
		if (x == 4) {break;}
		x += 1;
	}
	document.getElementById('broken').innerHTML = x; //This loop will break at 4
}

function conState() {
	var text = "";
	for (let x = 0; x < 6; x++) {
		if (x === 2) {continue;}
		text += 'I am number ' + x + '<br>';
	}
	document.getElementById('keepGoing').innerHTML = text; //This loop will skip 2 and contiue until 6
}

