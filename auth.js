// only for the trial of the authencation

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "admin" && password === "password") {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "/index.html";
  } else {
    alert("Invalid credentials");
  }
});


function logout() {
  localStorage.removeItem("isLoggedIn");
}
