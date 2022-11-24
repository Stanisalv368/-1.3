const slayder = document.querySelector(".swiper-container");

let mySwiper;

function mobileSlider() {
  if (window.innerWidth <= 767 && slayder.dataset.mobile == "false") {
    mySwiper = new Swiper(slayder, {
      spaceBetween: 16,
      loop: true,
      navigator: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    slayder.dataset.mobile = "true";
  }
  if (window.innerWidth > 767) {
    slayder.dataset.mobile = "false";

    if (slayder.classList.contains("swiper-initialized")) {
      mySwiper.destroy();
    }
  }
}
mobileSlider();

window.addEventListener("resize", () => {
  mobileSlider();
});

let swiper = document.querySelector(".swiper-wrapper");
let button = document.querySelector(".btn");
let btnIcon = document.querySelector(".btn__icon");
let btnText = document.querySelector(".btn__text");

button.onclick = function () {
  swiper.classList.toggle("swiper-up");
  btnIcon.classList.toggle("bth__icon_rotate");
  btnText.innerHTML === "Показать все"
    ? (btnText.innerHTML = "Скрыть")
    : (btnText.innerHTML = "Показать все");
};
