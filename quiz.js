import { data } from "./database.js";

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
    qIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    total = 0;
    showQuestion(qIndex);
}

play.addEventListener("click", () => {
    resultScreen.style.display = "none";
    gameScreen.style.display = "block";

    playAgain();
});

const showResult = () => {
    resultScreen.style.display = "block";
    gameScreen.style.display = "none";

    if (wrongCount === 0) {
        resultScreen.querySelector(".greeting").textContent = "Excellent!"
    } else if (correctCount > wrongCount) {
        resultScreen.querySelector(".greeting").textContent = "Very good!"
    } else if(correctCount === wrongCount) {
        resultScreen.querySelector(".greeting").textContent = "Good!"
    } else if(correctCount < wrongCount && correctCount > 0) {
        resultScreen.querySelector(".greeting").textContent = "You can do better!"
    } else if(correctCount === 0) {
        resultScreen.querySelector(".greeting").textContent = "Well... you can always try again!"
    };

    resultScreen.querySelector(".correct").textContent = `Correct answers: ${correctCount}`;
    resultScreen.querySelector(".wrong").textContent = `Wrong answers: ${wrongCount}`;
    resultScreen.querySelector(".score").textContent = `Score: ${correctCount * 10}`;
};

const showQuestion = (qNumber) => {
    if (qIndex === data.length) {
        return showResult();
    }
    selectedAnswer = null;
    question.textContent = data[qNumber].question;
    answersContainer.innerHTML = data[qNumber].answers.map((item, index) =>
        `
        <div class="answer">
            <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
            <label for="1">${item.answer}</label>
        </div>
        `
    ).join("");

    selectAnswer();
};

const selectAnswer = () => {
    answersContainer.querySelectorAll("input").forEach(el => {
        el.addEventListener("click", (e) => {
            selectedAnswer = e.target.value;
        })
    });
};

const submitAnswer = () => {
    submit.addEventListener("click", () => {
        if (selectedAnswer !== null) {
            selectedAnswer === "true" ? correctCount++ : wrongCount++;
            qIndex++;
            showQuestion(qIndex);
        } else {
            alert("Please, select an answer");
        };
    });
};

showQuestion(qIndex);
submitAnswer();