let date = new Date();
let time = date.toLocaleString("en-CA", {timeZone: "America/Toronto"});
let day = date.getDate().toLocaleString("en-CA", {timeZone: "America/Toronto"});
let month = date.getMonth().toLocaleString("en-CA", {timeZone: "America/Toronto"});

const main = document.getElementById("main_sect");

if (day ==  17 && month == 9) {
    main.innerHTML += "</br><h1 style=\"font-size:xx-large\"> IT'S MY BIRTHDAY </h1>";
    document.title = "IT'S MY BIRTHDAY | ShrimpyStuff";
}