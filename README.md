# Flight Tracker: A React application with a laravel backend API and a flight aviation API
![image](https://user-images.githubusercontent.com/71829303/109136374-b7412e00-7760-11eb-956b-8f868f5f3692.png)

# Description:
This a Projects that contains two API's the first is laravel itself recieving requests and the second is an online flight aviation API that returns flight details based on the provided flight number.

# How does it work?
- Laravel is deployed on a "000 web hosting" server, the backend has one (GET) Route that receives the flight number as a parameter and sends it to a free flight aviation API check (https://aviationstack.com/documentation).
- React uses axios to manipulate the HTTP requests, it sends a get request to (https://adamfirsthost.000webhostapp.com/api/getFlightDetails/tk813) with the user's input.
- Laravel receives the request and hits the flight aviation API.
- Laravel then sends a response with the retrieved flight data.
- React stores the data from the response in state and renders the data or returns an error message to the user.

# How to download it and run ?
1. Clone GitHub repository **"git clone https://github.com/adamabusamra/flight_tracker_Laravel-react_API.git** OR Download the compressed file.
2. React is hosted on a netlify server at https://zen-edison-9cf595.netlify.app/
3. laravel is hosted online at (https://adamfirsthost.000webhostapp.com)
4. If you want to run React localy use **"npm install"** in the (client) directory to download the node_modules folder and other important files.
5. If you want to run laravel localy use **"composer install"** in the (backend_API) directory to download the vendor folder and other important files.

# My local enviroment details:
- Laravel Framework: Version "7.*"
- OS: Windows 10
- PHP: Version "7.4.12", Zend Engine v3.4.0
- Database: No database required.

## I appreciate any feedback and any questions are welcome contact me at adamabusamra@gmail.com
