//VARS: get context
const co = document.querySelector('canvas');
const ctx = co.getContext('2d');

//image object
const proto = {
    //starting points
    x: 100,
    y: -10,
    //image w, h
    w: 100,
    h: 100,
    img: null,
    //load image
    load: function() {
        if(!this.img) {
            //a new Image object 
            this.img = new Image();
            //load the image from server
            this.img.src = 'https://res.cloudinary.com/dskvgobc1/image/upload/v1695990134/js_portfolio/sardini1_1_jpqa0f.png';
        }
        //initialize draw
        this.draw();
    },
    //draw the image
    draw: function() {
        ctx.drawImage(this.img, this.x, this.y);
        ctx.strokeStyle = "#FF0000";
    },
    //move the image
    move: function() {
        //moving speed
        this.x += 4;
        //stating point within canvas
        if (this.x > co.width){this.x = -300}
    }

}
//render
function render() {
    requestAnimationFrame(render);
    //clear pixels
    ctx.clearRect(0, 0, co.width, co.height);
    //loading is repeating
    proto.load();
    //move is repeating
    proto.move();
}
//initialize
render();
