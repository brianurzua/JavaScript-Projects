function Ride_Function() {
	var Height, Can_ride;
	Height = document.getElementById('Height').value;
	Can_ride = (Height<52)? 'You are too short':'You are tall enough';
	document.getElementById('Ride').innerHTML = Can_ride + ' to ride.';
}

//Ternary operator challenge
function voteAge() {
	var Age, can_vote
	Age = document.getElementById('Age').value; //This line grabs input from element Id 'Age'
	can_vote = (Age<18)? 'You are not old enough to vote':'You can vote!'; //This will take input and evaluate
	document.getElementById('verify').innerHTML = can_vote; //This will let user see our verification
}


//Reserved Keyword Challenge
	// Challenge No. 1: Assign a variable the value of a reserved word. Attempt to display this in the browser.
// var true = x;
// document.write(true); //This does not display because its a reserved word. 

//Challenge No. 2: Write an object constructor function.
	//This is a constructor function for Animal/Pet objects
function Pet(Animal, Breed, Color, Name) {
	this.Pet_Animal = Animal;
	this.Pet_Breed = Breed;
	this.Pet_Color = Color;
	this.Pet_Name = Name;
}

var Brian = new	Pet('Dog', 'Doberman', 'Red', 'Charlie');
function myPet(){
	document.getElementById('New_and_This').innerHTML = 
	"Brian has a " + Brian.Pet_Breed + " that is " + Brian.Pet_Color + " and is named " + Brian.Pet_Name;
}

//Nested Function assignment from step 139
function counter() {
	document.getElementById('counting').innerHTML = count();
	function count() {
		var starting_point = 9;
		function plus_one() {starting_point += 1;}
		plus_one();
		return starting_point;
	}
}
