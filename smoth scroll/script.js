"use strict";
const mainImg = document.querySelector(".bg-image");

window.addEventListener("scroll", () => {
  updateImage();
});

function updateImage() {
  mainImg.style.opacity = 1 - window.pageYOffset / 800;
  mainImg.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
}
