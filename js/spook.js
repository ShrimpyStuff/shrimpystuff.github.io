let update_loop = setInterval(Main, 1000);
Main();

function Main(){
    let date = new Date();
    let now = new Date().getTime();
    let month = date.getMonth();
    let day = date.getDate();
    let year = date.getFullYear();
    let countDownDate = new Date(`Oct 31, ${year} 0:0:0`).getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (days > 45 || days < -7) {
        clearInterval(update_loop);
        document.getElementById("Spook").style.display = "none";
        return;
    };

    document.getElementById("Spook").innerHTML = "</br><h1>" + days + "d " + hours + "h "
    + minutes + "m " + seconds + "s " + " till Halloween</h1>";
    if (month == 9 && day == 31) {
        document.getElementById("Spook").innerHTML = "<h1>It's Halloween!!!</h1>";
    } else if (distance < 0) {
        document.getElementById("Spook").innerHTML = "<h1>Halloween is done.</h1>";
    }
}
