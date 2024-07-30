const email = document.querySelector("#email");
const notify = document.querySelector("#notify");
const error = document.querySelector(".error");

const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validation = () => {
  if (email.value == "" || !regex.test(email.value)) {
    error.style.visibility = "visible";
  }

  const clearValidation = () => {
    setTimeout(() => {
      error.style.visibility = "hidden";
      notify.style.backgroundColor = "hsl(223, 87%, 63%)";
    }, 5000);
  };

  clearValidation();
};

notify.addEventListener("click", validation);
