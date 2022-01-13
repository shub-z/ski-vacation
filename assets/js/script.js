$(document).ready(function () {
    var searchHistory = [];
    const momentDay = moment().format('dddd, MMMM Do');
    $('.todayDate').prepend(momentDay);
    
    for (var i = 1; i < 6; i++) {
        $(`#${i}Date`).text(moment().add(i, 'd').format('dddd, MMMM Do'));
    }
    
    $('form').on('submit', function (event) {
        event.preventDefault();
              let mountain = $('input').val();
        
              if (mountain === '') {
            return;
        }

        call();

        $('form')[0].reset();
    });
  
    const fiveDay = (lon, lat) => {
        let fiveQueryURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=imperial&appid=77cb488591d883bec900753d1136d81c`;
        $.ajax({
            url: fiveQueryURL,
            method: 'GET',
        }).then(function (fiveResponse) {
            
            for (var k = 1; k < 6; k++) {
                
                $(`#${k}img`).attr(
                    'src',
                    `http://openweathermap.org/img/wn/${fiveResponse.daily[k].weather[0].icon}@2x.png`
                );
                
                $(`#${k}temp`).html(
                    `Temp: ${fiveResponse.daily[k].temp.day} &#8457;`
                );
                
            };
        });
    };
    
    var mountainConditions = (lon, lat) => {
        let mountainQueryURL = "http://api.powderlin.es/closest_stations?lat=47.3974&lng=-121.3958&data=true&days=3&count=3"
    }
    var getMountainConditions = function() {
        fetch(mountainQueryURL).then(function(Response){
            Response.text().then(function(data){
                console.log(data);
            });
        });
    
    };
                var lngLat = locationArray;
                var lon = response.coord.lon;
                var lat = response.coord.lat;
                console.log(lngLat)
                $('#fiveDay').text(response.name);
                $('#currentImg').attr(
                    'src',
                    `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`
                );
                $('#tempData').html(`${response.main.temp} &#8457;`);
                $('#humidData').html(`${response.main.humidity}%`);
                $('#windData').html(`${response.wind.speed} mph`);
                $('#windArrow').css({
                    transform: `rotate(${response.wind.deg}deg)`,
                });
                
                uvCall(lon, lat);
        
                fiveDay(lon, lat);
            });
