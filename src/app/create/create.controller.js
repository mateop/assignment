(function () {
    'use strict';

    angular.module('app.create').controller('CreateController', createController);

    /** @ngInjecct */
    function createController(createService, $state, $scope) {
        var vm = this;
        vm.userInput = {};
        vm.userInput.user = {};
        vm.userInput.car = {};
        vm.userInput.cc = {};
        vm.step = 0;

        vm.nextStep = nextStep;
        vm.previousStep = previousStep;
        vm.submit = submit;

        var inputWatcher;


        activate();

        function activate() {
            loadStoredData();
            registerInputWatcher();
        }

        function loadStoredData() {
            var tmp = createService.loadTemp();
            if (tmp) {
                vm.step = tmp.step;
                vm.userInput = tmp.userInput;
            }
        }

        function registerInputWatcher() {
            inputWatcher = $scope.$watch('vm.userInput', function () {
                createService.saveTemp({
                    userInput: vm.userInput,
                    step: vm.step
                });
            }, true);
        }

        function submit() {
            createService.push(vm.userInput);
            vm.userInput = {};
            vm.step = 0;
            $state.go('success', {creationComplete: true});
        }

        function nextStep() {
            vm.step++;
        }

        function previousStep() {
            vm.step--;
        }

        $scope.$on('$destroy', function () {
            inputWatcher();
        })
    }
})();