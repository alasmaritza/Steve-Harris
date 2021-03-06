(function () {
    'use strict';
    angular
        .module('workingTitle')
        .controller('strangeController', strangeController);

    strangeController.$inject = ['$scope', '$http', 'interviewFactory'];

    function strangeController($scope, $http, interviewFactory) {
        var vm = this;
        vm.display = display;

        interviewFactory.getLyric().then(display)

        function display(data) {
            vm.title = data.data[1].Title;
            vm.lyric = data.data[1].Lyric;

            // var song = JSON.stringify(lyric)
            //var song1 = song.replace(/\./g, "<br><br>");

            // $('.song').append(song);

        }

    }
})();