const express = require("express");
const path = require("path");
const PORT = 5500;

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/history-of-globalisation", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "history.html"));
});

app.get("/pros-and-cons-of-globalism", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "pros-and-cons.html"));
})

app.get("/sources", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "sources.html"));
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
