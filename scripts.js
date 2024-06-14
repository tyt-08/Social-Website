//scripts go here
console.log("loaded script");
const body = document.getElementById("body");
const content = document.getElementById("content");
const sidebar = document.getElementById("sidebar");
const open = document.getElementById("open");
const close = document.getElementById("close");


//window load function
window.onload = () => {
  w3_close();

  //stops loading transitions
  setTimeout(() => {
    [sidebar, body].forEach(e => {
      e.classList.remove("preload");
    });
  }, 1);
}


//sidebar function definitions
function w3_open() {
  body.style.marginLeft = "25%";
  content.style.marginLeft = "25%";
  sidebar.style.display = "block";
  sidebar.style.width = "25%";
  open.style.opacity = 0;
}

function w3_close() {
  body.style.marginLeft = "0%";
  content.style.marginLeft = "0%";
  sidebar.style.display = "none";
  open.style.opacity = 1;
}
