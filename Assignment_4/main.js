//Name: Jalpan Patel
//File: main.js
//Date: 29 September 2024
//Description: Generates a silly story when the "Generate random story" button is pressed.//

// Get references to the DOM elements
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// Function to get a random values from an array
function randomValueFromArray(array){
    const random = Math.floorloor(Math.random() * array.length);
    return array[random]
}
const storyText = 'It was 94 degrees Fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

// Adding Event listener for the "Generate random story" button.
randomize.addEventListener('click', result);

function result() {
    // Create a newq stroy by copying the template story
    let newStory = storyText;
    // Select random values from the arrays 
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);





}