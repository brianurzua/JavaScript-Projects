//Countdown function
function countdown() {
	var seconds = document.getElementById('seconds').value;  //This takes input from the input box
	
	function tick() {
			seconds = seconds - 1;
			timer.innerHTML = seconds;  //This displays the time on the screen.
			var time = setTimeout(tick, 1000);
			if (seconds == -1){  //When timer is finished and a second passes, this banner comes up.
				alert("Time's up!");
				clearTimeout(time);
				timer.innerHTML = '';
			}
		}
		tick();	//This calls the function.
}



// This code is for the slideshow
var slideIndex = 1;
showSlides(slideIndex);  //Slides start at 1 

function plusSlides(n) {
  showSlides(slideIndex += n); //which slide do you wish to go
}

function currentSlide(n) {
  showSlides(slideIndex = n);  //which slide are you on
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {  //For loop for slide
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) { //For loop for dot 
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}