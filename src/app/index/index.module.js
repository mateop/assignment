(function () {
    'use strict';

    angular.module('app.index', [])
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