document.addEventListener("DOMContentLoaded", function () {
     window.onload = (event) => {
         let urlParams = new URLSearchParams(window.location.search.toLowerCase());
         let flightNumber = "";
         if (urlParams.has("flightnumber"))
            flightNumber = urlParams.get("flightnumber");
         $('#results').DataTable( {
             ajax: {
                 url: '/api/flights/' + flightNumber
             },
             columns: [
                 { data: 'airline' },
                 { data: 'flightNumber' },
                 { data: 'flightDate' },
                 { data: 'illnessList' },
                 { data: 'status' }
             ]
         } );
      }
  });



