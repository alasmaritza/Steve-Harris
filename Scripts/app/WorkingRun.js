(function () {
    'use strict';
    angular
    .module('workingTitle')
    .run(titles);

    titles.$inject = ['$rootScope', '$state'];

    function titles ($rootScope, $state) {
        $rootScope.$on('$stateChangeSuccess', newTitle);

        function newTitle () {
            document.title = $state.current.title
        }
    }

})();