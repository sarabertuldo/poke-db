require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const userRoutes = require("./routes/user.routes");

app.use("/users", userRoutes);

app.get("/", (req, res) => res.send("Poke App"));
app.get("*", (req, res) => res.redirect("/"));

app.listen(port, () => console.log(`Listening on ${port}`));
