const submitButton = document.getElementById("submitBtn");

// ALERT BOXES

const successfullBox = document.getElementById("successfullBox");
const errorBox = document.getElementById("errorBox");

// SUBMIT THE FORM
submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  // USER NAME
  let userName = document.getElementById("userName").value;
  let userNameError = document.getElementById("nameerrorMsg");

  // EMAIL
  let email = document.getElementById("Email").value;
  let emailError = document.getElementById("emailerrorMsg");

  // PASSWORD
  let password = document.getElementById("password").value;
  let passwordError = document.getElementById("passwordError");

  function validateName() {
    if (userName.length == 0) {
      userNameError.style.display = "inline";
      return false;
    }
    userNameError.style.display = "none";
    return true;
  }
  validateName();

  function validateEmail() {
    let emailPattern = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/;
    if (!emailPattern.test(email)) {
      emailError.style.display = "inline";
      return false;
    }
    emailError.style.display = "none";
    return true;
  }
  validateEmail();

  function validatePassword() {
    if (password.length < 8) {
      passwordError.style.display = "inline";
      return false;
    }
    passwordError.style.display = "none";
    return true;
  }
  validatePassword();

  if (validateName() && validateEmail() && validatePassword()) {
    successfullBox.classList.add("show");
    document.getElementById("userName").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("password").value = "";
  } else {
    errorBox.classList.add("show");
  }
});

// CLOSE THE ALERT BOXES

let closeBtn = document.querySelectorAll(".closeBtn");

closeBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    successfullBox.classList.remove("show");
    errorBox.classList.remove("show");
  });
});
