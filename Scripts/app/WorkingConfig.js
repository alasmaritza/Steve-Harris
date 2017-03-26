(function () {
    'use strict';
    angular
    .module('workingTitle')
    .config(config)
    
function config($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/Home');

    $stateProvider 
    .state ('Home', {
        url: '/Home',
        templateUrl: 'Home.html',
        controller: 'workingController',
        title: 'Working Title | Home'
    })
    .state ('Interview', {
        url: '/Steve-Interview',
        templateUrl: 'Interview.html',
        controller: 'interviewController as inter',
        title: 'Working Title | Steve Harris Interview'
    })
}

})();