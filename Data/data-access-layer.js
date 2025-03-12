const { name } = require("ejs");
const { range } = require("express/lib/request");
const { status } = require("express/lib/response");

exports.DAL = 
{
    RetrieveAllClubData:async function()
    {
        return clubData;
    },
    RetrieveAllClubName:async function(club)
    {
        return club.clubName;
    },
    RetrieveAllClubSize:async function(club)
    {
        return club.size;
    },
    RetrieveClubCategory:async function(club)
    {
        return club.category;
    },
    RetrieveClubEvents:async function(club)
    {
        return club.events;
    },
    RetrieveClubStatus:async function(club)
    {
        return club.new;
    },
    RetrieveClubLeadership:async function(club)
    {
        return club.leadership;
    }

};

const club = 
{
    clubId,
    clubName,
    size,
    category,
    events,
    isNew,
    leadership: 
    [
        {role: "President", name: ""},
        {role: "Vice President", name: ""},
        {role: "Secretary", name: ""},
        {role: "Treasurer", name: ""}
    ]
};

clubData[0].leadership.array.forEach((name, index) => 
{
    if (club.leadership[index])
        {
            club.leadership[index].name = name;
        }   
});

let bookEvents = 
[
    {
        name: "Book Discussion"
    },
    {
        name: "Book Store Trips"
    }
];

let clubData = 
(
    {clubId: 1, clubName: "Llama Lounge", size: range(50) + 6, category: "Lounge", events: "FrEX", isNew: false, leadership: any["Daikwon Raney", "Xavier Crocker", "Ben Leonard", "Ry Ellender"]},
    {clubId: 2, clubName: "Board Game Club", size: range(20) + 10, category: "Gaming", events: "Board Game Nights", isNew: false, leadership: any["Zane Ammerman", "Ben Leonard", "Ben Leonard", "Ry Ellender"]},
    {clubId: 3, clubName: "Book Club" , size: range(10) + 5, category: "Literature", events: bookEvents.range(1), isNew: false, leadership: any["Sarah Nutt", "Abbey Kelley", "Timothy Dunaway", "Timothy Dunaway"]},
    {clubId: 4, clubName: "Foodie Club", size: range(10) + 10, category: "Foodie", events: "Themed Food Events", isNew: false, leadership: any["Pedro Torres"]},
    {clubId: 5, clubName: "Green Ball Club", size: range(20) + 10, category: "Social", events: "Social Gatherings", isNew: false, leadership: any["Cameron Troy", "Lily McClellan", "Clover Angel", "Jaime Rodriguez"]},
    {clubId: 6, clubName: "Horror Club", size: range(10) + 10, category: "Media", events: "Movie Screenings", isNew: true, leadership: any["Ben Leonard", "Austin Lawrence", "Cambry Partridge", "Ry Ellender"]}
);
