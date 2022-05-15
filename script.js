const quizData = [
    {
        question: "Who painted the Mona Lisa?",
        a: "Pablo Picasso",
        b: "Claude Monet",
        c: "Michelangelo",
        d: "Leonardo da Vinci",
        correct: "d",
    },
    {
        question: "who holds the pride of beating the computers in mathematical wizard?",
        a: "Raja Ramann",
        b: "Shakuntala Devi",
        c: "Ramanujana",
        d: "Rina Panigrahi",
        correct: "b",
    },
    {
        question: "What is the largest continent on Earth?",
        a: "Asia",
        b: "Africa",
        c: "Antartica",
        d: "North America",
        correct: "a",
    },
    {
        question: "What is the world's smallest country?",
        a: "Maldives",
        b: "Vetican City",
        c: "Russia",
        d: "Canada",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
