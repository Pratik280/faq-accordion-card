const questions = document.querySelectorAll("#question");
questions.forEach((question) => {
  question.onclick = () => {
    let hiddenText = question.nextElementSibling
    hiddenText.classList.toggle("hidden");
    let svg = question.querySelector("svg");
    svg.classList.toggle("rotate-180");
    question.firstElementChild.classList.toggle("font-bold")
  }
})