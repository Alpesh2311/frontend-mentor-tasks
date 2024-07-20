const ratingsBtn = document.querySelectorAll(".rate-btn");
const givenRating = document.querySelector("#given-rating");
const submit = document.querySelector("#submit");
const frontSide = document.querySelector(".front-side");
const backSide = document.querySelector(".back-side");
let rating = "0";

// rating
ratingsBtn.forEach((btn) =>
  btn.addEventListener("click", function (evt) {
    ratingsBtn.forEach((button) => {
      button.style.backgroundColor = "";
      button.style.color = "";
    });
    evt.target.style.backgroundColor = "white";
    evt.target.style.color = "black";
    rating = evt.target.innerHTML;
    // console.log(evt.target.innerHTML);
  })
);

//submitting
submit.addEventListener("click", function () {
  frontSide.style.display = "none";
  backSide.style.display = "flex";
  givenRating.innerHTML = rating;
});
