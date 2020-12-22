var url = "https://discord.com/api/webhooks/791054109461315586/gcJBLq4gy2ThmLwyfCZwauYtJntTPBqVNCaM1UIFrk0lH7U8f9HnhLxwnXIHOiqsBCe6";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

xhr.send();
