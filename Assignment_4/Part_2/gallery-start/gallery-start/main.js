// Name: Jalpan Patel
// File: main.js
// Date: 01, August 2024
// Description: Image Gallery

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const image = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const imageAlts = {
    'pic1.jpg': 'Closeup of a blue human eye',
    'pic2.jpg': 'Rock that looks like a wave',
    'pic3.jpg': 'Purple and white pansies',
    'pic4.jpg': 'Animal',
    'pic5.jpg': 'Butterfly'
};

/* Looping through images */
for (let i = 0; i < image.length; i++) {
    // get the current filename from the array
    const filename = image[i];

    // create a new image element
    const newImage = document.createElement('img');

    // Set the source and alt attributes of the new image
    newImage.setAttribute('src', `images/${filename}`);
    newImage.setAttribute('alt', imageAlts[filename]);
    thumbBar.appendChild(newImage);

    // Adding the click event listener to each thumbnail image
    newImage.addEventListener('click', (e) => {
        // When the image is clicked, update the displayed image and its alt text
        displayedImage.setAttribute('src', e.target.getAttribute('src'));
        displayedImage.setAttribute('alt', e.target.getAttribute('alt'));
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    // Get the current class of the button
    const btnClass = btn.getAttribute('class');

    // Toggle between dark and light mode based on the button's current class
    if (btnClass === 'dark') {
        // If the button is in dark mode, switch to light mode
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        // Apply dark overlay
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        // If the button is in light mode, switch to dark mode
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        // Remove overlay
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'; 
    }
});
