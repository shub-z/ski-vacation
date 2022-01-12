var mountainLocations = "https://raw.githubusercontent.com/bobbymarko/powderlines-api/master/config/stations.yml"

var getMountainRepo= function() {
fetch(mountainLocations).then(function(response){
response.text().then(function(data){
    console.log(data);
});
});
};

getMountainRepo()