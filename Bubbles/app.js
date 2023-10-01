/** JS bubbles animation logic:
 *  1. Collector for clones (array/object)
 *  2. Prototypes (min. 1)
 *  3. clone() function, which creates clone circles
 *  4. render() function - requestAnimationFrame(render)
*/ 

// VARS 
const co = document.querySelector('canvas');
//get context
const ctx = co.getContext('2d'); 
const button = document.querySelector('#start-stop');
//button css elements
const rootStyles = getComputedStyle(document.documentElement);
const startColor = rootStyles.getPropertyValue('--color-button-start');
const stopColor = rootStyles.getPropertyValue('--color-button-stop');
//clone collector
const collector = []; 

// Prototype circle object 
const circle = {
    //move parameters
    //start point
    x : 50,
    y : 350,
    r : 25,
    //color
    col: 'aqua',
    //speed x-axe + angle
    speedX: 2,
    //speed y-axe + angle
    speedY: 8,

    // Function to create random moves
    init: function(){
        //moves
        this.speedX = Math.floor(Math.random() * 4) + 1;
        this.speedY = Math.floor(Math.random() * 4) + 1;
        //start points
        this.x = Math.floor(Math.random() * co.width);
        this.y = Math.floor(Math.random() * co.height);
        this.col = color();
        //clones are pushed in the collector
        collector.push(this);
    }, //END init()

    // Function to create animation algorithm 
    move: function() {
        //move x-axe
        //move from left ro right (x > width)
        if (this.x >= co.width - this.r){this.speedX *= -1}
        //move from right to left (x < 0)
        if (this.x <= 0 + this.r){this.speedX *= -1}

        //move y-axe
        //down
        if (this.y >= co.height - this.r){this.speedY *= -1}
        //up
        if (this.y <= 0 + this.r){this.speedY *= -1}

        this.x += this.speedX;
        this.y += this.speedY;

        //draws a circle 
        this.draw();
    }, //END move()

    // Function to draw a cirle
    draw: function() {
        //color
        ctx.fillStyle = this.col;
        //starts circle
        ctx.beginPath();
        //circle parameters (x, y, r, start angle, end angle, anticlockwise);
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        ctx.fill();
    } //END draw()
} //END circle{}


// Function to return random colors for bubbles 
function color() {
    const r = Math.floor(Math.random() * 150);
    const b = Math.floor(Math.random() * 150);
    const g = Math.floor(Math.random() * 150);

    return `rgba(${r}, ${g}, ${b}, 0.5)`
} 

// Function to render animation
let animate = false;
function render() {
    //requestAnimationframe(callback) - function calls itself back
    animate = requestAnimationFrame(render);
    //make all other pixels transparent; if not here - will draw a line
    //clear canvas pixels (x, y, w, h)
    ctx.clearRect(0, 0, co.width, co.height);
    collector.forEach((clone) => {
        clone.move();
    });
} 


// Function to create 200 clones from the circle object
function cloneFactory() {
    let clone;
    for (let i = 0; i < 200; i++) {
        clone = Object.create(circle);
        clone.init();
    }
}

// Function to toggle between button states
button.addEventListener('click', function() {
    if(!animate) {
        this.innerText = 'STOP BUBBLING';
        button.style.backgroundColor = stopColor;
        render();
    }else{
        cancelAnimationFrame(animate);
        this.innerText = 'START BUBBLING'
        button.style.backgroundColor = startColor;
        animate = false;
    }
});

//Initialize
cloneFactory();
