// DOM ELEMENTS the nav
const toggleBar = document.querySelector(".toggle_menu");
const toClose = document.querySelector(".to-close");
const toOpen = document.querySelector(".toggle_menu-link");

toggleBar.addEventListener("click", () => {
  if (toggleBar.classList.contains("toggle_menu")) {
    toOpen.style.display = "block";
    console.log("it contains toggle_menu");
  } else {
    toOpen.style.display = "none";
    console.log("it does not contain toggle_menu");
  }
});

toClose.addEventListener("click", () => {
  if (toClose.classList.contains("to-close")) {
    // toClose.classList.remove("to-close");
    toOpen.style.display = "none";
    console.log("it does not contain to-close");
  } else {
    toClose.classList.add("to-close");
    console.log("it does not contain to-close");
  }
});
