// VARS
//match color classes
let classes = ['yellow', 'black', 'magenta'];
//html elements
const button = document.querySelector('#btn');
const colors = document.querySelectorAll('.colors p');
//button css elements
const rootStyles = getComputedStyle(document.documentElement);
const startColor = rootStyles.getPropertyValue('--color-button-start');
const stopColor = rootStyles.getPropertyValue('--color-button-stop');
//button boolean
var isToggled = false;
let isButtonClickable = true;

// Function to add classes to p elements
function matchClasses() {
	colors.forEach((p, index) => {
	  p.classList.add(classes[index]);
	});
  }; 

// Function to reset the color to the default
function resetTextColor() {
	colors.forEach((p) => {
		classes.forEach((className) => {
			p.classList.remove(className);
		});
	});
}

// Function to toggle button state 
function toggleButton() {
	if (!isButtonClickable) {
	  return;
	}
	isButtonClickable = false;
	preventDoubleClick();
  
	if (isToggled) {
	  button.textContent = "Color the text";
	  button.style.backgroundColor = startColor;
	  resetTextColor();
	  isToggled = false;
	} else {
	  button.textContent = "Reset colors";
	  button.style.backgroundColor = stopColor;
	  matchClasses();
	  isToggled = true;
	}
	setTimeout(function () {
	  isButtonClickable = true;
	}, 100);
  }

// Function to prevent double click
function preventDoubleClick() {
	button.style.pointerEvents = 'none';
	setTimeout(function () {
	  button.style.pointerEvents = 'auto';
	}, 100);
  }

// Link the toggleButton function to the button click event
button.addEventListener('click', toggleButton);

	



	
	





