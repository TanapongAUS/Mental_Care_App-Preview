function showDialog() {
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];

  modal.style.display = "flex";
  modal.classList.add("fadein");
}

function hideDialog() {
  console.log("test hide");
  var modal = document.getElementById("myModal");
  modal.classList.remove("fadein");
  modal.classList.add("fadeout");
  setTimeout(function () {
    modal.style.display = "none";
    modal.classList.remove("fadeout");
  }, 400);
}

function redirectToPage(page, data) {
  const params = new URLSearchParams(data);
  window.location.href = `${page}?${params.toString()}`;
}

// Drag and drop function
//=============================================================================
function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

function dragging(event) {
  document.getElementById("demo").innerHTML = "The p element is being dragged";
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
  document.getElementById("demo").innerHTML = "The p element was dropped";
}