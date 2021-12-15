const express = require("express");
const app = express();
const path = require("path")

app.use(require("cors")({}));
app.use("/admin/", express.static(path.resolve(__dirname, "dist")));

app.listen(8080, () => {
    console.log("SERVER STARTS AT 8080 ?>?>?>?>?>?>");
});
