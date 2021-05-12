var coords = [29.4241, -98.4936]; /* use getLng/lat then .toArray later for pin drop*/
function getWeather() {
    $.ajax('https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=' + coords[0] + '&lon=' + coords[1] + '&exclude=current,hourly,minutely&appid=' + WEATHER_MAP_TOKEN)
        .done(function (resp) {

            // console.log(resp);

            // Takes in the index for response daily object and returns the chance of rain for that index/day
            function chanceOfRain(index) {
                var rainChanceDecimal = resp.daily[index].pop;
                var rainChancePercentage = Math.round(rainChanceDecimal * 100) + '% Chance of precipitation';
                return rainChancePercentage;
            }
            // Takes in the index for response daily object and returns the humidity level for that index/day
            function humidityLevel(index) {
                var humidity = 'Humidity: ' + resp.daily[index].humidity + '%';
                return humidity;
            }
            // Takes in the index for response daily object and returns the weather description for that index/day
            function weatherDescription(index) {
                var description = resp.daily[index].weather[0].description;
                return description;
            }
            // Takes in the index for response daily object and returns the date for that index/day
            function dailyDate(index) {
                var today = resp.daily[index];
                var todayDate = new Date(today.dt * 1000).toString();
                todayDate = todayDate.split(' ');
                var date = [todayDate[0], todayDate[1], todayDate[2]].join(' ');
                return date;
            }
            // Takes in the index for response daily object and returns the weather icon for that index/day
            function weatherIcon(index) {
                var img = resp.daily[index].weather[0].icon;
                var imgSrc = '<img src="http://openweathermap.org/img/w/'+ img +'.png">'
                return imgSrc;
            }
            // Takes in the index for response daily object and returns the high and low temperatures for that index/day
            function highAndLowTemp(index) {
                var highTemp = Math.round(resp.daily[index].temp.max);
                var lowTemp = Math.round(resp.daily[index].temp.min);
                var highAndLowTemps = highTemp + `\xB0F / ` + lowTemp + '\xB0F';
                return highAndLowTemps;
            }
            /// This creates the on page html for weather display and adds the weather info to it
            $('#weather-container').html('');
            for (var i = 1; i <= daysOfWeather; ++i) {
                $('#weather-container').append('<div id="day-' + i + '" class="weather-daily"></div>')
                $('#day-' + i + '').html(dailyDate(i) + '<br>' + weatherIcon(i) + '<br>' + highAndLowTemp(i) + '<br>' + chanceOfRain(i) + '<br>' + weatherDescription(i) + '<br>' + humidityLevel(i));
            }
        });
};
getWeather();

var daysOfWeather = 5;

$('#select-options').change(function (){
    var selectVal = $('#select-options').val();
    // console.log(selectVal);
    daysOfWeather = selectVal;
    getWeather();
});

///// map box stuff
mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/satellite-streets-v11', // style URL
    center: [-98.49272, 29.42527], // starting position [lng, lat]
    zoom: 8.7 // starting zoom
});

var latLngObj = {};

var popup = new mapboxgl.Popup()
    .setHTML("<h3>San Antonio, Texas, United States</h3>")
    .setMaxWidth("300px");

var marker = new mapboxgl.Marker()
    .setLngLat([-98.49272, 29.42527])
    .setDraggable(true)
    .setPopup(popup)
    .addTo(map);

marker.on('dragend', function (){
    coords = marker.getLngLat().toArray().reverse();
    getWeather();
    updateMarkerPopUpInfo();
});

function updateMarkerPopUpInfo() {
    var lngLat = marker.getLngLat();
    latLngObj = {lat: lngLat.lat, lng: lngLat.lng};
    reverseGeocode(latLngObj, MAPBOX_ACCESS_TOKEN).then(function (results) {
        var arr = results.features;
        var place = arr.find(x => x.id.includes('place') === true);
        marker._popup._content.innerHTML = '<h3>' + place.place_name + '</h3>';
        // console.log(results);
    })
}

var textInput = '';
$('button').click(function (){
    textInput = $('#text-input').val();
    console.log(textInput);
    moveMarkerToSearched();
})

function moveMarkerToSearched() {
    geocode(textInput, MAPBOX_ACCESS_TOKEN).then(function (results){
        marker.setLngLat(results);
        // console.log(results);
        coords = marker.getLngLat().toArray().reverse();
        updateMarkerPopUpInfo();
        getWeather();
        map.flyTo({
            center: results,
            zoom: 8.7,
            speed: 0.5
        });
    });
}