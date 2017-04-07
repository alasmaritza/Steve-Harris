(function () {
    'use strict';
    angular
        .module('workingTitle')
        .factory('interviewFactory', interviewFactory)

    interviewFactory.$inject = ['$http'];

    function interviewFactory($http) {
        var apiPrefix = 'http://58d2f974ec4a311200a26c74.mockapi.io/ironMaiden/';
        var service = {
            getLyric: getLyric,
            getInterview: getInterview
        }

        return service

        function getLyric() {
            return $http.get(apiPrefix + 'StrangeWorld');
        }

        function getInterview() {
            return $http.get(apiPrefix + 'Interview');
        }
    }
})();