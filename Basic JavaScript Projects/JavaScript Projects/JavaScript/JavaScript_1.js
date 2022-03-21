//Switch Statement Assignment
function animalChar() {
	var animal = document.getElementById('inp').value;
	switch (animal){
		case 'lions':
			document.getElementById('outPut').innerHTML = "Lions have manes and are considered kings of the jungle!"
			break;
		case 'bears':
			document.getElementById('outPut').innerHTML = "Bears have paws and claws!"
			break;
		case 'wolves':
			document.getElementById('outPut').innerHTML = "Wolves have 42 teeth and a powerful bite!"
			break;
		case 'zebras':
			document.getElementById('outPut').innerHTML = "Zebras have black and white stripes that connect to their belly!"
			break;
		default:
			document.getElementById('outPut').innerHTML = "Please select an animal from the list above"
			break;			
	}
}