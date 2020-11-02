
var db = require("../models");
//console.log("inside apiRoutes, db: ", db);

module.exports = function(app) {
  app.get("/api/user", function(req, res) {
    console.log("inside apiRoutes, res");
    db.User.findAll({}).then(function(dbUser) {
//      console.log("inside apiRoutes, dbUser: ", dbUser);
      res.json(dbUser);
    });
  });

  app.post("/api/user", function(req, res) {
    let user = { //object
      userID: req.body.userID,
      firstname: req.body.firstname,
      lastname: req.body.lastname
    }
    console.log("inside apiRoutes, /api/user, req.body: ", req.body)
    //breakdown incoming requests into database models
    //check if user already exists by email, grab id, else create new user, grab id
    //find Flight, get flightID
    //insert into submission, get submissionID
    //insert into submissionSymptom
    db.User.create(user).then(function(dbUser) {
      res.json(dbUser);
    });
  });

};
//Route that pulls back illnesses, symptoms, flights, list of aggregated submissions
//each table gets it's own route/uri - one get from db and one post to write to db
