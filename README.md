angular-reservation
======================
[![Build Status](https://travis-ci.org/hmartos/angular-reservation.svg?branch=master)](https://travis-ci.org/hmartos/angular-reservation)

AngularJS configurable module to set up an appointment on a calendar. It can be used to make a reservation in a restaurant, clinic, barber shop, or any kind 
of service provided in time slots.

# [See the DEMO](https://hmartos.github.io/angular-reservation/)

## Requirements

- [AngularJS](https://angularjs.org/)
- [UI Bootstrap](https://github.com/angular-ui/bootstrap)
- [Angular translate](https://github.com/angular-translate/angular-translate)
- [ngMessages](https://github.com/angular/bower-angular-messages)


## How to use it in your existing project

### Install module with bower
Execute `bower install --save angular-reservation`

### Load scripts
Load AngularJS, dependencies script files and the script file angular-reservation.min.js in your index.html.

```html
<!-- Angular reservation dependencies -->
<script type="text/javascript" src="bower_components/angular-bootstrap/ui-bootstrap.min.js"></script>
<script type="text/javascript" src="bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>
<script type="text/javascript" src="bower_components/angular-translate/angular-translate.min.js"></script>
<script src="bower_components/angular-messages/angular-messages.min.js"></script>
<!-- Angular reservation minified -->
<script type="text/javascript" src="bower_components/angular-reservation/dist/angular-reservation.min.js"></script>
```

### Load styles
Load bootstrap css and angular-reservation.min.css in your index.html.

```html
<!-- Compiled and minified Bootstrap CSS -->
<link rel="stylesheet" href="components/bootstrap/bootstrap.min.css">
<!-- Angular reservation minified css -->
<link rel="stylesheet" href="bower_components/angular-reservation/dist/angular-reservation.min.css">
```

### Add module dependency
Add 'hm.reservation' to the list of module dependencies.

```javascript
angular.module('myApp', [
    'hm.reservation'
])
```

### HTML Markup
Add angular-reservation directive in an html page.

```html
<!-- angular-reservation directive -->
<reservation></reservation>
```

### Setup
Configure module.

```javascript
//Minimal configuration of reservation module
angular.module('myApp').config(function (reservationConfigProvider) {
    var config = {
        getAvailableHoursAPIUrl: "http://API-URL/availableHours", //API url endpoint to load list of available hours
        reserveAPIUrl: "http://API-URL/reserve", //API url endpoint to do a reserve
    };

    reservationConfigProvider.set(config);
});
```

# [See the full documentation](https://hmartos.github.io/angular-reservation/#!#docs)


## Build
When there is any change on the sources of this module, you should build the module again to generate dist folder with minified files.
To build the module just use the following command:

`gulp build`

There is also a watch task to watch for any change on sources files and automatically generate dist files. Just use the following command:

`gulp watch`

## Running tests

angular-reservation has in`tegration tests that allows developer to check if new features breaks functionality.
You can run tests on a single run or watch for source code to change and execute tests each time source code changes.

##### Single run test
Execute `npm run test-single-run`

##### Watch for source code and execute tests each time source code changes
Execute `npm run test`
