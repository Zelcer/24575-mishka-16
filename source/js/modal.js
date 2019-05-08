var indexButton = document.querySelector(".popular-product__button");
var catalogButton = document.querySelector(".product-card__button");
var overlay = document.querySelector(".modal-overlay");

if (indexButton) {
  indexButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.add("modal-overlay--show");
  });
}

if (catalogButton) {
  catalogButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    overlay.classList.add("modal-overlay--show");
  });
}

window.addEventListener("click", outsideClick);

function outsideClick(e) {
  if (e.target == overlay) {
    overlay.classList.remove("modal-overlay--show");
  }
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    overlay.classList.remove("modal-overlay--show");
  }
});
