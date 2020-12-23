let online = false;

var url = "https://api.mcsrvstat.us/2/servantchild.ddns.net";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
      if (JSON.parse(xhr.response).online) online = true;
   }};

xhr.send();

if (online) {

const webhook = "https://discord.com/api/webhooks/791054109461315586/gcJBLq4gy2ThmLwyfCZwauYtJntTPBqVNCaM1UIFrk0lH7U8f9HnhLxwnXIHOiqsBCe6";

const xhrW = new XMLHttpRequest();
xhrW.open("POST", webhook);

xhrW.setRequestHeader("Content-Type", "application/json");

xhrW.onreadystatechange = function () {
   if (xhrW.readyState === 4) {
      console.log(xhrW.status);
      console.log(xhrW.responseText);
   }};

var data = '{"content":"🟢 The Server is ONLINE 🟢"}';

xhrW.send(data);
}
