const submit = document.querySelector("#arrow");
const email = document.querySelector("#email");
const invalid = document.querySelectorAll(".invalid");

const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validation = () => {
  if (email.value == "" || !regex.test(email.value)) {
    invalid.forEach((elem) => (elem.style.visibility = "visible"));
    clearValidation();
  } else {
    console.log(email.value);
  }
};

const clearValidation = () =>
  setTimeout(() => {
    invalid.forEach((elem) => (elem.style.visibility = "hidden"));
  }, 5000);

submit.addEventListener("click", validation);
