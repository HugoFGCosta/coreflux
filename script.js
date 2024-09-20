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
