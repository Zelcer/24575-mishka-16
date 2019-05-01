var button = document.querySelector(".popular-product__button");
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".modal-overlay");
var close = document.querySelector(".modal-overlay");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal__show");
  overlay.classList.add("modal-overlay__show");
});

/*close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal__show");
  overlay.classList.remove("modal-overlay__show");
});*/

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
      if (modal.classList.contains("modal__show")) {
      modal.classList.remove("modal__show");
      overlay.classList.remove("modal-overlay__show");
    }
  }
});
