// These are the variables for function assignment on step 66 of Javascript course
var x = 'Hello'
document.write(x)
var y = ' You!'
document.write(y)


// For element tiempo in HTML page
function displayDate() {
	document.getElementById('tiempo').innerHTML = Date();
}


// Using the += operator
function writeSentence(){
	var sentence = 'I am just ';
	sentence += 'a rodeo clown!';
	document.getElementById('rodeo').innerHTML = sentence;
}