require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.static(__dirname + "/build"));
app.use(cookieParser());
app.use(passport.initialize());

app.get("*", (req, res) => {
  return res.sendFile("/build/index.html", { root: __dirname + "/" });
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}!`));