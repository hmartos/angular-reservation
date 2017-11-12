/**
 * Factory for reservation
 * @author hmartos
 */
(function() {
    function reservationAPIFactory($http, reservationConfig) {

        var reservationAPI = {};

        // Error details
        reservationAPI.status = "";
        reservationAPI.message = "";

        reservationAPI.availableHours = [];
        reservationAPI.availableDates = [];


        //METHODS

        //Call to get list of available dates
        reservationAPI.getAvailableDates = function() {
            return $http({
                method: 'GET',
                url: reservationConfig.getAvailableDatesAPIUrl,
                responseType: 'json'

            }).then(function(response) {
                //Success handler
                console.log(response.data);
                validateAvailableDatesResponseData(response.data);

                reservationAPI.status = response.data.status;
                reservationAPI.message = response.data.message;
                reservationAPI.availableDates = response.data.availableDates;

            }, function(response) {
                reservationAPI.errorManagement(response.status);
            });
        }

        //Call to get list of available hours
        reservationAPI.getAvailableHours = function(params) {
            return $http({
                method: 'GET',
                params: params,
                url: reservationConfig.getAvailableHoursAPIUrl,
                responseType: 'json'

            }).then(function(response) {
                //Success handler
                console.log(response.data);
                validateAvailableHoursResponseData(response.data);

                reservationAPI.status = response.data.status;
                reservationAPI.message = response.data.message;
                reservationAPI.availableHours = response.data.availableHours;

            }, function(response) {
                reservationAPI.errorManagement(response.status);
            });
        }

        //Call to do a reserve
        reservationAPI.reserve = function(params) {
            return $http({
                method: 'POST',
                data: params,
                url: reservationConfig.reserveAPIUrl,
                responseType: 'json'

            }).then(function(response) {
                //Success handler
                console.log(response.data);
                validateReserveResponseData(response.data);
                reservationAPI.status = response.data.status;
                reservationAPI.message = response.data.message;

            }, function(response) {
                reservationAPI.errorManagement(response.status);
            });
        }


        //Error management function, handles different kind of status codes
        reservationAPI.errorManagement = function(status) {
            resetVariables();
            switch (status) {
                case 500: //Server error
                    reservationAPI.status = "SERVER_ERROR";
                    break;
                default: //Other error, typically connection error
                    reservationAPI.status = "CONNECTION_ERROR";
                    break;
            }
        }

        //Reset factory variables when an error occurred
        function resetVariables() {
            reservationAPI.status = "";
            reservationAPI.message = "";
            reservationAPI.availableHours = "";
        }

        //Validate if available dates response has expected keys
        function validateAvailableDatesResponseData(data) {
            if(!data.hasOwnProperty('status')) console.error("Get available hours response should have a 'status' key");
            if(!data.hasOwnProperty('message')) console.error("Get available hours response should have a 'message' key");
            if(!data.hasOwnProperty('availableDates')) console.error("Get available hours response should have a 'availableDates' key");
        }

        //Validate if available hours response has expected keys
        function validateAvailableHoursResponseData(data) {
            if(!data.hasOwnProperty('status')) console.error("Get available hours response should have a 'status' key");
            if(!data.hasOwnProperty('message')) console.error("Get available hours response should have a 'message' key");
            if(!data.hasOwnProperty('availableHours')) console.error("Get available hours response should have a 'availableHours' key");
        }

        //Validate if reserve response has expected keys
        function validateReserveResponseData(data) {
            if(!data.hasOwnProperty('status')) console.error("Reserve response should have a 'status' key");
            if(!data.hasOwnProperty('message')) console.error("Reserve response should have a 'message' key");
        }


        return reservationAPI;
    }
    angular.module('hm.reservation').factory('reservationAPIFactory', ['$http', 'reservationConfig', reservationAPIFactory]);
})();