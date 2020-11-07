//array of all the questions, choices and answers

var questions = [
    {
        question: "How would you link JavaScript page to an HTML?",
        choices: [
            "<script type=___.js> ",
            "<script url=____.js> ",
            "<script src=____.js> ",
            "<script href=____.js> "

        ],
        answerIndex: 2
    },
    {
        question: "Commonly used data types DO NOT include__.",
        choices: [
            "Strings",
            "Booleans",
            "Alerts",
            "Numbers"
        ],
        answerIndex: 2
    },
    {
        question: "Arrays in JavaScript are used to store ___.",
        choices: [
            "Numbers and strings",
            "Other arrays",
            "Booleans",
            "All of the above"
        ],
        answerIndex: 3
    },
    {
        question: "A ___ is a sequence of characters.",
        choices: [
            "Text box",
            "String",
            "Method",
            "Function"
        ],
        answerIndex: 1
    },
]

//Other variables
var questionText = document.querySelector("#questionText");
var starterBtn = document.querySelector("#startBtn");
var timerEl = document.querySelector("#timer");
var message = document.querySelector("#message");
var startBox = document.querySelector("#startpage");
var questionBox = document.querySelector("#questionBox")
var timerSpan = document.querySelector("#timerSpan")
var choiceA = document.querySelector("#choiceA")
var choiceB = document.querySelector("#choiceB")
var choiceC = document.querySelector("#choiceC")
var choiceD = document.querySelector("#choiceD")
var secondsLeft = 60


// variable used to determine what the current question is
var currentQuestionIndex = 0

//displays the current question and its choices
function displayQuestion() {

    questionText.textContent = questions[currentQuestionIndex].question;

    choiceA.textContent = questions[currentQuestionIndex].choices[0]
    choiceB.textContent = questions[currentQuestionIndex].choices[1]
    choiceC.textContent = questions[currentQuestionIndex].choices[2]
    choiceD.textContent = questions[currentQuestionIndex].choices[3]

}


//answer is chosen, this will run whenever an answer is chosen using onClick for each button
function answerChosen(answer) {
    // if question is wrong, subtracts 10 seconds
    if (answer != questions[currentQuestionIndex].answerIndex) {
        secondsLeft -= 10;
    }
    // currentQuestionIndex increases by 1, which will change to the next question
    currentQuestionIndex++;
    // When currentQuestionIndex exceeds the number of quesitons (-1 to take into account the array number starting at 0), the game will end
    if (currentQuestionIndex > questions.length -1) {
        //Score is saved to localStorage and user is sent to highscore page
        localStorage.setItem("score", secondsLeft);
        window.location.href = "highscore.HTML";
    }

    displayQuestion();
}


// when start button is pressed, startPage hides and questionBox appears, displayQuestion and timer starts
function startQuiz() {
    startBox.style.display = "none";
    questionBox.style.display = "block";
    displayQuestion();
    setTime();
}

// timer
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerSpan.textContent = secondsLeft;
        //if timer reaches 0, game ends and sends score to the localStorage and user is sent to highscore HTML
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            localStorage.setItem("score", secondsLeft);
            window.location.href = "highscore.HTML";
        }
    }, 1000);
}






