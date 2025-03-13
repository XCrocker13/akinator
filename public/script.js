import { DAL } from '/Data/clubDAL.js';

const clubDAL = DAL;  // Using DAL as an object, not a class instance
let clubsLeft = [];
let isFinalGuess = false;


clubDAL.RetrieveAllClubData().then(clubData => {
    const clubs = clubData.map(club => clubDAL.RetrieveClubId(club)); // Retrieve club names
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
        askQuestion("Is your club a new club?");
        return;
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
    checkClub();
    question = checkIfFinalGuess(question);
}

function checkClub(result)
{
    let question = document.getElementById("question-text").innerText;
    clubDAL.RetrieveClubConnection(question).then(questionData => {
        console.log(questionData);
    });
    clubsLeft.forEach(element => {
        
    });
}

function askQuestion(question) {
    
    document.getElementById("question-text").innerText = question;
}

function checkIfFinalGuess(question) {
    if(clubsLeft.length === 1) {
        isFinalGuess = true;
        clubDAL.RetrieveClubNameById(clubsLeft[0]).then(clubName => {
            console.log("Final guess:", clubName);
            return document.getElementById("question-text").innerText = "Is your club the " + clubName + "?";
        });        
    } else {
        return question;
    }
}

document.getElementById("rotatingLlama").addEventListener("click",function(){
    this.classList.add("spin");

    setTimeout(() => {
        this.classList.remove("spin");
    }, 1000);
});

window.onload = function(){
    if(window.location.pathname === "/mainGame"){ 
        let music = document.getElementById("idleMusic");
        if(music){
            document.body.addEventListener("click", function() {
                music.muted = false;
                music.play().then(() => {
                    console.log("Audio is playing");
                }).catch(error => {
                    console.log("Autoplay prevented: " + error);
                });
            }, { once: false });
        } else {
            console.log("Audio element not found");
        }
    }
};