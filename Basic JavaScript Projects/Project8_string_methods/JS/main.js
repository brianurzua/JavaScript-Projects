//Concat method
function my_Sentence() {
	var Part_1 = 'You have to ';
	var Part_2 = 'flow like water.';
	var fullSentence = Part_1.concat(Part_2);
	document.getElementById('ConcatSent').innerHTML = fullSentence;
}

//Slice method
function my_slice() {
	var sentence = 'Naruto is the best anime ever!';
	document.getElementById('slicing').innerHTML = sentence.slice(14,18);
}

//The upper case method
function upCase() {
	var x = 'i need to get out of here!';
	document.getElementById('upper').innerHTML = x.toUpperCase();
}

//The string method
function stringMeth() {
	var x = 18888888;
	document.getElementById('num_strings').innerHTML = x.toString();
}

//The precision method
function preCise() {
	var b = 1488.9274652761467347
	document.getElementById('precision').innerHTML = b.toPrecision(5);  // b will go to 5 digits
}

//The toFind() method
	//toFixed() converts a number to a string, rounded to a specified number of decimals
function finding() {
	var y = 7.89625413;
	document.getElementById('round').innerHTML = y.toFixed(2); 
}


//The Valueof method
	//The valueOf() method returns the primitive value of the specified object.
function my_value() {
	var z = 'Hello, how are you doing?';
	document.getElementById('values').innerHTML = z.valueOf();
}
