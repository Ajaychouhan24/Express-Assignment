const express = require("express");
const session = require("express-session");
const path = require("path");
const app = express();


const {connectDB}  = require("./config/db");
const router = require("./routing/routing");
connectDB();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(session({
  secret: "secret123",
  resave: false,
  saveUninitialized: false,
}));

app.use("/", router);

app.listen(3000, () => {
  console.log("Running");
});
