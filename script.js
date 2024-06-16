// Function to change a random image source
function changeRandomImage() {
    const images = document.querySelectorAll('.image-item img');
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    const newSrc = `https://placekitten.com/${Math.floor(Math.random() * 100 + 300)}/${Math.floor(Math.random() * 100 + 300)}`;
    
    randomImage.src = newSrc;
}

// Function to download the image on click
function downloadImage(event) {
    const img = event.target;
    const imgPath = img.src;
    const fileName = imgPath.substring(imgPath.lastIndexOf('/') + 1);
    const link = document.createElement('a');

    link.href = imgPath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Add event listeners to all images
document.querySelectorAll('.image-item img').forEach(img => {
    img.addEventListener('click', downloadImage);
});
