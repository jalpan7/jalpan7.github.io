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
    const random = Math.floor(Math.random() * array.length); // Generate a rndom index
    return array[random]; // Return the element at the random index
}
const storyText = 'It was 94 degrees Fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"]; // Array of possible values for :insertx:
const insertY = ["the soup kitchen", "Disneyland", "the White House"]; // Array of possible values for :inserty:
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

// Adding Event listener for the "Generate random story" button.
randomize.addEventListener('click', result); // when the button is clicked, call the result function

// Function to generate and display the random story 
function result() {
    // Create a newq stroy by copying the template story
    let newStory = storyText;
    // Select random values from the arrays 
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    // Replace placeholders in the story with the selected values
    newStory = newStory.replaceAll(':insertx:', xItem); // Replace it with the random one.
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);

    // If a custom name is entered, replace "Bob" with the custom name.
    if (customName.value !== '') {
        const name = customName.value; // Get the value enterned in the custom name input field.
        newStory = newStory.replaceAll('Bob', name); // Alter the words with "Bob" with the custom name
    }

    // If the "UK" radio button is selected, convert weight and temperature
if (document.getElementById("uk").checked) {
    const weight = '${Math.round(300 * 0.0714286)} stone'; // Convert pounds to stones (1 pound = 0.0714286 stone)
    const temperature = '${Math.round((94 - 32) * 5 / 9)} centigrade'; // Convert Fahrenheit to celsius.
    newStory = newStory.replaceAll('94 fahrenheit', temperature); // Replace temperature in the story
    newStory = newStory.replaceAll('300 pounds', weight); // Replace weight in the story
}
// Set the text content of the story element and make it visible
story.textContent = newStory; // Update the story paragraph with the new stroy 
story.style.visibility = 'visible'; // Make the stroy paragraph visible 

}
