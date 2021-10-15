function Hide(exception) {
  let section = document.getElementsByClassName("section")
  for (let i = 0; i < section.length; i++)
  {
    section[i].style.display = "none"
  }
  document.getElementById(exception).style.display = "block"
}
