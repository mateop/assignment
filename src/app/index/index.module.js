(function () {
    'use strict';

    angular.module('assignment.index', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'app/index/index.html',
                controller: 'IndexController as vm'
            })
    }
})();