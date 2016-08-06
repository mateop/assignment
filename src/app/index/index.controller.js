(function () {
    'use strict';

    angular.module('app.index').controller('IndexController', indexCtrl);

    /** @ngInjecct */
    function indexCtrl(localStorage) {
        var vm = this;
        vm.list = [];

        activate();

        function activate() {
            vm.list = localStorage.getItem('list');
        }
    }
})();