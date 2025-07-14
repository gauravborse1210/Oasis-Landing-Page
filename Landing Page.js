const image = document.querySelector(".image");
const bar = document.querySelector(".bar");
const sideBar = document.querySelector(".side-bar");
const sideBarList = document.querySelectorAll(".side-bar ul li");

function fun(e) {
  const source = e.getAttribute("data-image");
  image.src = source;
}

let j = 0;

bar.addEventListener("click", function () {
  sideBar.classList.toggle("side-bar-js");

  if (j == 0) {
    bar.setAttribute("class", "fas fa-times bar");
    j = 1;
  } else {
    bar.setAttribute("class", "fas fa-bars bar");
    j = 0;
  }
  sideBarList.forEach(function (links) {
    links.classList.toggle("sideBarList-js");
  });
});
