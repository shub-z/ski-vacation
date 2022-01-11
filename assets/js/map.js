// var city = Ludlow

// //Code for map and fetch

// var getUserCity = function(city) {
//     //format the URL
//     var apiUrl = "http://api.powderlin.es/stations"
// //make a request to the URL
// fetch(apiUrl).then(function(response) {
//     response.json().then(function(data) {
//         console.log(data);
// });
// });
// };

getMountainData()

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 41.43, lng: -101.01},
        zoom: 4
})
}

initMap()
