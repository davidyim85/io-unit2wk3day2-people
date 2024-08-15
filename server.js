//////////////////////////////////////////////
////////  import area //////// 
///////////////////////////////////////////////
require('dotenv').config(); //load in my .env variables 
const express = require('express');
const methodOverride = require('method-override');
const peopleRouter = require('./controllers/people');

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

app.use('/', peopleRouter);

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('listening to port:', PORT)
})
