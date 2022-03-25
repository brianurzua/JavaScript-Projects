// variable for whose turn it is
let activePlayer = 'x';

//this stores an array of moves, also used to determine win conditions.
let selectedSquares = [];

//Function is for placing an x or o in a square
function placeXorO(squareNumber) {
	//this condition ensures a square hasn't been selected already
	//The .some() method is used to check each element of selectedSquare array
	//to see if it contains the square number clicked on.
	if(!selectedSquares.some(element => element.includes(squareNumber))){
		//This var retrieves the html element is that was clicked on
		let select = document.getElementById(squareNumber);
		//This condition checks who's turn it is.
		if (activePlayer === 'x') {
			//If activePlayer is equal to 'x' the image will be placed there
			select.style.backgroundImage = 'url(images/donutX.png)';
			select.style.backgroundSize = "cover";  // This resizes image to cover the square
			//active player may only be x or o, if not x then it must be o
		} 
		else {
			//if activePlayer is equal to 'o', the image will be placed
			select.style.backgroundImage = 'url(images/donutO.png)';
			select.style.backgroundSize = "cover";
		}
		//squarenumbers and activeplayer are concatenated together and added to array
		selectedSquares.push(squareNumber + activePlayer);
		//This calls a function to check for any winning condtions
		checkWinConditions();
		//This condition is for changing the active player
		if(activePlayer === 'x'){
		//if active player is x change to o
			activePlayer = 'o';
		//if active player is anything other than x .
		}
		else{
			//change the active player to x
			activePlayer = 'x';
		}

		//audio is for placement sound 
		audio('media/click.mp3');

		//This condition checks to see if it is the computers turn 
		if(activePlayer === 'o'){
			//This function disables clicking for computers choice.
			disableClick();
			//This function waits 1 second before computer places image and enables click
			setTimeout(function (){ computersTurn(); }, 2000);
		}
		//retruning true is needed for our computersturn() function to work
		return true;
	}
	//This function results in a random square being selected 
	function computersTurn(){
		//this boolean is needed for our while loop.
		let success = false;
		//This varirable stores a random number between 0-8
		let pickASquare;
		//This condition allows our while loop to keep trying if square is already selected.
		while(!success){
			//A random number between 0 and 8 is selected.
			pickASquare = String(Math.floor(Math.random() * 9));
			//if a random number evaluated returns true, the square hasn't been selected yet.
			if(placeXorO(pickASquare)){
				//This line calls the function
				placeXorO(pickASquare);
				//This changes our boolean and ends the loop.
				success = true;
			}
		}
	}
}

//This function parses the selectSquares array to search for win conditions
//drawWinLine function is called to draw the line if condition is met.
function checkWinConditions() {
	// x 0, 1, 2 condition.
	if (arrayIncludes('0x', '1x', '2x')) {drawWinLine(50, 100, 558, 100)}
	// 	x 3, 4, 5 condition 
	else if (arrayIncludes('3x', '4x', '5x')) {drawWinLine(50, 304, 558, 304)}
	// 	x 0, 3, 6 condition
	else if (arrayIncludes('0x', '3x', '6x')) {drawWinLine(50, 508, 558, 508)}
	// x 1, 4, 7 condition
	else if (arrayIncludes('1x', '4x', '7x')) {drawWinLine(304, 50, 304, 558)}
	// x 2, 5, 8 condition 
	else if (arrayIncludes('2x', '5x', '8x')) {drawWinLine(508, 50, 508, 558)}
	// x 6, 4, 2 condition
	else if (arrayIncludes('6x', '4x', '2x')) {drawWinLine(100, 508, 510, 90)}
	// x 0, 4, 8 condition 
	else if (arrayIncludes('0x', '4x', '8x')) {drawWinLine(100, 100, 520, 520)}
	// o 0, 1, 2 condition 
	else if (arrayIncludes('0o', '1o', '2o')) {drawWinLine(50, 100, 558, 100)}
	// o 3, 4, 5 condition 
	else if (arrayIncludes('3o', '4o', '5o')) {drawWinLine(50, 304, 558, 304)}
	// o 6, 7, 8 condition 
	else if (arrayIncludes('6o', '7o', '8o')) {drawWinLine(50, 508, 558, 508)}
	// o 0, 3, 6, 
	else if (arrayIncludes('0o', '3o', '6o')) {drawWinLine(100, 50, 100, 558)}
	// o 1, 4, 7
	else if (arrayIncludes('1o', '4o', '7o')) {drawWinLine(304, 50, 304, 558)}
	// o 2, 5, 8 condition 
	else if (arrayIncludes('2o', '5o', '8o')) {drawWinLine(508, 50, 508, 558)}
	// o 6, 4, 2 condition 
	else if (arrayIncludes('6o', '4o', '2o')) {drawWinLine(100, 508, 510, 90)}
	// o 0, 4, 8 condition 
	else if (arrayIncludes('0o', '4o', '8o')) {drawWinLine(100, 100, 520, 520)}
	
	/*This condition checks for tie, if none of the above conditions register
	and 9 squares are selected the code executes*/	
	else if (selectedSquares.length >= 9) {
		// This function plays the tie game sound.
		audio('media/tiemusic.mp3');
		// This function sets a .3 second timer before the resetGame is called.
		setTimeout(function() { resetGame();},1000);
	}
	/* this function checsk if any array includes 3 strings.
	It is used to check for each win condition*/
	function arrayIncludes(squareA, squareB, squareC ) {
		// These 3 variables will be used to check for 3 in a row.
		const a = selectedSquares.includes(squareA)
		const b = selectedSquares.includes(squareB)
		const c = selectedSquares.includes(squareC)
		/* If the 3 variables we pass are all included in out array true is 
		returned and our else if condition executes the drawWInLine function*/
		if (a === true && b === true && c === true) {return true}
	}

}

