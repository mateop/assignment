(function () {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'ngMaterial',
            'ngMessages',
            'app.create',
            'app.index',
            'app.core'
        ]);

})();
