var API_key = "9d2aad168dfc4edd8d490546201910";       
// graph implimentation
$(document).ready(function () {


    var forecastData = [];
    
    console.log("hey")
    $.ajax({
        method: 'GET',
        dataType: 'json',
        url: "http://api.weatherapi.com/v1/forecast.json?key=" + window.API_key + "&q=London&days=3",
        success: (data) => {
            // console.log(data)
            var temp = [['DATE', 'max-temp', 'min-temp']]
            var tem2 = data.forecast.forecastday.map((d) => {
                return [d.date, d.day.maxtemp_c, d.day.mintemp_c]
            })
            forecastData = temp.concat(tem2)
        
            console.log(forecastData);
        },
        error: ((e) => {
            console.log(e);
        })
    })



    // google.charts.load('current', { 'packages': ['bar'] });
    // google.charts.setOnLoadCallback(drawChart);

    google.charts.load('current', {packages: ['corechart', 'line']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        var data = google.visualization.arrayToDataTable(forecastData);

        var options = {
            chart: {
                title: 'Temparure Forcast',
                subtitle: 'Temparature forcast from the',
            }
        };


        var chart = new google.visualization.LineChart(document.getElementById('columnchart_material'));
        chart.draw(data, options);
      }
    })
      
    //     var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

    //     chart.draw(data, google.charts.Bar.convertOptions(options));
    // }

    // ------------------------------------ Mumbai-----------------
var API_key = "9d2aad168dfc4edd8d490546201910";       
// graph implimentation
$(document).ready(function () {
    var forecastData1 = [];
    
    console.log("hey")
    $.ajax({
        method: 'GET',
        dataType: 'json',
        url: "http://api.weatherapi.com/v1/forecast.json?key=" + window.API_key + "&q=Mumbai&days=3",
        success: (data) => {
            // console.log(data)
            var temp = [['DATE', 'max-temp', 'min-temp']]
            var tem2 = data.forecast.forecastday.map((d) => {
                return [d.date, d.day.maxtemp_c, d.day.mintemp_c]
            })
            forecastData1 = temp.concat(tem2)
        
            console.log(forecastData1);
        },
        error: ((e) => {
            console.log(e);
        })
    })



    // google.charts.load('current', { 'packages': ['bar'] });
    // google.charts.setOnLoadCallback(drawChart);

    google.charts.load('current', {packages: ['corechart', 'line']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        var data1 = google.visualization.arrayToDataTable(forecastData1);

        var options = {
            chart: {
                title: 'Temparure Forcast',
                subtitle: 'Temparature forcast from the',
            }
        };


        var chart = new google.visualization.LineChart(document.getElementById('columnchart_material2'));
        chart.draw(data1, options);
      }
      
    //     var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

    //     chart.draw(data, google.charts.Bar.convertOptions(options));
    // }



})


///////  Tokyo chart

var API_key = "9d2aad168dfc4edd8d490546201910";       
// graph implimentation
$(document).ready(function () {
    var forecastData3 = [];
    
    console.log("hey")
    $.ajax({
        method: 'GET',
        dataType: 'json',
        url: "http://api.weatherapi.com/v1/forecast.json?key=" + window.API_key + "&q=Tokyo&days=3",
        success: (data) => {
            // console.log(data)
            var temp = [['DATE', 'max-temp', 'min-temp']]
            var tem2 = data.forecast.forecastday.map((d) => {
                return [d.date, d.day.maxtemp_c, d.day.mintemp_c]
            })
            forecastData3 = temp.concat(tem2)
        
            console.log(forecastData3);
        },
        error: ((e) => {
            console.log(e);
        })
    })



    // google.charts.load('current', { 'packages': ['bar'] });
    // google.charts.setOnLoadCallback(drawChart);

    google.charts.load('current', {packages: ['corechart', 'line']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        var data3 = google.visualization.arrayToDataTable(forecastData3);

        var options = {
            chart: {
                title: 'Temparure Forcast',
                subtitle: 'Temparature forcast from the',
            }
        };


        var chart = new google.visualization.LineChart(document.getElementById('columnchart_material3'));
        chart.draw(data3, options);
      }
      
    //     var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

    //     chart.draw(data, google.charts.Bar.convertOptions(options));
    // }



})


//////////////////  Paris

var API_key = "9d2aad168dfc4edd8d490546201910";       
// graph implimentation
$(document).ready(function () {
    var forecastData4 = [];
    
    console.log("hey")
    $.ajax({
        method: 'GET',
        dataType: 'json',
        url: "http://api.weatherapi.com/v1/forecast.json?key=" + window.API_key + "&q=Paris&days=3",
        success: (data) => {
            // console.log(data)
            var temp = [['DATE', 'max-temp', 'min-temp']]
            var tem2 = data.forecast.forecastday.map((d) => {
                return [d.date, d.day.maxtemp_c, d.day.mintemp_c]
            })
            forecastData4 = temp.concat(tem2)
        
            console.log(forecastData4);
        },
        error: ((e) => {
            console.log(e);
        })
    })



    // google.charts.load('current', { 'packages': ['bar'] });
    // google.charts.setOnLoadCallback(drawChart);

    google.charts.load('current', {packages: ['corechart', 'line']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        var data4 = google.visualization.arrayToDataTable(forecastData4);

        var options = {
            chart: {
                title: 'Temparure Forcast',
                subtitle: 'Temparature forcast from the',
            }
        };


        var chart = new google.visualization.LineChart(document.getElementById('columnchart_material4'));
        chart.draw(data4, options);
      }
      
    //     var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

    //     chart.draw(data, google.charts.Bar.convertOptions(options));
    // }



})

