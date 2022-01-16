# First Lines

Welcome to First-lines, our application allows users to plan their perfect backcountry ski or snowboarding tour.

## Purpose 
Users are able to analyze snow telemetry data alongside local weather reports to find the most favorable conditions.

## Built With
Bulma.io
GoogleAPI
Powderli.es API
OpenWeather API

## Website
https://shub-z.github.io/ski-vacation/

## Contributions
Made by Sean Mckeag, Zachary Steuer, Shahbaaz Mustaafa, and Islam Muhamaad

## @2022 UCONN Coding BootCamp

In the image below, it shows how the google maps API communicates with the powderlin.es API to display where all of the weather telemetry stations are located. We have been dealing with bugs which dispable the presence of the markers on the map. We saw an error message in the console where google is not defined in the homepage.js file on line 39. Although the error sometimes jumps to line 19. If we had more time, we would sort through this error and enable users to click on individual markers saving the location to their saved mountains list. 

![Ski Vacation Homepage Functional](https://user-images.githubusercontent.com/93566950/149642946-9cfad7a0-a14a-4e49-8c90-f266099ca67c.png)

Below we show how users are able to enter weather station names into the search bar to find data on their favorite mountain. We had an issue sorting the names by index number by which not enabling us to grab the location data and send the user to the view your mountain page. 

![Home Page Local Storage](https://user-images.githubusercontent.com/93566950/149642953-44794e97-0b47-451f-8657-aa5685a973c8.png)

Below is the view your mountains page, we had difficulty retrieving the cordinates for indivual mountains from the Powderlin.es API. Because we could not get this data from the homepage due to map errors, we could not send the location data to retrieve snow depth and a 5 day forecast. 

![View your mountain page](https://user-images.githubusercontent.com/93566950/149643051-6efe7340-df3a-4ef7-92e2-363e0e98c5ca.png)

