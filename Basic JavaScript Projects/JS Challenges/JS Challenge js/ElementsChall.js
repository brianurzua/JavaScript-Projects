//Function bellow is for data validation

function validateForm() {
	const x = document.forms['tform']['fname'].value; //This gets value from form
	const y = document.forms['tform']['lname'].value;
	const z = document.forms['tform']['phone'].value;

	if (x == "" && y =="" && z =="") {  //If all are left blank, message executes
	alert("all fields must be filled out");
	return false;
	};
};