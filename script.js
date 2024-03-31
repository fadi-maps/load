let lamp = document.querySelector(".lamp");
let button = document.querySelector("button");

button.onclick = function () {
  if (lamp.classList.contains("on")) {
    lamp.classList.remove("on");
    button.innerHTML = "off";
    lamp.style = "box-shadow:0 0 0px 0px yellow; background-color:gray;";
  } else {
    lamp.classList.add("on");
    button.innerHTML = "on";
    lamp.style = "box-shadow:0 0 102px 10px yellow; background-color:yellow;";
  }
};
let div = document.querySelector(".container");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let h5 = document.querySelector("h5");
let h4 = document.createElement("h4");
animationLoad = document.querySelector(".rotate-scroll");
main = document.querySelector("main");
h4.innerHTML = "h4";
h3.after(h4);
document.onload =function() {
  animationLoad.style = "display:none;";
  main.style = "display:block;";
};
