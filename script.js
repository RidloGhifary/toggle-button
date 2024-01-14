const checkbox = document.getElementById("checkbox"),
  body = document.querySelector("body");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
});
