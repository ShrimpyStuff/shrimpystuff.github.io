function Hide(exception) {
  document.getElementsByClassName("section").foreach(element => element.style.display = "none")
  document.getElementById(exception).style.display = "block"
}
