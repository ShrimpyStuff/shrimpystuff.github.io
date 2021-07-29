var update_loop = setInterval(Main, 1000);
Main();
function Main(){
    var date = new Date();
var now = new Date().getTime();
var month = date.getMonth();
var countDownDate = new Date("Oct 1, 2021 0:0:0").getTime();
var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

 if (days > 45) return;
 document.getElementById("Spook").innerHTML = "<h1>" + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s " + " till Spooktober</h1>";
    if (month == 9) {
        document.getElementById("Spook").innerHTML = "<h1>It's Spooktober!!!</h1>";
    } else if (distance < 0) {
        document.getElementById("Spook").innerHTML = "<h1>This is expired please wait for me to update it.</h1>";
    }
}
