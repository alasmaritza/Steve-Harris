(function () {
    'use strict';
    angular
        .module('workingTitle')
        .controller('strangeController', strangeController);

    strangeController.$inject = ['$scope', '$http', 'lyricFactory'];

    function strangeController($scope, $http, lyricFactory) {
        var vm = this;
        vm.display = display;

        lyricFactory.getLyric().then(display)

        function display(data) {
            vm.title = data.data[0].Title;
            var lyric = data.data[0].Lyric;

            var song = JSON.stringify(lyric)
            var song1 = song.replace(/\./g, "<br><br>");

            $('.song').append(song1);

        }

    }
})();