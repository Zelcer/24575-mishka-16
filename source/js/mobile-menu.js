var mainMenu = document.querySelector('.page-header');
var navToggle = document.querySelector('.page-header__toggle');

mainMenu.classList.remove('page-header--nojs');

navToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainMenu.classList.toggle("page-header--opened");
  mainMenu.classList.toggle("page-header--closed");
})
