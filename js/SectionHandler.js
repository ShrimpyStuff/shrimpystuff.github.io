function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function scrollIndicate() {
  let scrolldiv = document.querySelector("#scrollIndicator");
  if (window.scrollY > 230) {
    console.log(window.scrollY);
    scrolldiv.style.opacity = 0;
  } else {
    scrolldiv.style.opacity = 1;
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", scrollIndicate);

reveal();
scrollIndicate();
