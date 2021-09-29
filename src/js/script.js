window.addEventListener("DOMContentLoaded", function () {
  let hamburger = document.querySelector(".hamburger");
  let promoClose = document.querySelector(".promo__close");
  let nav = document.querySelector(".promo__nav");
  let pageUp = document.querySelector(".pageUp");
  let btnModal = document.querySelectorAll(".btn_modal");
  let modal = document.querySelector(".modal");
  let close = document.querySelector(".close");
  hamburger.addEventListener("click", function () {
    nav.style.right = 0;
  });

  promoClose.addEventListener("click", function () {
    nav.style.right = "-100%";
  });
  btnModal.forEach(function (btn) {
    btn.addEventListener("click", function () {
      modal.style.display = "flex";
      let height = window.pageYOffset;
      modal.style.top = height + "px";
      document.body.style.overflow = "hidden";
    });
  });
  window.addEventListener("scroll", function () {
    let scrollH = window.pageYOffset;
    if (scrollH > 1000) {
      pageUp.style.display = "block";
    } else {
      pageUp.style.display = "none";
    }
  });
  close.addEventListener("click", function () {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });
});
