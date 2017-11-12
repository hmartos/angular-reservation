/**
 * Service for reservation management
 * @author hmartos
 */
(function() {
    function reservationService($q, $filter, $uibModal, reservationConfig) {

        //Completed get available dates callback
        this.onCompletedGetAvailableDates = function(status, message) {
            console.log("Executing completed get available dates callback");
        }

        //Success get available dates callback
        this.onSuccessfulGetAvailableDates = function(status, message, availableDates) {
            console.log("Executing successful get available dates callback");
        }

        //Error get available dates callback
        this.onErrorGetAvailableDates = function(status, message) {
            console.log("Executing error get available dates callback");
        }

        //Before get available hours callback
        this.onBeforeGetAvailableHours = function(selectedDate) {
            console.log("Executing before get available hours callback");
            var deferred = $q.defer();

            deferred.resolve();
            //deferred.reject();

            return deferred.promise;
        }

        //Completed get available hours callback
        this.onCompletedGetAvailableHours = function(status, message, selectedDate) {
            console.log("Executing completed get available hours callback");
        }

        //Success get available hours callback
        this.onSuccessfulGetAvailableHours = function(status, message, selectedDate, availableHours) {
            console.log("Executing successful get available hours callback");
        }

        //Error get available hours callback
        this.onErrorGetAvailableHours = function(status, message, selectedDate) {
            console.log("Executing error get available hours callback");
        }

        //Before reserve callback
        this.onBeforeReserve = function(selectedDate, selectedHour, userData) {
            console.log("Executing before reserve callback");
            var deferred = $q.defer();

            if(reservationConfig.showConfirmationModal) {
                openConfirmationModal(deferred, selectedDate, selectedHour, userData);

            } else {
                deferred.resolve();
                //deferred.reject();
            }

            return deferred.promise;
        }


        //Completed reserve callback
        this.onCompletedReserve = function(status, message, selectedDate, selectedHour, userData) {
            console.log("Executing completed reserve callback");
        }

        //Success reserve callback
        this.onSuccessfulReserve = function(status, message, reservedDate, reservedHour, userData) {
            console.log("Executing successful reserve callback");
        }

        //Error reserve callback
        this.onErrorReserve = function(status, message, selectedDate, selectedHour, userData) {
            console.log("Executing error reserve callback");
        }

        /**
         * Opens confirmation modal
         */
        function openConfirmationModal(deferred, selectedDate, selectedHour, userData) {
            var modalInstance = $uibModal.open({
                templateUrl: reservationConfig.confirmationModalTemplate,
                size: 'sm',
                controller: ['selectedDate', 'selectedHour', 'userData', confirmationModalCtrl],
                controllerAs: 'confirmationModalCtrl',
                resolve: {
                    selectedDate: function () {
                        return $filter('date')(selectedDate, reservationConfig.dateFormat);
                    },
                    selectedHour: function () {
                        return selectedHour;
                    },
                    userData: function () {
                        return userData;
                    }
                }
            });

            modalInstance.result.then(function () {
                console.log("Accepted");
                deferred.resolve();

            }, function () {
                console.log("Cancelled");
                deferred.reject();
            })
        }

        /**
         * Controller for confirmation modal
         */
        function confirmationModalCtrl(selectedDate, selectedHour, userData) {
            var vm = this;

            vm.selectedDate = selectedDate;
            vm.selectedHour = selectedHour;
            vm.userData = userData;

            vm.translationParams = {
                name: userData.name,
                selectedDate: selectedDate,
                selectedHour: selectedHour
            }
        }

    }
    angular.module('hm.reservation').service('reservationService', ['$q', '$filter', '$uibModal', 'reservationConfig', reservationService]);
})();