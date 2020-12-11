/**Author: Sabine Hollatz
 * Contributors: Amanda Killeen, Tony Pearo
 * */

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
  /** route to get results based on user submission*/
  app.get("/api/flights/:flightnumber?", function(req, res) {
    console.log("inside apiRoutes, res");
    let options = {};
    if (req.params.flightnumber)
      options = {where: {flightNumber: req.params.flightnumber}};
    db.FlightStatus.findAll(options).then(function(dbEntry) {
//      console.log("inside apiRoutes, dbUser: ", dbUser);
      res.json({ data: dbEntry });
    });
  });


  app.post("/api/entry", function(req, res) {
    /**catch airline number and convert to string*/
    var airline = req.body.airline.valueOf();
    var airlineName = "";
    switch (airline) {
      case "1":
        airlineName = "Air New Zealand";
        break;
      case "2":
        airlineName = "Alaska Airlines";
        break;
      case "3":
        airlineName = "American Airlines";
        break;
      case "4":
        airlineName = "Delta Airlines";
        break;
      case "5":
        airlineName = "Frontier Airlines";
        break;
      case "6":
        airlineName = "Jet Blue Airlines";
        break;
      case "7":
        airlineName = "Quantas Airlines";
        break;
      case "8":
        airlineName = "Southwest Airlines";
        break;
      case "9":
        airlineName = "United Airlines";
        break;
      case "10":
        airlineName = "Virgin Atlantic Airlines";
        break;
    }

    /**catch illness radio and convert to string illness name*/
    var illness = req.body.illness;
    var illnessName = "";
    switch (illness) {
      case "1":
        illnessName = "COVID-19";
        break;
      case "2":
        illnessName = "Influenza-A";
        break;
      case "3":
        illnessName = "Influenza-B";
        break;
      case "4":
        illnessName = "Other";
        break;
    }

    console.log("zip: ", req.body.symptom)

    let entry = { //object
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      date: req.body.date,
      airline: airlineName,
      flightNumber: req.body.flightnumber,
      illnessName: illnessName,
      symptom_name: req.body.symptom  //tempppppppppppp
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
//Route that pulls back illnesses, symptom, flights, list of aggregated submissions
//each table gets it's own route/uri - one get from db and one post to write to db
