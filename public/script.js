import { DAL } from '/Data/clubDAL.js';

const clubDAL = DAL;  // Using DAL as an object, not a class instance
let clubsLeft = [];
let isFinalGuess = false;
let currentQuestion = 0;
let questionList = [];

clubDAL.RetrieveAllClubData().then(clubData => {
    const clubs = clubData.map(club => clubDAL.RetrieveClubId(club)); // Retrieve club names
    Promise.all(clubs).then(clubNames => {
        clubsLeft = [...clubNames];  // Assign the names directly to clubsLeft
        console.log(clubsLeft);  // This prints the correct list of club names
    });
});

clubDAL.RetrieveQuestionList().then(questions => {
    questionList = questions;
    console.log(questionList);
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
        askQuestion(questionList[currentQuestion++]);
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

    //clubsLeft.pop(); //TODO: Implement logic to remove clubs from the list based on the user's responses
    if(!isFinalGuess) {
        checkClub(result);
    }
    checkIfFinalGuess().then(question => askQuestion(question));

}

function checkClub(result)
{
    let question = document.getElementById("question-text").innerText;
    clubDAL.RetrieveClubConnection(question).then(questionData => {
        console.log(questionData);
        if(result === "yes") {
            questionData.noIdArray.forEach(id => {
                console.log(clubsLeft);
                clubsLeft = clubsLeft.filter(element => element !== id);
            });
        } else {
            questionData.yesIdArray.forEach(id => {
                console.log(clubsLeft);
                clubsLeft = clubsLeft.filter(element => element !== id);
            });
        }
        // questionData.yesIdArray.forEach(id => {
        //     console.log(clubsLeft);
        //     clubsLeft = clubsLeft.filter(element => element !== id);
        // });
    });
}

function askQuestion(question) {
    
    document.getElementById("question-text").innerText = question;
}

function checkIfFinalGuess() {
    if (clubsLeft.length === 1) {
        isFinalGuess = true;
        return clubDAL.RetrieveClubNameById(clubsLeft[0]).then(clubName => {
            console.log("Final guess:", clubName);
            return "Is your club " + clubName + "?";
        });
    } else {
        return Promise.resolve(questionList[currentQuestion++]);
    }
}

document.getElementById("rotatingLlama").addEventListener("click",function(){
    this.classList.add("spin");

    setTimeout(() => {
        this.classList.remove("spin");
    }, 1000);
});

window.onload = function(){
    if (window.location.pathname === "/mainGame") {
        let music = document.getElementById("idleMusic");
        if (music) {
            music.muted = false;
            music.play().then(() => {
                console.log("idleMusic is playing");
            }).catch(error => {
                console.log("Autoplay prevented: " + error);
            });
        } else {
            console.log("Audio element not found for idleMusic");
        }
    }

    if (window.location.pathname === "/winScreen") {
        let winMusic = document.getElementById("winMusic");
        if (winMusic) {
            winMusic.muted = false;
            winMusic.play().then(() => {
                console.log("winMusic is playing");
            }).catch(error => {
                console.log("Autoplay prevented: " + error);
            });
        } else {
            console.log("Audio element not found for winMusic");
        }
    }

    if (window.location.pathname === "/loseScreen") {
        let winMusic = document.getElementById("loseMusic");
        if (winMusic) {
            winMusic.muted = false;
            winMusic.play().then(() => {
                console.log("loseMusic is playing");
            }).catch(error => {
                console.log("Autoplay prevented: " + error);
            });
        } else {
            console.log("Audio element not found for loseMusic");
        }
    }
};