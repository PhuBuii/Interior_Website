// filter
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
//popup
const mconcept_shows = document.querySelectorAll("#mconcept-show");
const closeBtn = document.querySelector(".js-close-btn");
const modal = document.querySelector(".js-modal");
const modal_container = document.querySelector(".js-modal-container");

function showPopup() {
  modal.classList.add("open");
}
function closePopup() {
  modal.classList.remove("open");
}
closeBtn.addEventListener("click", closePopup);
for (const mconcept_show of mconcept_shows) {
  mconcept_show.addEventListener("click", showPopup);
}
modal.addEventListener("click", closePopup);
modal_container.addEventListener("click", closePopup);
