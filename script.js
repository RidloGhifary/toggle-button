const checkbox = document.getElementById("checkbox"),
  toggle = document.querySelector(".toggle"),
  toggleCircle = toggle.querySelector(".cycle"),
  body = document.querySelector("body");

toggle.addEventListener("click", () => {
  checkbox.checked = !checkbox.checked;
  if (checkbox.checked) {
    toggleCircle.classList.add("light");
    body.style.backgroundColor = "white";
    toggle.style.backgroundColor = "rgb(33, 33, 33)";
  } else {
    toggleCircle.classList.remove("light");
    body.style.backgroundColor = "rgb(33, 33, 33)";
    toggle.style.backgroundColor = "white";
  }
});
