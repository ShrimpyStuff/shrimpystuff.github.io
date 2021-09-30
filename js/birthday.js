 var date = new Date();
  var time = date.toLocaleString("en-CA", {timeZone: "America/Toronto"});
  var day = date.getDate().toLocaleString("en-CA", {timeZone: "America/Toronto"});
  var month = date.getMonth().toLocaleString("en-CA", {timeZone: "America/Toronto"});
if (day ==  17 && month == 9) {
    Title.innerHTML = "IT'S MY BIRTHDAY | ShrimpyStuff";
    document.title = "IT'S MY BIRTHDAY | ShrimpyStuff | Home";
  }
