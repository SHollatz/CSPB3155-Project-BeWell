CREATE DATABASE IF NOT EXISTS bewell_db;

USE bewell_db;

DROP TABLE IF EXISTS submissionSymptom;
DROP TABLE IF EXISTS submission;
DROP TABLE IF EXISTS symptom;
DROP TABLE IF EXISTS flight;
DROP TABLE IF EXISTS illness;
DROP TABLE IF EXISTS `user`;

CREATE TABLE IF NOT EXISTS `user`
(userID INTEGER NOT NULL AUTO_INCREMENT
, firstname VARCHAR(45) NOT NULL
, lastname VARCHAR(45) NOT NULL
, email VARCHAR(100) NOT NULL
, PRIMARY KEY (userID)
);

CREATE TABLE IF NOT EXISTS illness
(illnessID INTEGER NOT NULL AUTO_INCREMENT
, illnessName VARCHAR(45) NOT NULL
, PRIMARY KEY (illnessID)
);

CREATE TABLE IF NOT EXISTS flight
(flightID INTEGER NOT NULL AUTO_INCREMENT
, flightDate DATE NOT NULL
, airline VARCHAR(45) NOT NULL
, flightNumber VARCHAR(45) NOT NULL
, PRIMARY KEY (flightID)
);

CREATE TABLE IF NOT EXISTS symptom
(symptomID INTEGER NOT NULL
, symptomName VARCHAR(45) NOT NULL
, PRIMARY KEY (symptomID)
);

CREATE TABLE IF NOT EXISTS submission
(submissionID INTEGER NOT NULL AUTO_INCREMENT
, userID INTEGER NOT NULL
, flightID INTEGER NOT NULL
, illnessID INTEGER NOT NULL
, submissionDate DATE NOT NULL
, PRIMARY KEY (submissionID)
, FOREIGN KEY (userID) REFERENCES users(userID)
, FOREIGN KEY (flightID) REFERENCES flight(flightID)
, FOREIGN KEY (illnessID) REFERENCES illness(illnessID)
);

CREATE TABLE IF NOT EXISTS submissionSymptom
(submissionSymptonID INTEGER NOT NULL AUTO_INCREMENT
, submissionID INTEGER NOT NULL
, symptomID INTEGER NOT NULL
, PRIMARY KEY (submissionSymptonID)
, FOREIGN KEY (submissionID) REFERENCES submission(submissionID)
, FOREIGN KEY (symptomID) REFERENCES symptom(symptomID)
);