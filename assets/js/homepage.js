var mountainLocations = "https://raw.githubusercontent.com/bobbymarko/powderlines-api/master/config/stations.yml"
var testJSON = "https://api.allorigins.win/raw?url=http://api.powderlin.es/stations"
var stationTriplet = `https://api.allorigins.win/get?url=http://api.powderlin.es/station/791:WA:SNTL?days=1`
var stationLocation = "https://api.allorigins.win/get?url=http://api.powderlin.es/closest_stations?lat=47.3974&lng=-121.3958&data=true&days=1&count=1"
var searchForMountain = document.querySelector('.searchForMountain');
var searchBtn = document.querySelector('.mountainSearchButton')


var nameArray = []
var locationArray = []
var stationArray = []


fetch(stationTriplet)
.then(function(response){
    response.json().then(function(data){
        const {contents} = data
        console.log(contents) 
        let myString = JSON.stringify(contents)
        console.log(myString)     

    })
})

fetch(testJSON)
.then(res => res.text())
.then(data => {
    var data = JSON.parse(data)
    console.log(data)

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

var formSubmitHandler = function(event) {
    event.preventDefault();
    //Get Value from input element
    var name = searchForMountain.value.trim();

    if (name){
        nameArray.includes(name)
        console.log("statement is true")
    }

    else {
        alert("please enter a valid snow total station.")
    }
}

    searchBtn.addEventListener("click", formSubmitHandler)




