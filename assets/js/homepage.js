var mountainLocations = "https://raw.githubusercontent.com/bobbymarko/powderlines-api/master/config/stations.yml"
var testJSON = "https://api.allorigins.win/raw?url=http://api.powderlin.es/stations"
var octocat = "https://api.github.com/users/octocat"


// var getMountainRepo= function() {
// fetch(testJSON, {mode: "no-cors"})
// .then(function(response){ return response.json(response)})
// .then(function(data){console.log(data)})
// };

// getMountainRepo()

fetch(testJSON)
.then(res => res.text())
.then(data => {
    // var parseData = JSON.parse(data)
    console.log(data)
})
// .then(data => console.log(data))