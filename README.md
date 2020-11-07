# Coding_Quiz

#Description
    Upon loading you are presented with the starting page, once the "Start!" button is clicked, the "starter page" container sets display to none and brings up the "question" container and the timer begins counting down. The displayQuestion function begins that displays the textContent of the current questions and their corresponding answer choices using an array and for loop to create listed items with buttons. Each of these buttons have an onClick function that will check if the answer array index equals the answerIndex, if it does, it will continue to the next question; if not it will subtract 10 seconds from the timer. 
    When all questions have been answered or the timer runs out, the time remaining will be your score and is logged in the localStorage. You are sent to the highscore page where you are prompted to enter your intials to see you score, once you click submit, your Initials and score are shown on the highscore(s) (uo)list. 

    