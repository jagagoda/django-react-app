This is a weather app that uses https://openweathermap.org/ API to display weather data for the city inputted by the user. Django framework is used to retrieve the data from Api. In order to optimize amount of api calls, once downloaded data is stored in local database and updated every three hours.\ 
<i>E.g. if city inputted by the user is already in database and NOT older than 3 hours, App is retreving data locally, if NOT performs new api call.</i> \
App's frontend is developed with React and styled-components. \
P.S. You will find some tabs in the application where there is no data yet, but they can be used as a placeholeder for future developments using different api calls.

# To start the server
Type in the terminal:

### `cd forecastProject`
this is the main app folder

# To run the server
type in the terminal
### `python manage.py runserver`

The server runs on [http://localhost:8000]

# To start the application
Go to the 'frontend' folder, open another terminal and type 

### `npm install`
To install node modules, then type

### `npm start`

The app runs on [http://localhost:3000]

<i>E.g. if city inputted by the user is already in database and NOT older than 3 hours, App is retreving data locally, if NOT performs new api call.
