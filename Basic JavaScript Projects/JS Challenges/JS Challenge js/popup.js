// Functions for the popup form 
function openForm() {
  document.getElementById("subForm").style.display = "flex";
}


//This closes the popup form.
document.querySelector('.close').addEventListener("click", function() {
	document.getElementById("subForm").style.display = "none";
});