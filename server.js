//////////////////////////////////////////////
////////  import area //////// 
///////////////////////////////////////////////
require('dotenv').config(); //load in my .env variables 
const express = require('express');
const methodOverride = require('method-override');
const People = require('./models/people');

const app = express();


//////////////////////////////////////////////
//////// Middles: Section          //////// 
///////////////////////////////////////////////

// the middleware below allows JSON to be sent in the REQUEST BODY
app.use(express.json());

// any static files comes from this folder. Things like CSS, images even other JS files
app.use(express.static('public'));

// the middleware below allows the express app to react FORM DATA
app.use(express.urlencoded({ extended: true }));

// the middleware below overrides the default HTML FORM POST. This is default behavior.
// Any values that are follow by the query parameter ?_method=<insert value here> will be the overriding HTTP Method
// thus overriding the POST (or GET) in the method attribute 
app.use(methodOverride('_method'));



//////////////////////////////////////////////
//////// Routes: Section          //////// 
///////////////////////////////////////////////


// create a landing page

app.get('/people', async (req, res) => {
    try {
        let people = await People.find({});
        res.render('landing.ejs', { people: people })

    } catch (err) {
        res.status(400).json(err);
    }
});

// create a new page
// create a new page ejs
app.get('/person/new', (req, res) => {
    res.render('new.ejs');
})

app.post('/people',async (req, res) => {
    await People.create(req.body);
    res.redirect('/people')
});





const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('listening to port:', PORT)
})
