 var date = new Date();
  var time = date.toLocaleString("en-CA", {timeZone: "America/Toronto"});
  var day = date.getDate().toLocaleString("en-CA", {timeZone: "America/Toronto"});
  var month = date.getMonth().toLocaleString("en-CA", {timeZone: "America/Toronto"});
if (day ==  21 && month == 8) {
    Title.innerHTML = "IT'S MY BIRTHDAY";
    document.title = "IT'S MY BIRTHDAY | ShrimpyStuff | Home";
  }
