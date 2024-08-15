const express = require('express');
const People = require('../models/people');

// allows the routes defined on this file to be used in the server.js file
// for example we can just do app.use('/', peopleRouter); in the server.js file
const router  = express.Router();


//////////////////////////////////////////////
//////// Routes: Section          //////// 
///////////////////////////////////////////////


// create a landing page
router.get('/people', async (req, res) => {
    try {
        let people = await People.find({});
        res.render('landing.ejs', { people: people })

    } catch (err) {
        res.status(400).json(err);
    }
});

// create a new page
// create a new page ejs
router.get('/person/new', (req, res) => {
    res.render('new.ejs');
})

router.post('/people', async (req, res) => {
    await People.create(req.body);
    res.redirect('/people')
});

router.get('/person/:id', async (req, res) => {
    //get information for the person that we clicked on.
    const selectedPerson = await People.findById(req.params.id);
    // then render the details.ejs page and pass the data from selectedPerson into it.
    res.render('details.ejs', { selectedPerson });
});


router.delete('/person/:id', async (req, res) => {
    await People.findByIdAndDelete(req.params.id);
    res.redirect('/people');
});


router.put('/person/:id', async (req, res) => {
    await People.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/people');
});

module.exports = router;

