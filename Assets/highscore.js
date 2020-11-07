var setScore = document.querySelector("#staticScore");
var initialsInput = document.querySelector("#userInitials");
var scoreList = document.querySelector("#highscoreText");
var highscoreForm = document.querySelector("#highscoreForm")
var submitBtn = document.querySelector("#submitInitials")
var goBackBtn = document.querySelector("#goBackBtn")
var initials =[];

// Receives the intials from the input and makes a li element for them
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
    //gets stored intials from local storage
    //parsing the JSON string to an object
    var storedIntitials = JSON.parse(localStorage.getItem("initials"));

    //if intials were retrieved from local storage, update intials array
    if (storedIntitials !== null) {
        initials = storedIntitials;
    }

    //render the intials to the DOM
    renderInitials();
}

function storeInitials() {
    //stringify and set "intials" key in local storage to initials array
    localStorage.setItem("initials", JSON.stringify(initials));
}

//When for is submitted..
submitBtn.addEventListener("click", function(event) {
    event.preventDefault();

    var initialsText = initialsInput.value.trim();

    //Return from function earlu if input is blank
    if (initialsText === "") {
        return;
    }

    //Add new initialsText to intialsArray, then clear the input
    initials.push(initialsText);
    initialsText.value = "";

    //store updated intials in local storage; then rerender the list
    storeInitials();
    renderInitials();
});


//function displayHighscore(score, intinals) { 
//
//}
