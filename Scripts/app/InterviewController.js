(function () {
    'use strict';
    angular
        .module('workingTitle')
        .controller('interviewController', interviewController);

    interviewController.$inject = ['$scope', '$http', 'interviewFactory'];

    function interviewController($scope, $http, interviewFactory) {
        var vm = this;
        $scope.change = change;
        $scope.id = [];
        vm.data;
        vm.displayInterview = displayInterview;

        interviewFactory.getInterview().then(displayInterview);

        function change(date) {
            $scope.display = date;
        }

        function displayInterview(data) {
            vm.data = data.data;

        }

    }

})();