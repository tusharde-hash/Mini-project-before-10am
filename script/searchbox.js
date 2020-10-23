// GET and search filter
$(document).ready(function () {
    
    $("#mysearchbutton").click(function () {
      
        let searchkey = $("#mysearch").val().toLowerCase();
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "http://api.weatherapi.com/v1/current.json?key=9d2aad168dfc4edd8d490546201910&q=" + searchkey,

            success: function (res) {
                console.log("showing GET data from search boxx")
                let cities = []
                let loop = false
                $.each(res, function (i, record) {
                    
                    if (loop == false) { 
                        cities = cities +
                            `
                       
                       
                        <div class="text-center mt-3" id="scard">
                            <p>${res.location.name},${res.location.region},${res.location.country}</p>
                            <p id="a" style="cursor:pointer">${res.current.temp_c}&#176 C</p>
                            <p id="b" style="cursor:pointer;display:none">${res.current.temp_f}&#176 F</p>
                            <p>Humidity ${res.current.humidity}</p>
                            <p>Cloud ${res.current.cloud}</p>
                            <p><img src="${res.current.condition.icon}"></p>  
                        </div>
                        
                        
      
                       
                    
                      
                        
                    `}
                    loop = true
                }

                )

                $(".searchcontainer").empty()
                $(".searchcontainer").append(cities)
               
               
            }
        });
    })
    $(".searchcontainer").delegate("#a","click",function()
    {
        
        $("#a").hide();
        $("#b").show();
    })

    
    $(".searchcontainer").delegate("#b","click",function()
    {
     
        $("#b").hide();
        $("#a").show();
    })
    
});


//   new changes


// GET and search filter
// $(document).ready(function () {
    
//     $("#mysearchbutton").click(function () {
//         var forecastData = [];
//         let searchkey = $("#mysearch").val().toLowerCase();
//         $.ajax({
//             type: "GET",
//             dataType: "json",
//             url: "http://api.weatherapi.com/v1/current.json?key=9d2aad168dfc4edd8d490546201910&q=" + searchkey,

//             success: function (res) {
//                 console.log("showing GET data from search boxx")
//                 let cities = []
//                 let loop = false
//                 $.each(res, function (i, record) {
                    
//                     if (loop == false) { 
//                         cities = cities +
//                             `
                       
                       
//                         <div class="text-center mt-3" id="scard">
//                             <p>${res.location.name},${res.location.region},${res.location.country}</p>
//                             <p id="a" style="cursor:pointer">${res.current.temp_c}&#176 C</p>
//                             <p id="b" style="cursor:pointer;display:none">${res.current.temp_f}&#176 F</p>
//                             <p>Humidity ${res.current.humidity}</p>
//                             <p>Cloud ${res.current.cloud}</p>
//                             <p><img src="${res.current.condition.icon}"></p>  
//                         </div>
                        
                        
      
                       
                    
                      
                        
//                     `}
//                     loop = true
//                 }

//                 )

//                 $(".searchcontainer").empty()
//                 $(".searchcontainer").append(cities)
               
               
//             }
//         });
//         $.ajax({
//             method: 'GET',
//             dataType: 'json',
//             url: "http://api.weatherapi.com/v1/forecast.json?key=" + window.API_key + "&q="+searchkey+"&days=3",
//             success: (data) => {
//                 // console.log(data)
//                 var temp = [['DATE', 'max-temp', 'min-temp']]
//                 var tem2 = data.forecast.forecastday.map((d) => {
//                     return [d.date, d.day.maxtemp_c, d.day.mintemp_c]
//                 })
//                 forecastData = temp.concat(tem2)
            
//                 console.log(forecastData);
//             },
//             error: ((e) => {
//                 console.log(e);
//             })
//         })
//         google.charts.load('current', {packages: ['corechart', 'line']});
//         google.charts.setOnLoadCallback(drawChart);
    
//         function drawChart() {
    
//             var data = google.visualization.arrayToDataTable(forecastData);
    
//             var options = {
//                 chart: {
//                     title: 'Temparure Forcast',
//                     subtitle: 'Temparature forcast from the',
//                 }
//             };
    
    
//             var chart = new google.visualization.LineChart(document.getElementById('columnchart_material5'));
//             chart.draw(data, options);
//           }
    
//     })
//     $(".searchcontainer").delegate("#a","click",function()
//     {
        
//         $("#a").hide();
//         $("#b").show();
//     })

    
//     $(".searchcontainer").delegate("#b","click",function()
//     {
     
//         $("#b").hide();
//         $("#a").show();
//     })
    
// });


