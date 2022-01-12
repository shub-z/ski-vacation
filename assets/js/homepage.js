var mountainLocations = "https://raw.githubusercontent.com/bobbymarko/powderlines-api/master/config/stations.yml"
var testJSON = "https://api.allorigins.win/raw?url=http://api.powderlin.es/stations"

var nameArray = []
var locationArray = []


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
console.log(nameArray)
console.log(locationArray)
})
// var nameArray = []
// var locationArray = []


for (var i = 0; i < data.length; i++) {
    nameArray.push(data[i].name);
    locationArray.push(data[i].location);

    new google.maps.marker({
        position: locationArray[i],
        map,
        title: nameArray[i]
    })
}
console.log(nameArray)
console.log(locationArray)



function initMap() {
    
    
    // const bearRiverResort = {lat: 30.8852, lng: -110.8277}
    // const beaverCreek = {lat: 39.60498, lng: -106.51645}
    

    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 41.43, lng: -101.01},
        zoom: 4
})

for (i = 0; i < nameArray.length; i++)

new google.maps.Marker ({
    position: locationArray[i],
    map,
    title: nameArray[i],
})

// new google.maps.Marker({
// position: bearRiverResort,
// map,
// title: "Bear River"
// });

// new google.maps.Marker({
//     position: beaverCreek,
//     map,
//     title: "Beaver Creek",
//   });

}

initMap()