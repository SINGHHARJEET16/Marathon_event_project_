// const countdownDate = new Date("Aug 15, 2024 23:59:59").getTime();

// const x = setInterval(function() {

//     const now = new Date().getTime();

//     const distance = countdownDate - now;

//     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     document.getElementById("countdown").innerHTML = days + "d " + hours + "h " +
//         minutes + "m " + seconds + "s ";

//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("countdown").innerHTML = "EXPIRED";
//     }
// }, 1000);

var countDownDate = new Date("Aug 15, 2024 06:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days + "D";
  document.getElementById("hours").innerHTML = hours + "H";
  document.getElementById("minutes").innerHTML = minutes + "M";
  document.getElementById("seconds").innerHTML = seconds + "S";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "EXPIRED";
    document.getElementById("hours").innerHTML = "";
    document.getElementById("minutes").innerHTML = "";
    document.getElementById("seconds").innerHTML = "";
  }
}, 1000);
