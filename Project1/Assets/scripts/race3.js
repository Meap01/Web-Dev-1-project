
// Set the date we're counting down to
var countDownDate3 = new Date("Mar 31, 2019 06:10:00").getTime();

// Update the count down every 1 second
var x3 = setInterval(function() {

  // Get todays date and time
  var now3 = new Date().getTime();

  // Find the distance between now and the count down date
  var distance3 = countDownDate3 - now3;

  // Time calculations for days, hours, minutes and seconds
  var days3 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
  var hours3 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds3 = Math.floor((distance3 % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer3").innerHTML = days3 + "d " + hours3 + "h " + minutes3 + "m " + seconds3 + "s ";

  // If the count down is finished, write some text 
  if (distance3 < 0) {3
    clearInterval(x);
    document.getElementById("timer3").innerHTML = "EXPIRED";
  }
}, 1000);
   
