var update_loop = setInterval(Main, 1000);
Main();
function Main(){
    var date = new Date();
var now = new Date().getTime();
var year = date.getYear();
var countDownDate = new Date("Oct 1, 2020 0:0:0").getTime();
var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

 document.getElementById("Spook").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
}
