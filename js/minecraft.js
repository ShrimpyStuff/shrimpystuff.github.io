const url = "https://discord.com/api/webhooks/791054109461315586/gcJBLq4gy2ThmLwyfCZwauYtJntTPBqVNCaM1UIFrk0lH7U8f9HnhLxwnXIHOiqsBCe6";

const xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var data = '{"content":"🟢 The Server is ONLINE 🟢"}';

xhr.send(data);
