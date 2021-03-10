require("dotenv").config();
const passport = require("./config/passport.conf");
const express = require("express");
const app = express();
const session = require("express-session");
const userRoutes = require("./routes/user.routes");
const pkmnRoutes = require("./routes/pkmn.routes");
const msg = require("./middleware/msg.middleware");

const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
// app.use(express.static("public"));
app.use(express.static(__dirname + "/build"));
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: true,
    saveUninitialized: false,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

// app.use(bodyParser.json());
app.use("/users", userRoutes);
app.use("/pkmn", pkmnRoutes);

app.get("/", (req, res) => res.send("Poke App"));
// app.get("*", (req, res) => res.redirect("/"));
app.get("*", (req, res) => {
  res.sendFile("/build/index.html", { root: __dirname + "/" });
});

app.listen(port, () => console.log(`This app is listening on port ${port}!`));
