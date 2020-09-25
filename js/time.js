var update_loop = setInterval(Main, 1000);
Main();
function Main(){
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    document.getElementById("time").innerHTML =  "<h1>" + hours + ':' + minutes + ':' + seconds + "</h1>";
}
