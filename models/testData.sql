USE bewell_db;

INSERT INTO `user` (userID, firstname, lastname, email)
VALUES (1, 'Holly', 'Wood', 'holly.wood@email.com')
    , (2, 'Don', 'Keigh', 'donKeighKong@email.com')
    , (3, 'Helen', 'Hywater', 'hhywater@email.com')
    , (4, 'Jack', 'Pott', 'theGambler@email.com')
    , (5, 'Crystal', 'Ball', 'ballC@email.com')
    , (6, 'Jack', 'Rabbit', 'j_rabbit@email.com')
    , (7, 'Jay', 'Walker', 'jaywalker@email.com')
    , (8, 'Ben', 'Dover', 'BEDover@email.com')
    , (9, 'Anita', 'Room', 'ARoom@email.com')
    , (10, 'Ima', 'Hogg', 'thisLittlePiggy@email.com');

INSERT INTO illness (illnessID, illnessName)
VALUES (1, 'COVID-19')
    , (2, 'Influenza-A')
    , (3, 'Influenza-B')
    , (4, 'Other');

INSERT INTO airline (airlineID, airlineName)
VALUES (1, 'Air New Zealand')
, (2, 'Alaska Airlines')
, (3, 'American Airlines')
, (4, 'Delta Airlines')
, (5, 'Frontier')
, (6, 'Jet Blue Airlines')
, (7, 'Quantas Airlines')
, (8, 'Southwest Airlines')
, (9, 'United Airlines')
, (10, 'Virgin Atlantic Airlines');

INSERT INTO flight (flightID, flightDate, airlineID, flightNumber)
VALUES (1, '2020-10-20', 4, 'DL1')  -- JFK - LHR
    , (2, '2020-10-24', 4, 'DL1')
    , (3, '2020-10-23', 4, 'DL1')
    , (4, '2020-10-10', 9, 'UA2221') -- DEN - PDX
    , (5, '2020-09-01', 3, 'AA1733') -- MCI - DFW
    , (6, '2020-08-15', 1, 'NZ5') -- LAX - AKL
    , (7, '2020-08-16', 1, 'NZ5')
    , (8, '2020-10-11', 9, 'UA2221')
    , (9, '2020-09-02', 3, 'AA1733')
    , (10, '2020-09-03', 3, 'AA1733');

INSERT INTO symptom (symptomID, symptomName)
VALUES (1, 'Fever')
    , (2, 'Cough')
    , (3, 'Headache');

INSERT INTO submission(submissionID, userID, flightID, illnessID, submissionDate)
VALUES (1, 1, 1, 1, '2020-10-26')
, (2, 2, 2, 2, '2020-10-26')
, (3, 3, 3, 3, '2020-10-28')
, (4, 4, 4, 4, '2020-10-27')
, (5, 5, 5, 1, '2020-10-30')
, (6, 6, 6, 2, '2020-10-31')
, (7, 7, 7, 3, '2020-11-01')
, (8, 8, 8, 4, '2020-10-26')
, (9, 9, 9, 1, '2020-10-25')
, (10, 10, 10, 1, '2020-11-05')
, (11, 1, 3, 1, '2020-10-29')
, (12, 2, 3, 2, '2020-10-30')
, (13, 1, 3, 3, '2020-10-31')
, (14, 4, 4, 3, '2020-10-27')
, (15, 5, 4, 1, '2020-10-25')
, (16, 1, 6, 1, '2020-10-27')
, (17, 10, 7, 4, '2020-11-01')
, (18, 8, 8, 3, '2020-10-28')
, (19, 9, 4, 2, '2020-10-26')
, (20, 10, 4, 1, '2020-11-01');

INSERT INTO submissionSymptom (submissionID, symptomID)
VALUES (1, 1)
, (1, 2)
, (1, 3)
, (2, 2)
, (2, 3)
, (3, 1)
, (3, 3)
, (4, 1)
, (4, 2)
, (4, 3)
, (5, 2)
, (6, 3)
, (7, 1)
, (7, 3)
, (8, 2)
, (8, 3)
, (9, 3)
, (10, 1)
, (10, 2)
, (11, 2)
, (11, 3)
, (12, 3)
, (13, 1)
, (14, 2)
, (15, 2)
, (15, 3)
, (16, 1)
, (17, 2)
, (18, 2)
, (18, 3)
, (19, 1)
, (20, 1);


