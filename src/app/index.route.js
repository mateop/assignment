(function () {
    'use strict';

    angular
        .module('assignment')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($urlRouterProvider) {

        $urlRouterProvider.otherwise('/');
    }

})();
