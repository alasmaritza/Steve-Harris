(function () {
    'use strict';
    angular
        .module('workingTitle')
        .controller('interviewController', interviewController);

    interviewController.$inject = ['$scope', '$http', 'lyricFactory'];

    function interviewController($scope, $http, lyricFactory) {
        var vm = this;

        lyricFactory.getInterview().then(displayInterview);


        function displayInterview(data) {
            vm.data = data.data[0]

        }
    }

})();