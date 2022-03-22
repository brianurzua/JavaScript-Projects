//form validation 
function validateForm() {
  let x = document.forms["myForm"]["fname", "lname", "email"].value;
  if (x == "") {
    alert("All fields must be filled out!");
    return false;
  }
}