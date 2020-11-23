DROP TABLE IF EXISTS FlightStatus;
DROP VIEW IF EXISTS FlightStatus;

TRUNCATE TABLE Entry;

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

create view FlightStatus
as
select 
id
, airline
, flightNumber
, date(`date`) AS flightDate
, case 
	when count(distinct email) > 3 then 'Red'
    when count(distinct email) between 2 and 3 then 'Yellow'
    else 'Green'
    end as 'Status'
, createdAt
, updatedAt
from bewell_db.entry
group by 1, 2, 3;