//This function makes our body element temporarily unclickable
function disableClick(){
	//This makes our body unclickable.
		//Maybe we can try var body = document.getElementsByTagName("body");
	body.style.pointerEvents = 'none';
	//This makes our body clickable again after 1 second.
	setTimeout( function() {body.style.pointerEvents = 'auto';}, 1000);
}

/*This function takes a string paramenter of the path you set earlier 
for sound (media/place.mp3)*/
function audio(audioURL) {
	// We create a new audio object and we pass the path as a parameter.
	let audio = new Audio(audioURL);
	//This method plays audio sound.
	audio.play();
}

//This function utilizes html canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
	// This line accesses our html canvas element.
	const canvas = document.getElementById('win-lines');
	//This line gives us acceess to methods and properties within canvas tag
	const c = canvas.getContext('2d');
	//This line indicates where the start of a lines x axis is.
	let x1 = coordX1,
		//This line indictes where the start of a lines y axis is.
		y1 = coordY1,
		//This line indicates where the end of a lines x axis is.
		x2 = coordX2,
		//This line indicated where the end of a lines y axis is.
		y2 = coordY2,
		//This variable stores temporary x axis data we update in our animations loop
		x = x1,
		//This variable stores temporary y axis data we update in our animations loop
		y = y1;

		//This function interacts with the canvas.
		function animateLineDrawing() {
			//This var created a loop
			const animationLoop = requestAnimationFrame(animateLineDrawing);
			//THis method clears content from last loop iteration.
			c.clearRect(0, 0, 608, 608)
			//This method starts a new path
			c.beginPath();
			//This method moves us to a starting point for our line.
			c.moveTo(x1, y1)
			//This methode indicated the end point in our line.
			c.lineTo(x, y)
			//This method sets the width of our line.
			c.lineWidth = 10;
			//This method sets the color of our line.
			c.strokeStyle = 'rgba(70, 255, 33, 0.8)';
			//This method draws everything we laid out above
			c.stroke();
			//This condition checks if we've reched the endpoint.
			if (x1 <= x2 && y1 <= y2) {
				// This condition adds 10 to the previous end x point.
				if (x < x2) {x += 10;}
				// This condition adds 10 to the previoes end y point.
				if (y < y2) {y += 10;}
				/*This condition cancels our animation loop
				if we've reached both end points*/
				if (x >= x2 && y>=y2) {cancelAnimationFrame(animationLoop);}
			}

			/*This condition is similar to the one above.
			This is necessary for the 6, 4, 2 win condition*/
			if (x1 <= x2 && y1 >= y2) {
				if (x < x2) {x += 10;}
				if (y > y2) {y -= 10;}
				if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop);}
			}
		}

		//This function clears our canvas after our win line is drawn.
		function clear() {
			// This line starts our animation loop.
			const animationLoop = requestAnimationFrame(clear);
			//This line clears our canvas.
			c.clearRect(0, 0, 608, 608);
			//This line stops our animation loop.
			cancelAnimationFrame(animationLoop);
		}
		//This line disallows clicking while the win sound is playin
		disableClick();
		//This line plays the win sounds.
		audio('media/yeah.mp3');
		//This line calls our main animation loop.
		animateLineDrawing();
		/*This line waits 1 second. Then, clears canvas, resets game, 
		and allows clicking again.*/
		setTimeout(function(){clear(); resetGame();}, 1000);

}

function resetGame() {
	//This loop iterated through each html square element.
	for (let i = 0; i < 9; i++) {
		//This variablegets the html element of i
		let square = document.getElementById(String(i));
		square.style.backgroundImage = ''
	}
	//This resets our array so it is empty and we can start over.
	selectedSquares = [];
}