(function () {
    'use strict';
    angular
        .module('workingTitle')
        .controller('interviewController', interviewController);

    interviewController.$inject = ['$scope', '$http', 'interviewFactory'];

    function interviewController($scope, $http, interviewFactory) {
        var vm = this;
        $scope.interview = [{
            'year': '1981',
            'name': 'Guitare Magazine'
        }, {
            'year': '1985',
            'name': 'Enfer Magazine'
        }, {
            'year': '1988',
            'name': 'Guitar World'
        }, {
            'year': '1992',
            'name': 'Kerrang'
        }, {
            'year': '2016',
            'name': 'Blabbermouth'
        }];
        $scope.change = change;
        $scope.id = [];
        vm.data;
        vm.displayInterview = displayInterview;

        interviewFactory.getInterview().then(displayInterview);

        function change(date) {
            $scope.id.push(date.year);
            if ($scope.id[1] == "2016") {
                $scope.display = vm.data[0];
                $scope.id.pop();
            } else if ($scope.id[1] == "1985") {
                $scope.display = vm.data[1];
                $scope.id.pop();
            } else if ($scope.id[1] == "1981") {
                $scope.display = vm.data[2];
                $scope.id.pop();
            } else if ($scope.id[1] == "1988") {
                $scope.display = vm.data[3];
                $scope.id.pop();
            } else if ($scope.id[1] == "1992") {
                $scope.display = vm.data[4];
                $scope.id.pop();
            }

        }

        function displayInterview(data) {
            vm.data = data.data;
            change(vm.data);
        }

    }

})();