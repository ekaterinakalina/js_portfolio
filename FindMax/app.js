// Function to access the DOM elements
function el(css){
	return document.querySelector(css);
	};

// Data 
let team = [
	{
		name: "Franz",
		age: 23,
		goals: 3	
	},
	{
		name: "Xaver",
		age: 19,
		goals: 1
	},
	{
		name: "Egon",
		age: 28,
		goals: 5
	},	
	{
		name: "Alex",
		age: 24,
		goals: 7	
	}
];

// Function to find the player with the biggest number of goals
function findGoals(){
	let max = 0;
	let bestPlayer = {};
	team.forEach(player => {
		if (player.goals > max) {
			max = player.goals;
			bestPlayer = player;
		}
	});
	el('#info').innerHTML = `The best player is ${bestPlayer.name} (${bestPlayer.age}) with the total of (${bestPlayer.goals}) goals. ⚽`;
}; 

// Link the findGoals function to the button click event
el('#btn').addEventListener('click',findGoals);






	



	
	





