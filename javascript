// Function to update the preview area when mouse hovers over an image
function upDate(previewPic) {
    // First, log to console to verify the event is triggering
    console.log('Mouse entered an image');
    
    // Log details about the previewPic (the image being hovered over)
    console.log('Image alt text:', previewPic.alt);
    console.log('Image source:', previewPic.src);
    
    // Select the image preview div
    const imageDiv = document.getElementById('image');
    
    // Update the text to show the image's alt text
    imageDiv.textContent = previewPic.alt;
    
    // Update the background image of the preview div
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

// Function to reset the preview area when mouse leaves an image
function undo() {
    // Select the image preview div
    const imageDiv = document.getElementById('image');
    
    // Reset the text to the original default text
    imageDiv.textContent = 'Hover over an image below to display here.';
    
    // Reset the background image to an empty URL
    imageDiv.style.backgroundImage = "url('')";
}
