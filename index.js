
let menuToggle = document.querySelector(".menuToggle");
let header = document.querySelector("header");
let section = document.querySelector(".sectionFirst");

menuToggle.onclick = function () {
   header.classList.toggle('active');
   menuToggle.classList.toggle('topIn');
   section.classList.toggle('active');
}
