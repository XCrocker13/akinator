const express = require("express");

const app = express();
const port = 6060;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.render("mainGame");
});

app.listen(port, () => {
    console.log("Express listening @ http://localhost: " + port);
});