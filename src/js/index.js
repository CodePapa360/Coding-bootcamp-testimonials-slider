"use strict";
import "../sass/main.scss";

(function () {
  const images = document.querySelectorAll(".image");
  const testimonialWords = document.querySelectorAll(".words");
  const btnNext = document.querySelector(".btn-next");
  const btnPrev = document.querySelector(".btn-prev");
  let curSlide = 0;
  const maxSlide = images.length;

  const goToSlide = function (sl) {
    images.forEach((im) => {
      im.style.opacity = "0";
      setTimeout(() => {
        im.setAttribute("hidden", "");
      }, 300);
    });

    testimonialWords.forEach((ts) => {
      ts.style.opacity = "0";
      setTimeout(() => {
        ts.setAttribute("hidden", "");
      }, 300);
    });

    setTimeout(() => {
      [images, testimonialWords].forEach((el) => {
        el[sl].removeAttribute("hidden");
      });

      setTimeout(() => {
        [images, testimonialWords].forEach((el) => {
          el[sl].style.opacity = "1";
        });
      }, 10);
    }, 300);
  };

  goToSlide(0);

  //Next Slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  btnNext.addEventListener("click", nextSlide);

  //Previous Slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  btnPrev.addEventListener("click", prevSlide);

  //////////////////////////////////
  // Keyboard pressing
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  });
})();
