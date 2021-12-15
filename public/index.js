const express = require("express");
const path = require("path");
const app = express();
const port = process.env.port || 8080;

app.use("/admin", express.static("build"));
app.use("/admin/*", express.static(path.join(__dirname, "build", "index.html")));
app.use("/admin/*", express.static(path.join(__dirname, "build")));

app.use(express.static("build/public"));
app.use(express.static("build/static"));

app.listen(port, err => {
    console.log(err);
});
