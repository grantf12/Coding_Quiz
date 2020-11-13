var setScore = document.querySelector("#staticScore");
var initialsInput = document.querySelector("#userInitials");
var scoreList = document.querySelector("#highscoreText");
var highscoreForm = document.querySelector("#highscoreForm")
var submitBtn = document.querySelector("#submitInitials")
var goBackBtn = document.querySelector("#goBackBtn")
var initials =[];
var score = [];

// Alerts user to enter their initials
alert("Please enter your initials to see your final score.")
init();

// Receives the initials from the input and makes a li element for them
function renderInitials() {
    //Clears input element
    initialsInput.innerHTML = "";

    //Makes a new li element for each initial
    for (var i = 0; i < initials.length; i++) {
        var initial = initials[i];

        var li = document.createElement("li");
            li.textContent=initial +": "+ localStorage.getItem("score")
            // li.setAttribute("data-index", i);
    //apends it to SOMEWHERE   
        scoreList.appendChild(li);
    }
}

function init() {
    //gets stored initials from local storage
    //parsing the JSON string to an object
    var storedInitials = JSON.parse(localStorage.getItem("initials"));

    //if initials were retrieved from local storage, update initials array
    if (storedInitials !== null) {
        initials = storedInitials;
    }

    //render the initials to the DOM
    renderInitials();
}

function storeInitials() {
    //stringify and set "initials" key in local storage to initials array
    localStorage.setItem("initials", JSON.stringify(initials));
}

function callScore() {
    //gets stored score from local storage
    var storedScore = JSON.parse(localStorage.getItem("score"));
    if (storedScore !== null) {
        var score = setScore;
        localStorage.setItem("setScore.getAttribute(value)", "score")
    }
}

//When for is submitted..
submitBtn.addEventListener("click", function(event) {
    event.preventDefault();

    var initialsText = initialsInput.value.trim();

    //Return from function earlu if input is blank
    if (initialsText === "") {
        return;
    }

    //Add new initialsText to initialsArray, then clear the input
    initials.push(initialsText);
    initialsInput.value = "";

    //store updated initials in local storage; then rerender the list
    storeInitials();
    renderInitials();

});



