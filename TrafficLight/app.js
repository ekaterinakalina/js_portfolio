
// VARS
const el = css => document.querySelector(css);
let index = 0;
let t = 0;

// Function to switch the colors after set time
/*    
1. 4 seconds: red
2. 1 second: red - yellow
3. 4 seconds: green
4. 1 second: yellow
*/
function traffic2() {

    switch (index) {
        case 0: 
            el('#red').className = 'red';
            el('#yellow').className = 'black';
            t = 4000; //4 seconds
            break;
        case 1:
            el('#yellow').className = 'yellow';
            t = 1000; // 1 second
            break;
        case 2:
            el('#red').className = 'black';
            el('#yellow').className = 'black';
            el('#green').className = 'green';
            t = 4000; //4 seconds
            break;
        case 3: 
            el('#red').className = 'black';
            el('#yellow').className = 'yellow';
            el('#green').className = 'black';
            t = 4000; //4 seconds
            break;
    }
    index++;
    if (index === 4) { index = 0;}
    setTimeout(traffic2, t);
}

// Initialize 
traffic2();

// //Alternative solution with if
// function traffic() {
//     if (index === 0){
//         el('#red').className = 'red';
//         el('#yellow').className = 'black';
//         t = 4000;
//     }
//     if (index === 1){
//         el('#yellow').className = 'yellow';
//         t = 1000;
//     }
//     if (index === 2){
//         el('#red').className = 'black';
//         el('#yellow').className = 'black';
//         el('#green').className = 'green';
//         t = 4000;
//     }
//     if (index === 3){
//         el('#red').className = 'black';
//         el('#yellow').className = 'yellow';
//         el('#green').className = 'black';
//         t = 4000;
//     }

//     index++;

//     //if index too high
//     if(index === 4){
//         index = 0;
//     }

//     setTimeout(traffic, t);
// }