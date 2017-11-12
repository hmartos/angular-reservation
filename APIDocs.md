REST API SPECIFICATION
===

**Get available dates**
----
  _If the module is configured to load available dates from an API (see the [docs](https://hmartos.github.io/angular-reservation/#!#docs)), 
  this method is called._

* **URL**
  _/availableDates_

* **Method:**
  `GET`
  
*  **URL Params**

   * **No params**

* **Success Response:**
  _Returns an array with available dates, a SUCCESS status and a message. <br/>**IMPORTANT**: Available dates should be in [ISO 8601](https://www.w3.org/TR/NOTE-datetime) 
  format to work with an out of the box install of angular-reservation<br/> 
  You can use status to return a 200 code response with an error and an optional message to explain what has happened._
  * **Code:** 200 <br />
    **Content:** 
```json
{
	"availableDates": [
	  "2017-11-24",
	  "2017-11-27"
	],
	"status": "SUCCESS",
	"message": ""
}
```

**Get available hours for selected date**
----
  _Called on date select, return the list of available hours for selected date._

* **URL**
  _/availableHours_

* **Method:**
  `GET`
  
*  **URL Params**

   * **Required:**
  `selectedDate=[string]`

* **Success Response:**
  _Returns an array with available hours for selected date, a SUCCESS status and a message. <br/> You can use status to return a 200 code response with an error and an optional message to explain what has happened._
  * **Code:** 200 <br />
    **Content:** 
```json
{
	"availableHours": [
	  "10:00",
	  "10.30",
	  "11.30",
	  "12.30",
	  "13.00",
	  "17.00",
	  "17.30",
	  "18.00",
	  "18.30",
	  "19.00"
	],
	"status": "SUCCESS",
	"message": ""
}
```


**Reserve hour for selected date**
----
  _Called on reserve action. Reserve selected hour from list of available hours for selected date passing user data._

* **URL**
  _/reserve_

* **Method:**
  `POST`
  
* **Data Params**
_Include selected date, selected data and user data._
```json
{
	"selectedDate": "2017-03-25",
	"selectedHour": "10:00",
	"userData": {
		"name": "Héctor",
		"phone": "123456789",
		"email": "hector@email.com"
	}
}
```

* **Success Response:**
  _Returns a SUCCESS status and a message. <br/> You can use status to return a 200 code response with an error and an optional message to explain what has happened._
  
  * **Code:** 200 <br />
    **Content:** 
```json
{
  "status": "SUCCESS",
  "message": ""
}
```