//Switch Statement Assignment
function animalChar() {
	var animal = document.getElementById('inp').value;
	switch (animal){
		case 'lions':
			document.getElementById('outPut').innerHTML = "Lions have manes and are considered kings of the jungle!";
			break;
		case 'bears':
			document.getElementById('outPut').innerHTML = "Bears have paws and claws!";
			break;
		case 'wolves':
			document.getElementById('outPut').innerHTML = "Wolves have 42 teeth and a powerful bite!";
			break;
		case 'zebras':
			document.getElementById('outPut').innerHTML = "Zebras have black and white stripes that connect to their belly!";
			break;
		default:
			document.getElementById('outPut').innerHTML = "Please select an animal from the list above";
			break;			
	}
}


//The getElementsByClassName() Method
function fruitColor() {
	var color = document.getElementsByClassName('fruits');
	color[0].style.color = 'gold'; // I made the first index of this class turn to the color gold
}


//Using the canvas element for graphics

/*------------- This code will draw a circle --------
var	c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2*Math.PI);
ctx.stroke(); 
---------------------------------------------------*/

/*--- This is a circular gradient ---*/

var	c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');

var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "purple");
grd.addColorStop(1, "yellow");

ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);


