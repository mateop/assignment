(function () {
    'use strict';

    angular.module('app.create', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider) {
        $stateProvider
            .state('create', {
                url: '/create',
                templateUrl: 'app/create/create.html',
                controller: 'CreateController as vm'
            })
            .state('success', {
                url: '/success',
                templateUrl: 'app/create/success.html',
                controller: 'SuccessController as vm',
                params: {
                    creationComplete: ''
                }
            })
    }
})();