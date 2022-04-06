// Functions for the popup form 

//This function opens the popup
function openForm() {
  document.getElementById("subForm").style.display = "flex";
}


//This closes the popup form.
	//querySelector returns the first element that matches a CSS selector.
		//addEventListener method attaches an event handler to a document.
document.querySelector('.close').addEventListener("click", function() {
	document.getElementById("subForm").style.display = "none";
});