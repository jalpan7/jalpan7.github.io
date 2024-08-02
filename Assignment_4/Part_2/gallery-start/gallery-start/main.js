// Name: Jalpan Patel
// File: main.js
// Date: 01, August 2024
// Description: Image Gallery

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const image = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const imageAlts = {
    "pic1.jpg": "Closeup of a blue human eye",
    "pic2.jpg": "Rock that looks like a wave",
    "pic3.jpg": "Purple and white pansies",
    "pic4.jpg": "Animal",
    "pic5.jpg": "Butterfly"
};

/* Looping through images */
for (let i = 0; i < imageFilenames.length; i++) {
// get the current filename from ther array
    const filename = imageFilenames[i];


// create a new image elements.
const newImage = document.createElement('img');

// Set the source and alt attributes of the new image.
newImage.setAttribute('src', image);
newImage.setAttribute('alt', imageAlts);
thumbBar.appendChild(newImage);
//adding the click event listener to each thumbnail image
newImage.addEventListener('click', (e) => {
    // Set the displayed image source and alt text to match the clicked thumbnail
    displayedImage.setAttribute('src', e.target.getAttribute('src'));
    displayedImage.setAttribute('alt', e.target.getAttribute('alt'));
  });
}
/* Wiring up the Darken/Lighten button */
