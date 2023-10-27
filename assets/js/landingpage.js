// script.js
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-button");
  const projects = document.querySelectorAll(".project");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = button.id;
      if (filter === "all") {
        projects.forEach((project) => (project.style.display = "block"));
      } else {
        projects.forEach((project) => {
          if (project.classList.contains(filter)) {
            project.style.display = "block";
          } else {
            project.style.display = "none";
          }
        });
      }
    });
  });
});

// script.js
$(document).ready(function () {
  $(".filter-button").click(function () {
    const filter = $(this).attr("id");
    $(".filter-button").removeClass("active"); // Loại bỏ lớp "active" từ tất cả các nút
    $(this).addClass("active"); // Thêm lớp "active" cho nút được chọn

    if (filter === "all") {
      $(".project").addClass("show");
    } else {
      $(".project").removeClass("show");
      $(".project." + filter).addClass("show");
    }
  });
});
