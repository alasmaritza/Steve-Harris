(function () {
    'use strict';
    angular
        .module('workingTitle')
        .controller('workingController', workingController)

    workingController.$inject = ['$scope', '$http'];

    function workingController($scope, $http) {
        var vm = this;

        vm.open = open;

        function open() {
            console.log("Working.");
        }

    }

})();