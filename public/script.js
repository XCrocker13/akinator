import { DAL } from '/Data/clubDAL.js';

const clubDAL = DAL;  // Using DAL as an object, not a class instance

clubDAL.RetrieveAllClubData().then(clubData => {
    const clubsLeft = clubData.map(club => clubDAL.RetrieveAllClubName(club)); // Call RetrieveAllClubName for each club
    Promise.all(clubsLeft).then(clubNames => {
        console.log(clubNames);  // This will print the club names
    });
});

window.answer = function(response) {
    console.log("Answer function called with:", response);  // Debugging log
    if (response === 'yes') {
        document.getElementById("question-text").innerText = "Alright! Is it a sports club?";
    } else {
        document.getElementById("question-text").innerText = "Hmm... Let me try again!";
    }
};

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