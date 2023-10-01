//number array
const numbers = [
    23,
    4,
    56,
    1234,
    101,
    1,
    234,
    26,
    42
]
//return all numbers >= 100
const resultNumbers = numbers.filter( (number) => number >= 100);
//console.log(resultNumbers);
document.querySelector('#numbers').innerHTML = resultNumbers;

//words array
const words = [
    'sardine',
    'shrimp',
    'eel',
    'rainbowfish',
    'hey!',
    'fish'
]
//return all strings with more then 5 letters
const resultWords = words.filter( (word) => word.length > 5);
//console.log(resultWords);
document.querySelector('#words').innerHTML = resultWords;

//object array popular fish
const fish = [
        {
          "name": "Guppy fish",
          "position": 1,
        },
        {
          "vorname": "Molly fish",
          "position": 2,
        },
        {
          "vorname": "Swordtail fish",
          "position": 3,
        },
        {
          "vorname": "Betta fish",
          "position": 4,
        },
        {
          "vorname": "Neon Tetra",
          "position": 5,
        },
        {
          "vorname": "Zebra fish",
          "position": 6,
        },
        {
          "vorname": "Plecostomus",
          "position": 7,
        },
        {
          "vorname": "Platy",
          "position": 8,
        },
        {
          "vorname": "Rosy Barb",
          "position": 9,
        },
        {
          "vorname": "Tiger Barb",
          "position": 10,
        }
    ]

//search for top 5 fish
const searchFish = fish.filter((obj) =>
    obj.position <= 5 
);
//console.log(searchFish); 
document.querySelector('#fish').innerHTML = JSON.stringify(searchFish);




