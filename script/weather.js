$(document).ready(function()
{
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://api.weatherapi.com/v1/current.json?key=9d2aad168dfc4edd8d490546201910&q=Pune" ,

        success: function (res) {
            console.log("showing GET data")
            let cities = []
            let loop = false
            $.each(res, function (i, record) {
                
                if (loop == false) {
                    cities = cities +
                        `
                    <div>
                    <p>${res.location.name},,${res.location.country}</p>
                    <p id="c" style="cursor:pointer">${res.current.temp_c}&#176 C</p>
                    <p id="f" style="cursor:pointer;display:none">${res.current.temp_f}&#176 F</p>
                    <p>Humidity ${res.current.humidity}</p>
                    <p>Cloud ${res.current.cloud}</p>
                    <p><img src="${res.current.condition.icon}"></p>  
                    </div>
                
                   
                    
                    
                    
                `}
                loop = true
            }

            )

          
            $("#forth").append(cities)
        }
})
$("#forth").delegate("#c","click",function()
{
    
    $("#c").hide();
    $("#f").show();
})


$("#forth").delegate("#f","click",function()
{
 
    $("#f").hide();
    $("#c").show();
})  
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://api.weatherapi.com/v1/current.json?key=9d2aad168dfc4edd8d490546201910&q=chennai" ,

        success: function (res) {
            console.log("showing GET data")
            let cities = []
            let loop = false
            $.each(res, function (i, record) {
                
                if (loop == false) {
                    cities = cities +
                        `
                    <div>
                    <p>${res.location.name},,${res.location.country}</p>
                    <p id="c" style="cursor:pointer">${res.current.temp_c}&#176 C</p>
                    <p id="f" style="cursor:pointer;display:none">${res.current.temp_f}&#176 F</p>
                    <p>Humidity ${res.current.humidity}</p>
                    <p>Cloud ${res.current.cloud}</p>
                    <p><img src="${res.current.condition.icon}"></p>  
                    </div>
                
                   
                    
                    
                    
                `}
                loop = true
            }

            )

          
            $("#third").append(cities)
        }
})
$("#third").delegate("#c","click",function()
{
    
    $("#c").hide();
    $("#f").show();
})


$("#third").delegate("#f","click",function()
{
 
    $("#f").hide();
    $("#c").show();
})
    // --------------------------------------------------------------------------------
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://api.weatherapi.com/v1/current.json?key=9d2aad168dfc4edd8d490546201910&q=Kolkata" ,

        success: function (res) {
            console.log("showing GET data")
            let cities = []
            let loop = false
            $.each(res, function (i, record) {
                
                if (loop == false) {
                    cities = cities +
                        `
                    <div>
                    <p>${res.location.name},${res.location.country}</p>
                    <p id="c" style="cursor:pointer">${res.current.temp_c}&#176 C</p>
                    <p id="f" style="cursor:pointer;display:none">${res.current.temp_f}&#176 F</p>
                    <p>Humidity ${res.current.humidity}</p>
                    <p>Cloud ${res.current.cloud}</p>
                    <p><img src="${res.current.condition.icon}"></p>  
                    </div>
                
                   
                    
                    
                    
                `}
                loop = true
            }

            )

          
            $("#second").append(cities)
        }
})
$("#second").delegate("#c","click",function()
{
    
    $("#c").hide();
    $("#f").show();
})


$("#second").delegate("#f","click",function()
{
 
    $("#f").hide();
    $("#c").show();
})
    // ------------------------------------------------------------------------------
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://api.weatherapi.com/v1/current.json?key=9d2aad168dfc4edd8d490546201910&q=mumbai" ,

        success: function (res) {
            console.log("showing GET data")
            let cities = []
            let loop = false
            $.each(res, function (i, record) {
                
                if (loop == false) {
                    cities = cities +
                        `
                    <div>
                    <p id="namesinpara">${res.location.name} , ${res.location.region}</p>
                    <p id="c" style="cursor:pointer">${res.current.temp_c}&#176 C</p>
                    <p id="f" style="cursor:pointer;display:none">${res.current.temp_f}&#176 F</p>
                    <p>Humidity ${res.current.humidity}</p>
                    <p>Cloud ${res.current.cloud}</p>
                     <p><img src="${res.current.condition.icon}"></p>       
                    </div>
                
                   
                    
                    
                    
                `}
                loop = true
            }

            )

          
            $("#first").append(cities)
        }
})


})





// <p>Location = ${res.location.name},${res.location.region},${res.location.country}</p>
// <p>Temperature=${res.current.temp_c}</p>
// <p>Humidity=${res.current.humidity}</p>
// <p>Cloud=${res.current.cloud}</p>