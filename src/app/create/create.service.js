(function () {
    'use strict';

    angular.module('assignment.create').factory('createService', createService);

    /** @ngInject */
    function createService(localStorage) {
        var factory = {
            push: push,
            loadTemp: loadTemp,
            saveTemp: saveTemp
        };

        function push(item) {
            var list = localStorage.getItem('list');
            if (!list) {
                list = [];
            }
            list.push(item);
            localStorage.setItem('list', list);
            localStorage.setItem('tmp', false);
        }

        function loadTemp() {
            return localStorage.getItem('tmp');
        }

        function saveTemp(data) {
            localStorage.setItem('tmp', data);
        }

        return factory;

    }
})();