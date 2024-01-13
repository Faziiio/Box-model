var btns = document.querySelectorAll(".btn");
var box = document.querySelector(".box");
var overlay = document.querySelector(".overlay");
var icon = document.querySelector(".box i");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    box.classList.remove("hidden");
    overlay.classList.remove("gaib");
    icon.addEventListener("click", function () {
      box.classList.add("hidden");
      overlay.classList.add("gaib");
    });
    overlay.addEventListener("click", function () {
      box.classList.add("hidden");
      overlay.classList.add("gaib");
    });
  });
}
