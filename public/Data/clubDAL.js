// Ensure the DAL class or object is exported properly
export const DAL = {
    RetrieveAllClubData: async function() {
        return clubData;
    },
    RetrieveAllClubName: async function(club) {
        return club.clubName;
    },
    RetrieveAllClubSize: async function(club) {
        return club.size;
    },
    RetrieveClubCategory: async function(club) {
        return club.category;
    },
    RetrieveClubEvents: async function(club) {
        return club.events;
    },
    RetrieveClubStatus: async function(club) {
        return club.isNew;
    },
    RetrieveClubLeadership: async function(club) {
        return club.leadership;
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
