  document.addEventListener("DOMContentLoaded", function () {
     window.onload = (event) => {
        console.log("page is fully loaded")
        $.ajax({
          url: "api/entry/",
          method: "GET",
          dataType: "json",
          success: function(res) {
            // console.log("inside view/entry.js, ajax GET, res: ", res)
            console.log("res[0].date", res[0].date);
            tabBody = document.getElementsByTagName("tbody")
            var i;
            for (i = 0; i < 6; i++) {
              row = tabBody[0].children[i];
              columns = row.children;
              columns[0].innerHTML = res[i].airline;
              columns[1].innerHTML = res[i].flightNumber;
              var date = res[i].date.split("T");
              columns[2].innerHTML = date[0];
            }
          },
          error: function(err) {
            console.log("inside view/entry.js, get, an error occured: ", err)
          }
        });
      }
  });



