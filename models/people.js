///////////////////////////////////////////////
//////// People model                   ///////// 
///////////////////////////////////////////////

//import the mongoose VARIABLE which holds the configuration on the file called connection.js
const mongoose = require('./connection');

//created our SCHEMA. 
const PeopleSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    title: String,
});

//this variable holds all the configurations and schema and is the thing that 'talks' to the db and express app
const People = mongoose.model('people', PeopleSchema);

// export this People for it to be used 
module.exports = People;