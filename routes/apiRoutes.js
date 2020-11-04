
var db = require("../models");
//console.log("inside apiRoutes, db: ", db);

module.exports = function(app) {
  app.get("/api/entry", function(req, res) {
    console.log("inside apiRoutes, res");
    db.Entry.findAll({}).then(function(dbEntry) {
//      console.log("inside apiRoutes, dbUser: ", dbUser);
      res.json(dbEntry);
    });
  });

  app.post("/api/entry", function(req, res) {
    let entry = { //object
      //userID: req.body.userID,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      date: req.body.date,
      airline: req.body.airline,
      flightNumber: req.body.flightnumber,
      illnessName: req.body.illness,
      symptom_name: req.body.symptom
    }
    console.log("inside apiRoutes, /api/entry, req.body: ", req.body)
    //breakdown incoming requests into database models
    //check if user already exists by email, grab id, else create new user, grab id
    //find Flight, get flightID
    //insert into submission, get submissionID
    //insert into submissionSymptom
    db.Entry.create(entry).then(function(dbEntry) {
      res.json(dbEntry);
    }).catch(function(error) {
      console.log("ERROR: apiRoutes: ", error);
    });
  });

};
//Route that pulls back illnesses, symptoms, flights, list of aggregated submissions
//each table gets it's own route/uri - one get from db and one post to write to db
