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
document.addEventListener("DOMContentLoaded", function() {
  // Select all images with the class 'image-item' that need lazy loading
  const images = document.querySelectorAll('.image-item img');

  // Set up the IntersectionObserver
  const lazyLoad = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        // Replace the src with the value from data-src
        img.src = img.dataset.src;
        // Stop observing the current image after loading
        observer.unobserve(img);
      }
    });
  });

  // Observe each image
  images.forEach(image => {
    lazyLoad.observe(image);
  });
});

