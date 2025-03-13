import { DAL } from '/Data/clubDAL.js';

const clubDAL = DAL;  // Using DAL as an object, not a class instance
let clubsLeft = [];
let isFinalGuess = false;

clubDAL.RetrieveAllClubData().then(clubData => {
    const clubs = clubData.map(club => clubDAL.RetrieveAllClubName(club)); // Retrieve club names
    Promise.all(clubs).then(clubNames => {
        clubsLeft = [...clubNames];  // Assign the names directly to clubsLeft
        console.log(clubsLeft);  // This prints the correct list of club names
    });
});


window.answer = function(response) {
    console.log(clubsLeft);
    console.log("Answer function called with:", response);  // Debugging log
    if (response === 'yes') {
        handelQuestion("yes");
    } else {
        handelQuestion("no");
    }
};



function handelQuestion(result) {
    let question = document.getElementById("question-text").innerText;
    if(question === "Think of a club... I'll guess it! Ready?" && result === "yes") {  // checks if the user is ready to play
        askQuestion("Is your club a social club?");
     } else if(question === "Think of a club... I'll guess it! Ready?" && result === "no") { return; }

    if(isFinalGuess) { // checks if the guess is the final guess
        if(result === "yes") {
            document.getElementById("question-text").innerText = "I win!"; // TODO: Switch to a win screen
        } else {
            document.getElementById("question-text").innerText = "I lose!"; // TODO: Switch to a lose screen
        }
        return;
    }

    clubsLeft.pop(); //TODO: Implement logic to remove clubs from the list based on the user's responses
    question = checkIfFinalGuess(question);
}

function askQuestion(question) {
    
    document.getElementById("question-text").innerText = question;
}

function checkIfFinalGuess(question) {
    if(clubsLeft.length === 1) {
        isFinalGuess = true;
        console.log("Final guess:", clubsLeft[0]);
        return document.getElementById("question-text").innerText = "Is your club the " + clubsLeft[0] + "?";
    } else {
        return question;
    }
}
