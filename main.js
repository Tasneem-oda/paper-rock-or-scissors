let computerChoiseDisplay = document.querySelector(".computer");
let yourChoiseDisplay = document.querySelector(".you");
let resultDisplay = document.querySelector(".result");
let buttons = document.querySelectorAll("button");
let yourScore = 0;
let computerScore = 0;

// تحديث النقاط في الواجهة
function updateScores() {
  // يمكنك إضافة عناصر HTML لعرض النقاط وتحديثها هنا
  // مثال:
  // document.querySelector('.your-score').innerHTML = yourScore;
  // document.querySelector('.computer-score').innerHTML = computerScore;
}

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    const yourChoise = e.target.innerText;
    yourChoiseDisplay.innerHTML = yourChoise;

    const computerChoise = generateComputerChoice();
    computerChoiseDisplay.innerHTML = computerChoise;

    const result = getResult(yourChoise, computerChoise);
    resultDisplay.innerHTML = result;

    updateScores();
  })
);

function generateComputerChoice() {
  const choices = ["ورقة", "حجرة", "مقص"];
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

function getResult(yourChoise, computerChoise) {
  if (yourChoise === computerChoise) {
    return "تعادل!";
  }

  // شروط الفوز
  if (
    (yourChoise === "حجرة" && computerChoise === "مقص") ||
    (yourChoise === "ورقة" && computerChoise === "حجرة") ||
    (yourChoise === "مقص" && computerChoise === "ورقة")
  ) {
    yourScore++;
    return "فزت!";
  }

  // شروط الخسارة
  computerScore++;
  return "خسرت!";
}
