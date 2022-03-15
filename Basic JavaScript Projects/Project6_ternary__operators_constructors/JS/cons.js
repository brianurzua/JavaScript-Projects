// This is the JS code for constructor.html

function Vehicle(make, model, year, color) {
	this.Vehicle_make = make;
	this.Vehicle_model = model;
	this.Vehicle_year = year;
	this.Vehicle_color = color;
}

var Jack = new Vehicle('Dodge', 'Viper', 2020, 'Red');
var Emily = new Vehicle('Jeep', 'Trail Hawk', 2019, 'White and Black');
var Erik = new Vehicle('Ford', 'Pinto', 1971, 'Mustard');
function my_Func() {
	document.getElementById('Keywords_and_constructors').innerHTML =
	"Erik drives a " + Erik.Vehicle_color + '-colored ' + Erik.Vehicle_model + 
	' manufactured in ' + Erik.Vehicle_year;
}


