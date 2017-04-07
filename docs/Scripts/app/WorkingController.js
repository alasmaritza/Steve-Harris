(function () {
    'use strict';
    angular
        .module('workingTitle')
        .controller('workingController', workingController)

    workingController.$inject = ['$scope', '$http', 'interviewFactory'];

    function workingController($scope, $http, interviewFactory) {
        var vm = this;

    }

})();