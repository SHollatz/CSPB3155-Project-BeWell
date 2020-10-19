
var db = require("../models");

module.exports = function(app) {
  app.get("/api/entry", function(req, res) {
    db.Entry.findAll({}).then(function(dbEntry) {
      res.json(dbEntry);
    });
  });

  app.post("/api/entry", function(req, res) {
    let user = { //object
      firstname: req.body.firstname,
      lastname: req.body.lastname
    }
    //breakdown incoming requests into database models
    //check if user already exists by email, grab id, else create new user, grab id
    //find Flight, get flightID
    //insert into submission, get submissionID
    //insert into submissionSymptom
    db.Entry.create(req.body).then(function(dbEntry) {
      res.json(dbEntry);
    });
  });
};
//Route that pulls back illnesses, symptoms, flights, list of aggregated submissions
