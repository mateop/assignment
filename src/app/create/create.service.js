(function () {
    'use strict';

    angular.module('app.create').factory('createService', createService);

    /** @ngInject */
    function createService(localStorage, $q, $timeout) {
        var factory = {
            push: push,
            loadTemp: loadTemp,
            saveTemp: saveTemp,
            fetchMakers: fetchMakers
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

        function fetchMakers() {
            var fetchMakersPromise = $q.defer();

            /* simulate http request */
            $timeout(function () {
                var makers = ['Honda', 'Mercedes', 'Mazda', 'BMW', 'Toyota', 'Fiat'];
                return fetchMakersPromise.resolve(makers);
            }, 200);

            return fetchMakersPromise.promise;
        }

        return factory;

    }
})();