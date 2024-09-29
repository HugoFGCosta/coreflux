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

//slider industrial
$(document).ready(function () {
  function initializeSlider() {
    if ($(window).width() <= 767) {
      if (!$(".slider-cards").hasClass("slick-initialized")) {
        $(".slider-cards").slick({
          autoplay: false,
          autoplaySpeed: 3000,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        });
      }
    } else {
      if ($(".slider-cards").hasClass("slick-initialized")) {
        $(".slider-cards").slick("unslick");
      }
    }
  }

  initializeSlider();
  $(window).resize(function () {
    initializeSlider();
  });
});

//workSlider
$(document).ready(function () {
  // Initialize slick for worker manufacturing slider
  $(".worker-slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $("#prev_btn_worker"),
    nextArrow: $("#next_btn_worker"),
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
        },
      },
    ],
  });
});

//slick slider assets
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
