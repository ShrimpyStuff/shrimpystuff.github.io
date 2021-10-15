function Hide(exception) {
  document.getElementsByClass("section").foreach(element => element.style.display = "none")
  document.getElementById(exception).style.display = "block"
}
