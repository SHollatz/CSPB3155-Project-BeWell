USE bewell_db;

INSERT INTO Entry (firstname, lastname, email, `date`, airline, flightNumber, illnessName, symptom_name, createdAt, updatedAt)
VALUES ('Holly', 'Wood', 'holly.wood@email.com', '2020-10-26', 'Delta', 'DL1', 'COVID-19', 'Fever', '2020-11-04 20:37:34', '2020-11-04 20:37:34')
    , ('Don', 'Keigh', 'donKeighKong@email.com', '2020-10-26', 'Delta', 'DL1', 'COVID-19', 'Cough', '2020-11-04 20:37:34', '2020-11-04 20:37:34')
    , ('Helen', 'Hywater', 'hhywater@email.com', '2020-10-28', 'Delta', 'DL1', 'COVID-19', 'Headache', '2020-11-04 20:37:34', '2020-11-04 20:37:34')
    , ('Jack', 'Pott', 'theGambler@email.com', '2020-10-27', 'United', 'UA2221', 'Influenza-A', 'Fever', '2020-11-04 20:37:34', '2020-11-04 20:37:34')
    , ('Crystal', 'Ball', 'ballC@email.com', '2020-10-30', 'Alaska', 'AA1733', 'Influenza-A', 'Cough', '2020-11-04 20:37:34', '2020-11-04 20:37:34')
    , ('Jack', 'Rabbit', 'j_rabbit@email.com', '2020-10-31', 'Air New Zealand', 'NZ5', 'Influenza-A', 'Headache', '2020-11-04 20:37:34', '2020-11-04 20:37:34')
    , ('Jay', 'Walker', 'jaywalker@email.com', '2020-11-01', 'Air New Zealand', 'NZ5', 'Influenza-B', 'Fever', '2020-11-04 20:37:34', '2020-11-04 20:37:34')
    , ('Ben', 'Dover', 'BEDover@email.com', '2020-10-26', 'United', 'UA2221', 'Influenza-B', 'Cough', '2020-11-04 20:37:34', '2020-11-04 20:37:34')
    , ('Anita', 'Room', 'ARoom@email.com', '2020-10-25', 'Alaska', 'AA1733', 'Influenza-B', 'Headache', '2020-11-04 20:37:34', '2020-11-04 20:37:34')
    , ('Ima', 'Hogg', 'thisLittlePiggy@email.com', '2020-11-05', 'Alaska', 'AA1733', 'Other', 'Fever', '2020-11-04 20:37:34', '2020-11-04 20:37:34');

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


