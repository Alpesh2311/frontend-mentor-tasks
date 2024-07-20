document.querySelectorAll(".question").forEach((question) => {
  question.addEventListener("click", function () {
    const answer = this.nextElementSibling;

    const icon = this.querySelector(".icon");
    if (answer.style.display === "none") {
      answer.style.display = "block";
      icon.setAttribute("src", "./assets/images/icon-minus.svg");
    } else {
      answer.style.display = "none";
      icon.setAttribute("src", "./assets/images/icon-plus.svg");
    }
  });
});
