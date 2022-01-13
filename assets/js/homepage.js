var mountainLocations = "https://raw.githubusercontent.com/bobbymarko/powderlines-api/master/config/stations.yml"
var testJSON = "https://api.allorigins.win/raw?url=http://api.powderlin.es/stations"

var nameArray = []
var locationArray = []

fetch(testJSON)
.then(res => res.text())
.then(data => {
    var data = JSON.parse(data)

// .then(data => console.log(data))
for (var i = 0; i < data.length; i++) {
    nameArray.push(data[i].name);
    locationArray.push(data[i].location);
}
})
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 41.43, lng: -101.01},
        zoom: 4
    })
    for (var i = 0; i < nameArray.length; i++) {
    new google.maps.Marker({
        position: locationArray[i],
        map: map,
        title: nameArray[i],
    })
    }
}

initMap()
