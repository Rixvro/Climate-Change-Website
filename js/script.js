

const questions = [
    {
        question: "Which one of these sources is a renewable energy source?",
        answers: [
            {text: "Solar", correct: true},
            {text: "Coal", correct: false},
            {text: "Nuclear", correct: false},
            {text: "Gasoline", correct: false},
        ]
    },
    {
        question: "Which one of these is a greenhouse gas?",
        answers: [
            {text: "Oxygen", correct: false},
            {text: "Carbon dioxide", correct: true},
            {text: "Nitrogen", correct: false},
            {text: "Argon", correct: false},
        ]
    },
    {
        question: "What is the greenhouse effect?",
        answers: [
            {text: "The Process of trapping heat in the Sun", correct: false},
            {text: "The Process of trapping heat in the Earth's Surface", correct: false},
            {text: "The Process of trapping heat in the Earth's Atmosphere", correct: true},
            {text: "The Process of trapping heat in the heat", correct: false},
        ]
    },
    {
        question: "What is the main factor responsible for the occurence of climate change?",
        answers: [
            {text: "Human activities ", correct: true},
            {text: "Carbon dioxide", correct: false},
            {text: "Solar Activity", correct: false},
            {text: "Forced Fluctuations in the Earth's Surface", correct: false},
        ]
    },
    {
        question: "How Many Parties ratified the Paris Agreement out of the 197 parties in the United Nations FrameWork Convention on Climate Change?",
        answers: [
            {text: "85", correct: false},
            {text: "360", correct: false},
            {text: "175", correct: false},
            {text: "189", correct: true},
        ]
    },

    {
        question: "Who Recieved the Nobel Peace Prize for thier efforts in promoting climate action",
        answers: [
            {text: "Elon Musk", correct: false},
            {text: "Malala Yousafzai", correct: false},
            {text: "Al Glore", correct: true},
            {text: "Jean Samuel", correct:false },
        ]
    },
    {
        question: "What percentage of climate change scientists believe humans are the primary driver of climate change",
        answers: [
            {text: "22 -25%%", correct: false},
            {text: "29% or less", correct: false},
            {text: "97% or more", correct: true},
            {text: "75% or less", correct: false},
        ]
    },
    {
        question: "What is the major causes of sea level rise?",
        answers: [
            {text: "Melting sea ice ", correct: false},
            {text: "Increased amount of salt drops", correct: false},
            {text: "Rocks and sea animals ", correct: false},
            {text: "Melting glaciers and ice sheets", correct: true},
        ]
    },
    {
        question: "What is the main cause of coral bleaching?",
        answers: [
            {text: "Warm water%", correct: true},
            {text: "Cold tempatures", correct: false},
            {text: "CO(2) mixed into water", correct: false},
            {text: "Water pollution", correct: false},
        ]
    },
    {
        question: "In 2015, what was the name of the international agreement on climate change that was signed?",
        answers: [
            {text: "The 2015 Climate Agreement", correct: false},
            {text: "The Paris Agreement", correct: true},
            {text: "The Water UN Agreement", correct: false},
            {text: "The Interational Ckimate Agreement", correct: false},
        ]
    },
];




const questionText = document.querySelector("#questions");
const answerButtons = document.querySelector("#answer-buttons");
const nextButton = document.querySelector("#next-btn");

let index = 0;
let score = 0;



function startQuiz(){
    index = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

startQuiz();


function showQuestion() {
    clearQuestions();
    let currentQuestion = questions[index];
    questionText.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })


}



function selectAnswer(e) {
    let selected = e.target;
    let isCorrect = selected.dataset.correct === "true";
    if (isCorrect){
        selected.classList.add("correct");
        score++;
    } else {
        selected.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct){
            button.classList.add("correct");
        }
        button.disabled = true;
        nextButton.style.display = "block";
    });

}



function clearQuestions(){
    nextButton.style.display = "none";
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}



function showScore(){
    clearQuestions();
    questionText.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    index++;
    if (index < questions.length){
        showQuestion();
    } else{
        showScore();
    }
}


nextButton.addEventListener("click", () => {
    if (index < questions.length){
        handleNextButton();
    } else{
        startQuiz();
    }
})