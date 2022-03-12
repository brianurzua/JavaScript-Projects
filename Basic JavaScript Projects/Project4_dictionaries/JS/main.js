//Dictionary
function My_dict() {
	var schoolCourses = {
		Course:'Math',
		Period:'2nd',
		Term:'Fall',
		Credits:4
	};
	delete schoolCourses.Course; // This will delete this value
	document.getElementById('Dictionary').innerHTML = schoolCourses.Course //This will print the value
}