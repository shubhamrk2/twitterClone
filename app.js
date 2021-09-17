const express = require('express');
const app = express();
const port = 3001;
const middleware = require('./middleware')
const path = require("path");
const bodyParser = require("body-parser")
const mongoose = require("./database");



const server = app.listen(port,() => console.log("hello world this is "+ port));

app.set("view engine","pug");
app.set("views", "views"); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,"public")));

//Routes
const loginRoute = require('./routes/loginRoutes');
app.use("/login", loginRoute);   
const registerRoute = require('./routes/registerRoutes');
app.use("/register", registerRoute);   

app.get("/", middleware.requireLogin, (req,res,next) => {

    var payload = {
        pageTitle: "Home"
    }

    res.status(200).render("home", payload);
})