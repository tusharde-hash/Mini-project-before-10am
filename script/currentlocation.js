
//get ur current location

// var x = document.getElementById("demo");
// function getLocation() {
//   if (navigator.geolocation) {
// navigator.geolocation.getCurrentPosition();
//   } else {
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// function showPosition(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude +
//   "<br>Longitude: " + position.coords.longitude;
// }

// display weather info 


// $(document).ready(function () {
//     $("#mybtn").click(function () {
//         // let searchkey = $("#mysearch").val().toLowerCase();
//         $.ajax({
//             type: "GET",
//             dataType: "jsonp",
//             url: "https://geolocation-db.com/jsonp/",
//             jsonpCallback: "callback",
//             success: function (location) {
//                 console.log("showing GET data");




//                 $("#demo").html(location.city)








//             }
//         });
//     });

// });


//For Geo location
$(document).ready(function(){
    //variables for lang lat
    var lat;
    var long;
    // $('#loc').click(function(){
        if ("geolocation" in navigator){ //check geolocation available 
            //try to get user current location using getCurrentPosition() method
            navigator.geolocation.getCurrentPosition(function(position){ 
                lat=position.coords.latitude;
                long=position.coords.longitude;    
                
                $.ajax({
                    type: "GET",
                    dataType: "json",
                    url: "http://api.weatherapi.com/v1/current.json?key=a2586110632c4b6ab35123247201610&q=" + lat+','+long,
                    success: function (res) {

                       
                        console.log("showing GET data")
                        let cities = []
                        let loop = false
                        $.each(res, function (i, record) {
                            
                            if (loop == false) {
                                cities = cities +
                                    `
                                <div class="text-center bg-info p-3" id="jum">
                                
              
                                <p>${res.location.name},${res.location.region},${res.location.country}</p>
                                <p id="c" style="cursor:pointer">${res.current.temp_c}&#176 C  <p><img src="${res.current.condition.icon}"></p>  </p>
                                <p id="f" style="cursor:pointer;display:none">${res.current.temp_f}&#176 F <p><img src="${res.current.condition.icon}"></p> </p>

                            
                                <p>Humidity=${res.current.humidity}</p>
                                <p>Cloud=${res.current.cloud}</p>
                                
                                </div>
                                </div>
                                
                            `}
                            loop = true
                        })     
                       
        
                        $(".loccontainer").empty()
                        $(".loccontainer").append(cities)
                    }
                })

                });
        }else{
            console.log("Browser doesn't support geolocation!");
        }
      
       

       

   

    $(".loccontainer").delegate("#c","click",function()
    {
        
        $("#c").hide();
        $("#f").show();
    })

    
    $(".loccontainer").delegate("#f","click",function()
    {
     
        $("#f").hide();
        $("#c").show();
    })
    

    // var forecastData = [];

    // console.log("hey")
    // $.ajax({
    //     method: 'GET',
    //     dataType: 'json',
    //     url: "http://api.weatherapi.com/v1/forecast.json?key=9d2aad168dfc4edd8d490546201910LIVE" +lat+','+long+'&days=2',
    //     success: (data) => {
    //         // console.log(data)
    //         var temp = [['DATE', 'max-temp', 'min-temp']]
    //         var tem2 = data.forecast.forecastday.map((d) => {
    //             return [d.date, d.day.maxtemp_c, d.day.mintemp_c]
    //         })
    //         forecastData = temp.concat(tem2)

    //         console.log(forecastData);
    //     },
    //     error: ((e) => {
    //         console.log(e);
    //     })
    // })



    // // google.charts.load('current', { 'packages': ['bar'] });
    // // google.charts.setOnLoadCallback(drawChart);

    // google.charts.load('current', {packages: ['corechart', 'line']});
    // google.charts.setOnLoadCallback(drawChart);

    // function drawChart() {

    //     var data = google.visualization.arrayToDataTable(forecastData);

    //     var options = {
    //         chart: {
    //             title: 'Temparure Forcast',
    //             subtitle: 'Temparature forcast from the',
    //         }
    //     };


    //     var chart = new google.visualization.LineChart(document.getElementById('columnchart_material'));
    //     chart.draw(data, options);
    //   }

})



