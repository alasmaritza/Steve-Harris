(function () {
    'use strict';
    angular
        .module('workingTitle')
        .config(config)

    function config($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/Home');

        $stateProvider
            .state('Home', {
                url: '/Home',
                templateUrl: 'Home.html',
                controller: 'workingController',
                title: '\'Arry | Home'
            })
            .state('Interview', {
                url: '/Steve-Interview',
                templateUrl: 'Interview.html',
                controller: 'interviewController as inter',
                title: '\'Arry | Steve Harris Interviews'
            })
            .state('Strange', {
                url: '/Strange-World',
                templateUrl: 'StrangeWorld.html',
                controller: 'strangeController as strange',
                title: '\'Arry | Mission from \'Arry'
            })
    }

})();