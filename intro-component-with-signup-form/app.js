const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const claimTrial = document.querySelector("#claim-trial");
const errorMessage = document.querySelectorAll(".error-message");
const errorSymbol = document.querySelectorAll(".error");

const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let valid = true;

function submitForm(evt) {
  evt.preventDefault();

  if (firstName.value.trim() === "") {
    document.querySelector("#first-name ~ .error-message").style.visibility = "visible";
    document.querySelector("#first-name ~ .error").style.visibility = "visible";
    firstName.style.borderColor = "var(--Red)";
    valid = false;
  } else {
    console.log(firstName.value);
  }

  if (lastName.value.trim() === "") {
    document.querySelector("#last-name ~ .error-message").style.visibility = "visible";
    document.querySelector("#last-name ~ .error").style.visibility = "visible";
    lastName.style.borderColor = "var(--Red)";
    valid = false;
  } else {
    console.log(lastName.value);
  }

  if (email.value.trim() === "" || !regex.test(email.value)) {
    document.querySelector("#email ~ .error-message").style.visibility = "visible";
    document.querySelector("#email ~ .error").style.visibility = "visible";
    email.style.borderColor = "var(--Red)";
    valid = false;
  } else {
    console.log(email.value);
  }

  if (password.value.trim() === "") {
    document.querySelector("#password ~ .error-message").style.visibility = "visible";
    document.querySelector("#password ~ .error").style.visibility = "visible";
    password.style.borderColor = "var(--Red)";
    valid = false;
  } else {
    console.log(password.value);
  }

  if (valid ? console.log("Form Submitted") : console.log("Error"));
  clearValidation();
}

const clearValidation = () => {
  setTimeout(() => {
    errorMessage.forEach((elem) => (elem.style.visibility = "hidden"));
    errorSymbol.forEach((err) => (err.style.visibility = "hidden"));
    [firstName, lastName, email, password].forEach((input) => {
      input.style.borderColor = "var(--Grayish-Blue)";
    });
  }, 5000);
};

claimTrial.addEventListener("click", submitForm);
