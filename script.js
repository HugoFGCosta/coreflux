//controlo relógio
let countdownTime = 12 * 3600 + 50 * 60 + 29; // Total em segundos (12 horas, 50 minutos, 29 segundos)

function startCountdown() {
  if (countdownTime <= 0) {
    document.getElementById("txt").innerHTML = "Start!!!";
    return;
  }

  const hours = Math.floor(countdownTime / 3600);
  const minutes = Math.floor((countdownTime % 3600) / 60);
  const seconds = countdownTime % 60;

  document.getElementById("clock").innerHTML =
    checkTime(hours) + ":" + checkTime(minutes) + ":" + checkTime(seconds);
  countdownTime--;

  setTimeout(startCountdown, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

startCountdown();
//fim de controlo de relógio

//Slider

// botões
const btnLeft = document.getElementById("prev_btn");
const btnRight = document.getElementById("next_btn");

// Slider
const slider = document.querySelector(".container .slider");

btnRight.addEventListener("click", nextSlide);
function nextSlide() {
  slider.appendChild(slider.firstElementChild);
}

btnLeft.addEventListener("click", prevSlide);
function prevSlide() {
  slider.prepend(slider.lastElementChild);
}

// slide automático
function autoSlide() {
  deleteInterval = setInterval(timer, 4000);
  function timer() {
    nextSlide();
  }
}
autoSlide();

// para o slide automático com o rato por cima
slider.addEventListener("mouseover", deleteAutoSliding);
btnRight.addEventListener("mouseover", deleteAutoSliding);
btnLeft.addEventListener("mouseover", deleteAutoSliding);

function deleteAutoSliding() {
  clearInterval(deleteInterval);
}

// Retoma o slide automatico quando rato sai
slider.addEventListener("mouseout", autoSlide);
btnRight.addEventListener("mouseout", autoSlide);
btnLeft.addEventListener("mouseout", autoSlide);
//fim de slider

//slick slider
$(document).ready(function () {
  $(".assets-slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $("#prev_btn_slick"),
    nextArrow: $("#next_btn_slick"),
    arrows: true,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          variableWidth: false,
        },
      },
    ],
  });
});

//fim de slick slider

//slick slider para mobile nos cards
$(document).ready(function () {
  function slickInit() {
    if ($(window).width() < 768) {
      if (!$(".cards-container").hasClass("slick-initialized")) {
        $(".cards-container").slick({
          infinite: true,
          speed: 300,
          slidesToShow: 1.1,
          slidesToScroll: 1,
          variableWidth: false,
          arrows: false,
          centerMode: false,
        });
      }
    } else {
      if ($(".cards-container").hasClass("slick-initialized")) {
        $(".cards-container").slick("unslick");
      }
    }
  }

  slickInit();

  $(window).resize(function () {
    slickInit();
  });
});

//slick slide nopain
$(document).ready(function () {
  $(".nopain-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1500,
    swipeToSlide: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
  });
});
