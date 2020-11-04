USE bewell_db;

INSERT INTO Entry (firstname, lastname, email, `date`, airline, flightNumber, illnessName, symptom_name, createdAt, updatedAt)
VALUES ('Holly', 'Wood', 'holly.wood@email.com', '2020-10-26', '4', 'DL1', '1', '1', '2020-11-04 20:37:34', '2020-11-04 20:37:34')
    , ('Don', 'Keigh', 'donKeighKong@email.com', '2020-10-26', '4', 'DL1', '1', '2', '2020-11-04 20:37:34', '2020-11-04 20:37:34')
    , ('Helen', 'Hywater', 'hhywater@email.com', '2020-10-28', '4', 'DL1', '1', '3', '2020-11-04 20:37:34', '2020-11-04 20:37:34')
    , ('Jack', 'Pott', 'theGambler@email.com', '2020-10-27', '9', 'UA2221', '2', '1', '2020-11-04 20:37:34', '2020-11-04 20:37:34')
    , ('Crystal', 'Ball', 'ballC@email.com', '2020-10-30', '2', 'AA1733', '2', '2', '2020-11-04 20:37:34', '2020-11-04 20:37:34')
    , ('Jack', 'Rabbit', 'j_rabbit@email.com', '2020-10-31', '1', 'NZ5', '2', '3', '2020-11-04 20:37:34', '2020-11-04 20:37:34')
    , ('Jay', 'Walker', 'jaywalker@email.com', '2020-11-01', '1', 'NZ5', '3', '1', '2020-11-04 20:37:34', '2020-11-04 20:37:34')
    , ('Ben', 'Dover', 'BEDover@email.com', '2020-10-26', '9', 'UA2221', '3', '2', '2020-11-04 20:37:34', '2020-11-04 20:37:34')
    , ('Anita', 'Room', 'ARoom@email.com', '2020-10-25', '2', 'AA1733', '3', '3', '2020-11-04 20:37:34', '2020-11-04 20:37:34')
    , ('Ima', 'Hogg', 'thisLittlePiggy@email.com', '2020-11-05', '2', 'AA1733', '4', '1', '2020-11-04 20:37:34', '2020-11-04 20:37:34');

-- For refernec:
-- INSERT INTO illness (illnessID, illnessName)
-- VALUES (1, 'COVID-19')
--     , (2, 'Influenza-A')
--     , (3, 'Influenza-B')
--     , (4, 'Other');

-- INSERT INTO airline (airlineID, airlineName)
-- VALUES (1, 'Air New Zealand')
-- , (2, 'Alaska Airlines')
-- , (3, 'American Airlines')
-- , (4, 'Delta Airlines')
-- , (5, 'Frontier')
-- , (6, 'Jet Blue Airlines')
-- , (7, 'Quantas Airlines')
-- , (8, 'Southwest Airlines')
-- , (9, 'United Airlines')
-- , (10, 'Virgin Atlantic Airlines');


-- INSERT INTO symptom (symptomID, symptomName)
-- VALUES (1, 'Fever')
--     , (2, 'Cough')
--     , (3, 'Headache');


