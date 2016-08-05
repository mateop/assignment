(function () {
    'use strict';

    angular.module('assignment.create').controller('SuccessController', successController);

    function successController($state, $stateParams) {
        if (!$stateParams.creationComplete) {
            $state.go('create');
        }
    }
})();