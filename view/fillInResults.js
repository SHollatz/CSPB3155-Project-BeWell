  document.addEventListener("DOMContentLoaded", function () {
     window.onload = (event) => {
        console.log("page is fully loaded")
        $.ajax({
          url: "api/entry/",
          method: "GET",
          dataType: "json",
          success: function(res) {
            console.log("inside view/entry.js, ajax GET, res: ", res)
            console.log("inside view/entry.js, ajax GET, res: ", res[0].firstname)
            console.log("inside view/entry.js, ajax GET, res: ", res[0].lastname)
            console.log("res.success: ", res.success)
            let usertext1 = document.getElementById("testGetDummy1")
            let usertext2 = document.getElementById("testGetDummy2")
            console.log("usertext1: ", usertext1)
            usertext1.innerHTML = res[0].firstname
            usertext2.innerHTML = res[0].lastname
            console.log("usertext1: ", usertext1)
            },
          error: function(err) {
            console.log("inside view/entry.js, get, an error occured: ", err)
          }
        });
      }
  });



