document.querySelectorAll(".dropdown-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const subMenu = this.nextElementSibling;
    const svgIcon = this.querySelector(".svg");

    document.querySelectorAll(".sub-menu").forEach((menu) => {
      if (menu !== subMenu) {
        menu.classList.remove("show");
      }
    });

    document.querySelectorAll(".dropdown-btn .svg").forEach((icon) => {
      if (icon !== svgIcon) {
        icon.classList.remove("rotate");
      }
    });

    subMenu.classList.toggle("show");
    svgIcon.classList.toggle("rotate");
  });
});

const toggleButton = document.getElementById("toggle-btn");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  container.classList.toggle("sidebar-closed");
});
