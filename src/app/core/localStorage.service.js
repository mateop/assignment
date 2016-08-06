(function () {
    'use strict';

    angular.module('app.core').factory('localStorage', localStorage);

    /** @ngInject */
    function localStorage($window) {
        var factory = {
            setItem: setItem,
            getItem: getItem,
            clear: clear
        };

        function setItem(key, value) {

            $window.localStorage.setItem(key, angular.toJson(value))
            return true;
        }

        function getItem(key) {
            var value = $window.localStorage.getItem(key);

            return angular.fromJson(value) || false;
        }

        function clear() {
            $window.localStorage.clear();
        }

        return factory;
    }
})();