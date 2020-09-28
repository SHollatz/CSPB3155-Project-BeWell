
var db = require("../models");

module.exports = function(app) {
  app.get("/api/entry", function(req, res) {
    db.Entry.findAll({}).then(function(dbEntry) {
      res.json(dbEntry);
    });
  });

  app.post("/api/entry", function(req, res) {
    db.Entry.create(req.body).then(function(dbEntry) {
      res.json(dbEntry);
    });
  });
};
