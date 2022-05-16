var tabs = document.getElementsByClassName("tab");
var buttons = document.getElementsByTagName("button");

for (var x of tabs) {
  x.style.display = "none";
}

function changeHeader(event, id) {
  for (var x of tabs) {
    x.style.display = "none";
    x.classList.remove("tabAnimation");
  }

  document.getElementById(id).style.display = "block";

  setTimeout(function () {
    document.getElementById(id).classList.add("tabAnimation");
  }, 100);

  for (var x of buttons) {
    x.classList.remove("selected");
  }

  event.currentTarget.classList.add("selected");
}
