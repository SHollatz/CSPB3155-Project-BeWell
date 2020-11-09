# Testing - BeWell

### Project Information

- Team Name: BeWell (aka Awk)
- Team Members: Julie Fitzpatrick, Sabine Hollatz, Amanda Killeen, and Tony Pearo


## Dependencies
In order to run our tests, you will need to install the following dependencies:
- [node.js](https://nodejs.org/en/)
- [MySQL](https://www.mysql.com/)
    - Use the password in /config/config.json "test" to configure your instance of MySQL or update the password in the config file to your instance's password.
- [npm](https://www.npmjs.com/get-npm)

### Setup
1. Clone the repository into a directory
    
    ```git clone https://github.com/SHollatz/CSPB3308-Project-BeWell.git```
2. Run ```npm install``` in the CLI to ensure you have dependencies installed, including jest testing framework.

## Automated Unit Tests
There are 4 sets of unit tests:
- *sequelizeTests*: tests Sequelize functionality against BeWell_db.
- *checkEmail*: tests email input in submission form and that it adheres to validation requirements.
- *checkTextInput*: tests text input in submission form and that it adheres to validation requirements.
- *serverTests*: tests that the receipt of a valid 200 status code response when a request is sent to server to make sure that it is functioning.

### Running Tests
1. In your MySQL instance, ensure you are starting with a clean database:
       
        DROP DATABASE bewell_db;
        CREATE DATABASE bewell_db;
2. In the directory where you cloned the repository, input ```npm test``` in the CLI and the tests will run automatically.


## User Acceptance Testing

### Pages
- Home Page
- Flight Data
- Report
- About
---
### Home Page
##### Use Case Name: Navigation Home to Flight Data
- Description
    - Test the Navigation Menu
- Pre-conditions
    - User is on the Home Page
- Test steps
    1. Click The "Flight Data" Link in the Navigation Bar
- Expected result
    - User should be taken to the Flight Data Page
- Actual result
    - User is taken to Flight Data Page
- Status (Pass/Fail)
    - Pass!
- Notes
    - The Flight Data Page needs to have actual data, rather than dummy data.
- Post-conditions
    - User is now on the Flight Data Page


##### Use Case Name: Navigation Home to Report
- Description
    - Test the Navigation Menu
- Pre-conditions
    - User is on the Home Page
- Test steps
    1. Click The "Report" Link in the Navigation Bar
- Expected result
    - User should be taken to the Report Page
- Actual result
    - User is taken to Report Page
- Status (Pass/Fail)
    - Pass!
- Notes
    - None
- Post-conditions
    - User is now on the Report Page

##### Use Case Name: Navigation Home to About
- Description
    - Test the Navigation Menu
- Pre-conditions
    - User is on the Home Page
- Test steps
    1. Click The "About" Link in the Navigation Bar
- Expected result
    - User should be taken to the About Page.
- Actual result
    - User is not navigated away, but #About id appears in the url.
- Status (Pass/Fail)
    - Fail
- Notes
    - About page needs to be built
- Post-conditions
    - User is now on the Home Page with new url


##### Use Case Name: Find Flight - ok
- Description
    - Test the Find Flight functionality
- Pre-conditions
    - User provides a flight number that has data associated with it (ex. )
- Test steps
    1. Navigate to Home Page
    2. Provide valid flight number
    3. Click Search Button (magnifying glass)
- Expected result
    - User should be taken to a Flight Data page with data on that flight.
- Actual result
    - User is taken to the Flight Data page with dummy data that isn't dependent on their submission
- Status (Pass/Fail)
    - Fail
- Notes
    - Need to pass the user submission to the page.
- Post-conditions
    - None


##### Use Case Name: Find Flight - no flight
- Description
    - Test the Find Flight functionality when the flight data isn't found
- Pre-conditions
    - User provides a flight number that doesn't have data associated with it (ex. )
- Test steps
    1. Navigate to Home Page
    2. Provide invalid flight number
    3. Click Search Button (magnifying glass)
- Expected result
    - User should be taken to a results page that states no flights have been reported with that flight number, and a link to direct them to report info with that flight number.
- Actual result
    - User is taken to results page with dummy data that isn't dependent on their submission
- Status (Pass/Fail)
    - Fail
- Notes
    - Need to pass the user submission to the page.
    - Need to come up with redirect message when query is blank.
- Post-conditions
    - Flight number is temporarily stored for if user decides to be redirected to report so that information is automatically filled in the form.

---
### Flight Data
##### Use Case Name: Flight Data Load All - No filter
- Description
    - Test the table population with most recent flight data
- Pre-conditions
    - User navigates to the Flight Data Page
- Test steps
    1. Navigate to Flight Data Page
- Expected result
    - User should see a table with the most recent flight data that has been entered on the site
- Actual result
    - User is shown a table with with dummy data.
- Status (Pass/Fail)
    - Fail
- Notes
    - Need to store and process flight table from SQL tables
- Post-conditions
    - None


##### Use Case Name: Flight Data Filter Airline - OK
- Description
    - Test the table population with most recent flight data with the Airline filter
- Pre-conditions
    - User navigates to the Flight Data Page
- Test steps
    1. Navigate to Flight Data Page
    2. User types in a valid Airline in the "Search Airline" textbox
    3. User clicks the Filter Results button
- Expected result
    - User should see a table with the most recent flight data that has been entered on the site, with only entries from the Airline provided by the user.
- Actual result
    - User is shown a table with with dummy data.
- Status (Pass/Fail)
    - Fail
- Notes
    - Need to store and process flight table from SQL tables
    - Need to pass the filter parameters to the page
- Post-conditions
    - Table result on the webpage only had data from given Airline, but resets when reloaded.

##### Use Case Name: Flight Data Filter Flight Number - OK
- Description
    - Test the table population with most recent flight data with the Flight Number filter
- Pre-conditions
    - User navigates to the Flight Data Page
- Test steps
    1. Navigate to Flight Data Page
    2. User types in a valid Flight Number in the "Search Flight Number" textbox
    3. User clicks the Filter Results button
- Expected result
    - User should see a table with the most recent flight data that has been entered on the site, with only entries from the Flight Number provided by the user.
- Actual result
    - User is shown a table with with dummy data.
- Status (Pass/Fail)
    - Fail
- Notes
    - Need to store and process flight table from SQL tables
    - Need to pass the filter parameters to the page
- Post-conditions
    - Table result on the webpage only had data from given Flight Number, but resets when reloaded.


##### Use Case Name: Flight Data Filter Status - OK
- Description
    - Test the table population with most recent flight data with the Status filter
- Pre-conditions
    - User navigates to the Flight Data Page
- Test steps
    1. Navigate to Flight Data Page
    2. User types in a valid Status in the "Search Status" textbox
    3. User clicks the Filter Results button
- Expected result
    - User should see a table with the most recent flight data that has been entered on the site, with only entries from the Status provided by the user.
- Actual result
    - User is shown a table with with dummy data.
- Status (Pass/Fail)
    - Fail
- Notes
    - Need to store and process flight table from SQL tables
    - Need to pass the filter parameters to the page
    - Perhaps should offer a drop down list instead?
- Post-conditions
    - Table result on the webpage only had data from given Status, but resets when reloaded.

##### Use Case Name: Flight Data Filter Airline - Invalid
- Description
    - Test the table population with an Airline that isn't in the table.
- Pre-conditions
    - User navigates to the Flight Data Page
- Test steps
    1. Navigate to Flight Data Page
    2. User types in an invalid Airline in the "Search Airline" textbox
    3. User clicks the Filter Results button
- Expected result
    - User should see an empty table with a message saying "No results found"
- Actual result
    - User is shown a table with with dummy data.
- Status (Pass/Fail)
    - Fail
- Notes
    - Need to store and process flight table from SQL tables
    - Need to pass the filter parameters to the page
- Post-conditions
    - Table result empty, but resets when reloaded.
##### Use Case Name: Flight Data Flight Number - Invalid
- Description
    - Test the table population with a Flight Number that isn't in the table.
- Pre-conditions
    - User navigates to the Flight Data Page
- Test steps
    1. Navigate to Flight Data Page
    2. User types in an invalid Flight Number in the "Search Flight Number" textbox
    3. User clicks the Filter Results button
- Expected result
    - User should see an empty table with a message saying "No results found"
- Actual result
    - User is shown a table with with dummy data.
- Status (Pass/Fail)
    - Fail
- Notes
    - Need to store and process flight table from SQL tables
    - Need to pass the filter parameters to the page
- Post-conditions
    - Table result empty, but resets when reloaded.
##### Use Case Name: Flight Data Status - Invalid
- Description
    - Test the table population with a Status that isn't in the table.
- Pre-conditions
    - User navigates to the Flight Data Page
- Test steps
    1. Navigate to Flight Data Page
    2. User types in an invalid Status in the "Search Status" textbox
    3. User clicks the Filter Results button
- Expected result
    - User should see an empty table with a message saying "No results found"
- Actual result
    - User is shown a table with with dummy data.
- Status (Pass/Fail)
    - Fail
- Notes
    - Need to store and process flight table from SQL tables
    - Need to pass the filter parameters to the page
    - Perhaps have a drop down for Statuses?
- Post-conditions
    - Table result empty, but resets when reloaded.


##### Use Case Name: Navigation Flight Data to Home
- Description
    - Test the Navigation Menu
- Pre-conditions
    - User is on the Flight Data Page
- Test steps
    1. Click The "BeWell" Link in the Navigation Bar (on the left side)
- Expected result
    - User should be taken to the Home Page
- Actual result
    - User is taken to Home Page
- Status (Pass/Fail)
    - Pass!
- Notes
    - None
- Post-conditions
    - User is now on the Home Page

##### Use Case Name: Navigation Flight Data to Report
- Description
    - Test the Navigation Menu
- Pre-conditions
    - User is on the Flight Data Page
- Test steps
    1. Click The "Report" Link in the Navigation Bar
- Expected result
    - User should be taken to the Report Page
- Actual result
    - User is taken to Report Page
- Status (Pass/Fail)
    - Pass!
- Notes
    - None
- Post-conditions
    - User is now on the Report Page

##### Use Case Name: Navigation Flight Data to About
- Description
    - Test the Navigation Menu
- Pre-conditions
    - User is on the Flight Data Page
- Test steps
    1. Click The "About" Link in the Navigation Bar
- Expected result
    - User should be taken to the About Page.
- Actual result
    - User is not navigated away, but #About id appears in the url.
- Status (Pass/Fail)
    - Fail
- Notes
    - About page needs to be built
- Post-conditions
    - User is now on the Flight Data Page with new URL
---
### Report

##### Use Case Name: Navigation Report to Home
- Description
    - Test the Navigation Menu
- Pre-conditions
    - User is on the Report Page
- Test steps
    1. Click The "BeWell" Link in the Navigation Bar (on the left side)
- Expected result
    - User should be taken to the Home Page
- Actual result
    - User is taken to Home Page
- Status (Pass/Fail)
    - Pass!
- Notes
    - None
- Post-conditions
    - User is now on the Home Page

##### Use Case Name: Navigation Report to Flight Data
- Description
    - Test the Navigation Menu
- Pre-conditions
    - User is on the Report Page
- Test steps
    1. Click The "Flight Data" Link in the Navigation Bar
- Expected result
    - User should be taken to the Flight Data Page
- Actual result
    - User is taken to Flight Data Page
- Status (Pass/Fail)
    - Pass!
- Notes
    - None
- Post-conditions
    - User is now on the Flight Data Page

##### Use Case Name: Navigation Report to About
- Description
    - Test the Navigation Menu
- Pre-conditions
    - User is on the Report Page
- Test steps
    1. Click The "About" Link in the Navigation Bar
- Expected result
    - User should be taken to the About Page.
- Actual result
    - User is not navigated away, but #About id appears in the url.
- Status (Pass/Fail)
    - Fail
- Notes
    - About page needs to be built
- Post-conditions
    - User is now on the Report Page with new URL
##### Use Case Name: Reporting - Ok
- Description
    - Testing the user's ability to enter information into the database and see their results show up in the results page
- Pre-conditions
    - User navigates to the Report Page
- Test steps
    1. Navigate to Report Page
    2. User types in information into textboxes (First name, last name, email, airline, and flight number)
    3. User selects a date
    4. User selects symptoms and diagnosis.
    5. User clicks the "Submit" button
- Expected result
    - User should be shown the Flight Data page, with their entry at the top.
- Actual result
    - Nothing
- Status (Pass/Fail)
    - Fail
- Notes
    - Need to store and process data from form into sql
    - Need to update table on frontend once backend table is updated
    - Need to link to Flight Data page
- Post-conditions
    - User is on the Report Page

##### Use Case Name: Reporting - Invalid Email
- Description
    - Testing to see if the form will catch an invalid email before submitting
- Pre-conditions
    - User navigates to the Report Page
- Test steps
    1. Navigate to Report Page
    2. User types in information into textboxes (First name, last name, airline, and flight number)
    3. User types in an invalid email (no @ and .)
    4. User selects a date
    5. User selects symptoms and diagnosis.
    6. User clicks the "Submit" button
- Expected result
    - User should be shown the page with the information they've tried to submit, and a message that states the email provided is invalid.
- Actual result
    - Nothing
- Status (Pass/Fail)
    - Fail
- Notes
    - Need to check email in JS
- Post-conditions
    - User is on the Report Page

##### Use Case Name: Reporting - No Diagnosis Chosen
- Description
    - Testing to see if form will catch error of not choosing a diagnosis before submitting
- Pre-conditions
    - User navigates to the Report Page
- Test steps
    1. Navigate to Report Page
    2. User types in information into textboxes (First name, last name, email, airline, and flight number)
    3. User selects a date
    4. User selects symptoms
    5. User DOES NOT select a diagnosis
    6. User clicks the "Submit" button
- Expected result
    - User should be shown the page with the information they've tried to submit, and a message that states they need to choose a diagnosis.
- Actual result
    - Nothing
- Status (Pass/Fail)
    - Fail
- Notes
    - Need to check selection on js
- Post-conditions
    - User is on the Report Page
