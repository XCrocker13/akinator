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
