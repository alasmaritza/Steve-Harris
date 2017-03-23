(function () {
    'use strict';
    angular
        .module('workingTitle')
        .factory('lyricFactory', lyricFactory)

    lyricFactory.$inject = ['$http'];

    function lyricFactory($http) {
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