//Code for map and fetch

// function getMountainData() {
//     var response = fetch("http://api.powderlin.es/stations");
//     console.log(response)
// }

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 41.43, lng: -101.01},
        zoom: 4
})
}

initMap()

new Vue({
    el: '#app',
    data: {
        showNav: false
    }
  });
