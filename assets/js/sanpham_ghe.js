document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-bar button");
  const productCards = document.querySelectorAll(".product-card");
  const noResultsMessage = document.querySelector(".no-results");
  const filterName = document.querySelector("#filter-name");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filterValue = button.getAttribute("data-filter");

      // Ẩn tất cả sản phẩm
      productCards.forEach((card) => {
        card.style.display = "none";
        card.classList.remove("show");
      });

      // Hiển thị sản phẩm theo danh mục được chọn
      if (filterValue === "all") {
        productCards.forEach((card) => {
          card.style.display = "block";
          card.classList.add("show");
        });
        noResultsMessage.style.display = "none";
      } else {
        const filteredCards = document.querySelectorAll(
          `[data-category="${filterValue}"]`
        );
        if (filteredCards.length === 0) {
          noResultsMessage.style.display = "block";
          filterName.textContent = button.textContent;
        } else {
          filteredCards.forEach((card) => {
            card.style.display = "block";
            card.classList.add("show");
          });
          noResultsMessage.style.display = "none";
        }
      }
    });
  });
});

$(document).ready(function () {
  $(".filter-button").click(function () {
    $(".filter-button").removeClass("active"); // Loại bỏ lớp "active" từ tất cả các nút
    $(this).addClass("active"); // Thêm lớp "active" cho nút được chọn
  });
});
