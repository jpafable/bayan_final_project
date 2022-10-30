const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const titleCase = require('title-case');
const CONFIG = require('./config');

//Configuration
mongoose.connect(CONFIG.DEV.MONGOOSECONNURL)
    .then(() => {
        console.log("Mongoose connection succeeded.");
    })
    .catch(err => {
        console.log("Error encountered on Mongoose Connection.");
        console.error(err);
    });

//Settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

//Global values


//Routes

//Landing Page
app.get('/', (req, res) => {

    res.render('index', {title: 'Welcome to Cheap Deals Mall'});
});


//Listener
app.listen(3000, () => {
    console.log("Listening on port 3000");
})