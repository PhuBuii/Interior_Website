const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slides = document.querySelectorAll(".slider");

let currentSlide = 0;

function showSlide(n) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  for (let i = n; i < n + 5; i++) {
    if (slides[i]) {
      slides[i].classList.add("active");
    }
  }
}

showSlide(currentSlide);

nextBtn.addEventListener("click", () => {
  currentSlide += 4;
  if (currentSlide >= 12) {
    currentSlide = 0; // Quay lại hiển thị 3 ảnh đầu
  }
  showSlide(currentSlide);
});

prevBtn.addEventListener("click", () => {
  currentSlide -= 4;
  if (currentSlide < 0) {
    currentSlide = 8; // Quay lại hiển thị 3 ảnh cuối
  }
  showSlide(currentSlide);
});
