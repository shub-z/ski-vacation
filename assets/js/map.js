function initMap() {
    
    const bearRiverResort = {lat: 30.8852, lng: -110.8277}
    const beaverCreek = {lat: 39.60498, lng: -106.51645}
    

    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 41.43, lng: -101.01},
        zoom: 4
})

new google.maps.Marker({
position: bearRiverResort,
map,
title: "Bear River"
});

new google.maps.Marker({
    position: beaverCreek,
    map,
    title: "Beaver Creek",
  });

}

initMap()
