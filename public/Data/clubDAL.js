// Ensure the DAL class or object is exported properly
export const DAL = {
    RetrieveAllClubData: async function() 
    {
        return clubData;
    },
    RetrieveClubId: async function(club) 
    {
        return club.clubId;
    },
    RetrieveClubNameById: async function(id) 
    {
        console.log("dgffzmhdjfsfghdawdszcjywadfshrDA");
        let index =  clubData.findIndex(g => g.clubId === id);
        return clubData[index].clubName;
        //return questionData.find(q => q.clubId === id);
    },
    RetrieveClubConnection: async function(questionText)
    {
        return questionData.find(q => q.question === questionText);
    },
    RetrieveQuestionList: async function()
    {
        return questionData.map(item => item.question);
    }
};

// Example club data
const bookEvents = [
    { name: "Book Discussion" },
    { name: "Book Store Trips" }
];

// Dummy data for clubs
const clubData = [
    { clubId: 1, clubName: "Llama Lounge", size: 56, category: "Lounge", events: "FrEX", isNew: false, leadership: ["Daikwon Raney", "Xavier Crocker", "Ben Leonard", "Ry Ellender"] },
    { clubId: 2, clubName: "Board Game Club", size: 30, category: "Gaming", events: "Board Game Nights", isNew: false, leadership: ["Zane Ammerman", "Ben Leonard", "Ben Leonard", "Ry Ellender"] },
    { clubId: 3, clubName: "Book Club", size: 15, category: "Literature", events: bookEvents, isNew: false, leadership: ["Sarah Nutt", "Abbey Kelley", "Timothy Dunaway", "Timothy Dunaway"] },
    { clubId: 4, clubName: "Foodie Club", size: 20, category: "Foodie", events: "Themed Food Events", isNew: false, leadership: ["Pedro Torres"] },
    { clubId: 5, clubName: "Green Ball Club", size: 30, category: "Social", events: "Social Gatherings", isNew: false, leadership: ["Cameron Troy", "Lily McClellan", "Clover Angel", "Jaime Rodriguez"] },
    { clubId: 6, clubName: "Horror Club", size: 20, category: "Media", events: "Movie Screenings", isNew: true, leadership: ["Ben Leonard", "Austin Lawrence", "Cambry Partridge", "Ry Ellender"] }
];

const questionData =
[
    {question: "Is your club a social club?", yesIdArray: [1, 2, 3, 5], noIdArray: [4, 6]},
    {question: "Does your club host events on a regular basis?", yesIdArray: [2, 3, 5], noIdArray: [1, 4, 6]},
    {question: "Has your club partnered with another club?", yesIdArray: [1, 3, 4, 5], noIdArray: [2, 6]},
    {question: "Is your club a new club?", yesIdArray: [6], noIdArray: [1, 2, 3, 4, 5]},
    {question: "Does your club have 20 members or less", yesIdArray: [3, 4, 6], noIdArray: [1, 2, 4, 5]},
    {question: "Was your club made for relaxation?", yesIdArray: [1, 3, 6], noIdArray: [2, 4, 5]},
    {question: "Is your club focused on games?", yesIdArray: [2], noIdArray: [1, 3, 4, 5, 6]},
    {question: "Is your club food-related?", yesIdArray: [4], noIdArray: [1, 2, 3, 5, 6]},
    {question: "Is your club focused on horror or entertainment?", yesIdArray: [6], noIdArray: [1, 2, 3, 4, 5]},
    {question: "Does your club cater to a specific hobby or interest?", yesIdArray: [2, 3, 4, 6], noIdArray: [1, 5]},
    {question: "Is your club more focused on entertainment than education?", yesIdArray: [3, 4], noIdArray: [1, 2, 5, 6]},
    {question: "Is your club a community-based group?", yesIdArray: [1], noIdArray: [2, 3, 4, 5, 6]},
    {question: "Does your club require membership fees?", yesIdArray: [3], noIdArray: [1, 2, 4, 5, 6]},
    {question: "Do your club events tend to last for over 6 hours?", yesIdArray: [2], noIdArray: [1, 3, 4, 5, 6]},
    {question: "Does your club involve the color green", yesIdArray: [6], noIdArray: [1, 2, 3, 4, 5]}
];

// const questionList = 
// [
//         "Who is the president of your club?",
//         "Is your club a social club?",
//         "Is your club a new club?",
//         "What is the main focus of your club?",
//         "Who is a leader within your club?",
//         "Was your club made for relaxation?",
//         "Does your club encourage collaboration?",
//         "Does your club host events on a regular basis?",
//         "Has your club partnered with another club?",
//         "Does your club have aproximately 20 members",
//         "Does your club have over 20 members"
    
// ]