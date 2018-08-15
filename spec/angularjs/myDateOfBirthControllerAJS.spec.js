/*
  Scenario-1: Person should be eligible to open bank account if age is greater than or equal to 18 years.
  Scenario-2: Person should not be eligible to open bank account if age is less than 18 years.
*/

describe("Controller: To Validate Person's Age ", function() {
    beforeEach(module("myApp"));
    var $controller;
    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe("Check Person's Eligibility to Open Bank Account: ", function() {

        var $scope, controller;
        beforeEach(function() {
            $scope = {};
            controller = $controller("myDateOfBirthController", {
                $scope: $scope
            });
        });

        // Scenario - 1
        it("should be eligible if age is greater than or equal to 18 years", function() {
            var myDOB = new Date(1981, 3, 13);
            $scope.calculateAge(myDOB);
            expect($scope.Eligibility).toBeTruthy();
        });

        // Scenario - 2
        it("should not be eligible if age is less than 18 years ", function() {
            var myDOB = new Date(2001, 3, 13);
            $scope.calculateAge(myDOB);
            expect($scope.Eligibility).toBeFalsy();
        });
    });
});