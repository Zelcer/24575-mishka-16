var mainMenu = document.querySelector('.page-header');
var navToggle = document.querySelector('.page-header__toggle');

mainMenu.classList.remove('page-header--nojs');

navToggle.addEventListener('click', function() {
  if (mainMenu.classList.contains('page-header--closed')) {
    mainMenu.classList.remove('page-header--closed');
    mainMenu.classList.add('page-header--opened');
  } else {
    mainMenu.classList.add('page-header--closed');
    mainMenu.classList.remove('page-header--opened');
  }
});