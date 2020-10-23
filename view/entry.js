// Need to finish mapping from index.html to models/entry.js and view/entry.js
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submitAnswer").addEventListener('click', event => {
    console.log("inside entry.js 1")

    //update so it has all the fields on the form
    let newEntry = {
      //text entries
      userID: 2,
      firstname: document.getElementById("fname").value,
      lastname: document.getElementById("lname").value,
      //date not working yet
//      date: document.getElementById("date").value,
//      airline: document.getElementById("airline").value,
      //checkboxes ?? values for these?
      /*
      sympt1: document.getElementById("sympt1").value,
      sympt2: document.getElementById("sympt2").value,
      sympt3: document.getElementById("sympt3").value,
      //radio ?? no id so name?
      diagnosis: document.getElementsByName("choice").value */
    }

    console.log("newEntry: ", newEntry);
    $.ajax("/api/user/", {
      method: "POST",
      data: newEntry,
      success: function(res) {
        console.log("success")
      },
      error: function(err) {
        console.log("In entry.js, post, an error occured: ", err);
      }   
    });
  });

});
