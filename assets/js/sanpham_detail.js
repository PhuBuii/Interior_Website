// JavaScript code for image selection
document.addEventListener("DOMContentLoaded", function () {
  const slideshowImages = document.querySelectorAll(".image-slideshow img");
  const productImages = document.querySelectorAll(".product-img img");

  // Show the first image in the slideshow when the page loads
  slideshowImages[0].style.opacity = 1;
  slideshowImages[0].style.display = "block";

  productImages.forEach((productImage, index) => {
    productImage.addEventListener("click", () => {
      productImages.forEach((img) => {
        img.classList.remove("selected");
      });

      productImage.classList.add("selected");

      slideshowImages.forEach((slideshowImage, i) => {
        if (i === index) {
          slideshowImage.style.display = "block";
          slideshowImage.style.opacity = 1;
        } else {
          slideshowImage.style.display = "none";
          slideshowImage.style.opacity = 0;
        }
      });
    });
  });
});
