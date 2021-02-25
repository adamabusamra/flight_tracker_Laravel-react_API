# Flight Tracker: A React application with a laravel backend API and a flight aviation API
![image](https://user-images.githubusercontent.com/71829303/109085457-61de3000-7712-11eb-9cb3-0c47ab1529a4.png)

# Description:
This a Projects that contains two API's the first is laravel itself recieving requests and the second is an online flight aviation API that returns flight details based on the provided flight number.

## How does it work?
- Laravel is deployed on a "000 web hosting" server, the backend has one (GET) Route that receives the flight number as a parameter and sends it to a free flight aviation API check (https://aviationstack.com/documentation).
- React uses axios to manipulate the HTTP requests, it sends a get request to (https://adamfirsthost.000webhostapp.com/api/getFlightDetails/ [USER INPUT]) with the user's input.
- Laravel receives the request and hits the flight aviation API.
- Laravel then sends a response with the retrieved flight data.
- React stores the data from the response in state and renders the data or returns an error message to the user.
