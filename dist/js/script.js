window.addEventListener("DOMContentLoaded", function () {
  let hamburger = document.querySelector(".hamburger");
  let promoClose = document.querySelector(".promo__close");
  let nav = document.querySelector(".promo__nav");
  let pageUp = document.querySelector(".pageUp");

  hamburger.addEventListener("click", function () {
    nav.style.right = 0;
  });

  promoClose.addEventListener("click", function () {
    nav.style.right = "-100%";
  });

  window.addEventListener("scroll", function () {
    let scrollH = window.pageYOffset;
    if (scrollH > 1000) {
      pageUp.style.display = "block";
    } else {
      pageUp.style.display = "none";
    }
  });
});
