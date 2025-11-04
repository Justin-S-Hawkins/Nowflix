const password = document.querySelector(".password");

const eye = document.querySelector(".eye");

eye.addEventListener("click", () => {
  password.type === "password"
    ? (password.type = "text")
    : (password.type = "password");
  if (password.type === "password") {
    eye.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    eye.classList.replace("fa-eye-slash", "fa-eye");
  }
});
