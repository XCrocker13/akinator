const express = require("express");

const app = express();
const port = 6060;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.render("startScreen");
});

app.get("/mainGame",(req,res) =>{
    res.render("mainGame");
});

app.get("/how-to-play",(req,res) =>{
    res.render("how-to-play");
});

app.get("/winScreen",(req,res) =>{
    res.render("winScreen");
});

app.get("/loseScreen",(req,res) =>{
    res.render("loseScreen");
});

app.listen(port, () => {
    console.log("express listining on http://localhost:" + port);
});