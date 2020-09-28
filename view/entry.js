document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submitAnswer").addEventListener('click', event => {
    console.log("inside entry.js 1")

    let newEntry = {
      firstName: document.getElementById("fame").value,
      lastName: document.getElementById("lname").value
    }

    console.log("newEntry: ", newEntry);
    $.ajax("/api/entry/", {
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
