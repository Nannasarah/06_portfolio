/*Burger menu */
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}
menu.addEventListener("click", menuClick);
function menuClick() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}

/**************Slideshow på om mig-siden***********/
let slideIndex = 1;
showSlides(slideIndex);

// næste og tilbage
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  // viser slideshow
  let slides = document.getElementsByClassName("mySlides");
  // viser billede
  let visbillede = document.getElementsByClassName("imgmtekst");
  // viser billedbeskrivelsen
  let captionText = document.getElementById("caption");

  // gør at slideshowetsbilleder gører i ring - hvis man foran
  if (n > slides.length) {
    slideIndex = 1;
  }
  // gør at slideshowetsbilleder gører i ring - hvis man gårbagud
  if (n < 1) {
    slideIndex = slides.length;
  }
  // viser et billede ad gangen og gemmer de andre billeder
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //viser billedet
  slides[slideIndex - 1].style.display = "block";
  // viser caption til billederne
  captionText.innerHTML = visbillede[slideIndex - 1].alt;
}
