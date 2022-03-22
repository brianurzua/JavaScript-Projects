// Data Attribute Assignment
function displaySci(animal) {
  var animalType = animal.getAttribute("data-animal-type");
  alert("The " + animal.innerHTML + "\'s scientific name is " + animalType + ".");
}