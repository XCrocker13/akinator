function answer(response) {
    if (response === 'yes') { // if yes
        document.getElementById("question-text").innerText = "Alright! Is it a sports club?";
    } else { // if no
        document.getElementById("question-text").innerText = "Hmm... Let me try again!";
    }
}