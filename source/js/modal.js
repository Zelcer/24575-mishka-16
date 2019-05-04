var indexButton = document.querySelector(".popular-product__button");
var overlay = document.querySelector(".modal-overlay");
var close = document.querySelector(".modal-overlay");

indexButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.add("modal-overlay--show");
});

/*close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal__show");
  overlay.classList.remove("modal-overlay__show");
});*/

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    overlay.classList.remove("modal-overlay--show");
  }
});
