/**Authors: Amanda Killeen, Sabine Hollatz
 * Adds user submission to entry table
 */

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submitAnswer").addEventListener('click', event => {
    event.preventDefault()
    console.log("inside view/entry.js ")
    //update so it has all the fields on the form
    let symptom = [];
    $("input[name='symptom']:checked").each(function ()
    {
      symptom.push(parseInt($(this).val()));
    }); //jquery to pull checked fields in symptoms

    let newEntry = {
      //text entries
      firstname: $("#fname").val(),
      lastname: $("#lname").val(),
      email: $("#email").val(),
      date: $("#date").val(),
      airline: parseInt($("#airline").val()),
      flightnumber: $("#flightnumber").val(),
      illness: parseInt($('input[name=illness]:checked', '#submissionForm').val()),
      symptom: symptom //symptoms.entries()
    }

    console.log("newEntry: ", newEntry);
    $.ajax("/api/entry/", { //this will need to be updated with the correct route
      method: "POST",
      data: newEntry,
      success: function(res) {
        console.log("success")
        window.location.href = "BeWellFrontendResults.html?flightnumber="+$("#flightnumber").val()
      },
      error: function(err) {
        console.log("In entry.js, post, an error occurred: ", err);
      }   
    });
  });
});
