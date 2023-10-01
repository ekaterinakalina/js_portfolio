// VARS
//html elements
const buttonConvert = el('#btn-convert');
const buttonReset = el('#btn-reset');
//button css elements
const rootStyles = getComputedStyle(document.documentElement);
const startColor = rootStyles.getPropertyValue('--color-button-start');
const stopColor = rootStyles.getPropertyValue('--color-button-stop');
//button boolean
var isToggled = false;
let isButtonClickable = true;

// Function to access DOM elements
function el(css){
	return document.querySelector(css);
};

// Function to convert hours into seconds
function convertHours(){
	//plural string
	let hours = 'hours';
	//read the input value and parse as integer
	const h = parseInt(el('#input').value);
	//hour * 60 * 60
	const s = h * 60 * 60;
	//singular form (if input is "1 hour")
	if (h === 1) {
		hours = 'hour';
	}
    //output
	const output = `${h} ${hours} = ${s} seconds.`;
	el('#info').innerText = output; 
}

// Function to check input for errors
function checkNumber() {
	inputValue = el('#input').value
	if (isNaN(inputValue)) {
		el('#info').innerText = "Not a number!";
	} else {
		if (inputValue === "") {
			el('#info').innerText = "Enter an hour to convert.";
		}
	}
  }

// Function resets input values
function resetInputValues() {
	const inputValue = el('#input');
	// check if the input type is "text" or "number"
	if (inputValue.type === 'text' || inputValue.type === 'number') {
		// set to empty string
		inputValue.value = "";
		el('#info').innerText = "Try one more time 🕒"; 
	  }
  }

// Function to initialize convert button 
function init() {
	convertHours();
	checkNumber();
}

// Link the functions to the buttons
buttonConvert.addEventListener('click', init);
buttonReset.addEventListener('click', resetInputValues);



















	



	
	





