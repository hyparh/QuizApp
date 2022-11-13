const data = [
    {
        id: 1,
        question: "Which of these telescopes is Shmidth-Cassegrain?",
        answers: [
            { answer: "GSO 12\"", isCorrect: false },
            { answer: "Celestron C11", isCorrect: true },
            { answer: "14\" flexi-tube", isCorrect: false },
            { answer: "80ED APO", isCorrect: false },
        ],
    },
    {
        id: 2,
        question: "Which planet moon has active volcanoes?",
        answers: [
            { answer: "Titan", isCorrect: false },
            { answer: "Europa", isCorrect: false },
            { answer: "Io", isCorrect: true },
            { answer: "Ganymede", isCorrect: false },
        ],
    },
    {
        id: 1,
        question: "Which planet is biggest in our Solar system?",
        answers: [
            { answer: "Jupiter", isCorrect: false },
            { answer: "Saturn", isCorrect: true },
            { answer: "Venus", isCorrect: false },
        ],
    },
];

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

const showQuestion = (qNumber) => {
    question.textContent = data[qNumber].question;
    answersContainer.innerHTML = data[qNumber].answers.map((item, index) =>
        `
        <div class="answer">
            <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
            <label for="1">${item.answer}</label>
        </div>
        `
    ).join("");
};

showQuestion(qIndex);