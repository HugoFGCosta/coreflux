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

//carrossel

document.addEventListener("DOMContentLoaded", function () {
  let items = document.querySelectorAll(".carousel .carousel-item");

  items.forEach((el) => {
    const minPerSlide = 3;
    let next = el.nextElementSibling;
    for (var i = 1; i < minPerSlide; i++) {
      if (!next) {
        next = items[0];
      }
      let cloneChild = next.cloneNode(true);
      el.appendChild(cloneChild.children[0]);
      next = next.nextElementSibling;
    }
  });
});
