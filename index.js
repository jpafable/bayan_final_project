const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const titleCase = require('title-case');
const CONFIG = require('./config');
const mall = require('./models/mall');

// --Configuration--
mongoose.connect(CONFIG.DEV.MONGOOSECONNURL)
    .then(() => {
        console.log(CONFIG.LOG.MONGOOSECONNSUCC);
    })
    .catch(err => {
        console.log(CONFIG.LOG.MONGOOSECONNFAIL);
        console.error(err);
    });

//Settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// --Global values--


// --Routes--

//Landing Page
app.get('/', async (req, res) => {
    const malls = await mall.find({}).collation({ locale: 'en', strength: 2 }).sort({ name: 1 });
    //use title case
    for (let mallItem of malls) {
        mallItem.name = titleCase.titleCase(mallItem.name);
    }
    res.render('index', {title: 'Welcome to Cheap Deals Mall', malls});
});


// --Listener--
app.listen(3000, () => {
    console.log(CONFIG.LOG.EXPRESSLISTENSUCC);
})