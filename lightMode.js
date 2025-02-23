// Get saved mode and the theme switch element
let lightMode = localStorage.getItem("lightMode");
const themeSwitcher = document.querySelector(".theme-changer button");

// Function to enable light mode
const enableLightMode = () => {
  document.body.classList.add("lightMode");
  localStorage.setItem("lightMode", "active");
};

// Function to disable light mode (thus reverting to dark mode)
const disableLightMode = () => {
  document.body.classList.remove("lightMode");
  localStorage.removeItem("lightMode");
};

// On initial load, check and apply the saved theme mode.
// If lightMode is "active", apply light mode.
// Otherwise, assume dark mode (the default style in your CSS).
if (lightMode === "active") {
  enableLightMode();
} else {
  disableLightMode();
}

// Toggle the mode when clicking the theme switcher button
themeSwitcher.addEventListener("click", () => {
  lightMode = localStorage.getItem("lightMode");
  if (lightMode === "active") {
    disableLightMode();
  } else {
    enableLightMode();
  }
});
