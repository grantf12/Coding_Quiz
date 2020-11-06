//array of all the questions, choices and answers

var questions = [
    {
        question: "How would you type the (beginning) script tag?",
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
var currentQuestion = document.querySelector("questionText");
var starterBtn = document.querySelector("startBtn");
var timerEl = document.querySelector("timer");
var message = document.querySelector("message");
var startBox = document.getElementById("startpage");
var questionBox = document.getElementById("questionBox")
var timerSpan = document.getElementById("timerSpan")
var choiceA = document.getElementById("choiceA")
var choiceB = document.getElementById("choiceB")
var choiceC = document.getElementById("choiceC")
var choiceD = document.getElementById("choiceD")
var secondsLeft = 60



var currentQuestionIndex = 0


function displayQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    question.innerHTML = [currentQuestion].question

    for (var i = 0; i < currentQuestion.choices.length; i++) {
       var choice = document.createElement("li");
       choice.innerHTML = questions[i].question;
       choice.setAttribute("id", i);
       questions.appendChild(choice);
    }
  

}


//answer is chosen, need to map to when clicking a button this will run
function answerChosen() {
    currentQuestionIndex++;
    displayQuestion();

    //if ( === answerIndex) {
   //     message.textContent("Correct")
   // }
    //else {
   //     message.textContent("Wrong")
    //}    
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
        var timerInterval = setInterval(function(){
            secondsLeft--;
            timerSpan.textContent = secondsLeft;

            if(secondsLeft === 0) {
                clearInterval(timerInterval);
                //quizEnd();
            // need to make it so it will go to end screen with score = 0                
            }
        }, 1000);
    }

//function quizEnd();






//____choicelist______?.addEventListener("click", answerChosen)
