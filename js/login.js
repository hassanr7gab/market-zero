let wrapper = document.querySelector(".wrapper"),
  signUpLink = document.querySelector(".link .signup-link"),
  signInLink = document.querySelector(".link .signin-link");

signUpLink.addEventListener("click", () => {
  wrapper.classList.add("animated-signin");
  wrapper.classList.remove("animated-signup");
});

signInLink.addEventListener("click", () => {
  wrapper.classList.add("animated-signup");
  wrapper.classList.remove("animated-signin");
});

// SignUp Form Validation

let password = document.querySelector(".password");
let confirm = document.querySelector(".confirm");
let error1 = document.querySelector(".error1");
let error2 = document.querySelector(".error2");

document.forms[0].onsubmit = function (e) {
  let passwordValid = false;
  let confirmValid = false;

  if (password.value !== "" && password.value.length <= 6) {
    passwordValid = true;
  }
  if (password.value === confirm.value) {
    confirmValid = true;
  }

  if (passwordValid === false || confirmValid === false) {
    e.preventDefault();
    password.style.borderColor = "red";
    password.style.color = "red";
    confirm.style.borderColor = "red";
    confirm.style.color = "red";

    error1.style.display = "block";
    error2.style.display = "block";
  }
};

password.onfocus = function () {
  password.style.borderColor = "black";
  password.style.color = "black";
  confirm.style.borderColor = "black";
  confirm.style.color = "black";

  error1.style.display = "none";
  error2.style.display = "none";
};




window.addEventListener("load", () => {
  const loader = document.querySelector(".landing-loader");
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    loader.remove();
    document.body.style.overflow = "auto";
  }, 800)
});