/*
    Scenario - 1: The jasmine.any function should be applied successfully for comparing types of arguments.

    Scenario - 2: The jasmine.objectContaining should match / compare objects corresponding to actual key / value pairs.

    Scenario - 3: The jasmine.objectContaining should be applied successfully to compare arguments with Jasmine Spies.
*/

describe("<ABC> Company: Health Care Solution, ", function() {
    describe("When to donate or receive blood, ", function() {
        describe("Person With O+ Blood Group: ", function() {
            it("can receive the blood of the " +
                "person with O+ blood group", function() {
                var testPersonCriteria = new Person("John Player", "10/30/1980", "O+", "Receiver");
                spyOn(testPersonCriteria, "MatchBloodGroupToGiveReceive").and.callThrough();
                var callback = jasmine.createSpy();
                testPersonCriteria.ValidateBloodGroup(callback);
                expect(callback).toHaveBeenCalled();
                expect(callback.calls.any()).toEqual(true);
                expect(callback.calls.count()).toEqual(1);
                expect(testPersonCriteria.MatchBloodGroupToGiveReceive).toHaveBeenCalled();
                expect(testPersonCriteria.MatchBloodGroupToGiveReceive.calls.any()).toEqual(true);
                expect(testPersonCriteria.MatchBloodGroupToGiveReceive.calls.count()).toEqual(1);
                expect(testPersonCriteria.ValidateBloodGroup(callback)).toContain("O+");
            });

            it("can give the blood to the " +
                "person with A+ blood group", function() {
                var testPersonCriteria = new Person("John Player", "10/30/1980", "O+", "Donor");
                spyOn(testPersonCriteria, "MatchBloodGroupToGiveReceive").and.callThrough();
                var callback = jasmine.createSpy();
                testPersonCriteria.ValidateBloodGroup(callback);
                expect(callback).toHaveBeenCalled();
                expect(testPersonCriteria.MatchBloodGroupToGiveReceive).toHaveBeenCalled();
                expect(testPersonCriteria.ValidateBloodGroup(callback)).toContain("A+");
            });
        });

        describe("Person With B- Blood Group: ", function() {
            it("can receive the blood of the " + "person with B- blood group", function () {
                var testPersonCriteria = new Person("John Player", "10/30/1980", "B-", "Receiver");
                spyOn(testPersonCriteria, "MatchBloodGroupToGiveReceive").and.callThrough();
                var callback = jasmine.createSpy();
                testPersonCriteria.ValidateBloodGroup(callback);
                expect(callback).toHaveBeenCalled();
                expect(testPersonCriteria.MatchBloodGroupToGiveReceive).toHaveBeenCalled();
                expect(testPersonCriteria.ValidateBloodGroup(callback)).toContain("B-");
            });
            it("can receive the blood of the " + "person with O- blood group", function () {
                var testPersonCriteria = new Person("John Player", "10/30/1980", "B-", "Receiver");
                spyOn(testPersonCriteria, "MatchBloodGroupToGiveReceive").and.callThrough();
                var callback = jasmine.createSpy();
                testPersonCriteria.ValidateBloodGroup(callback);
                expect(callback).toHaveBeenCalled();
                expect(testPersonCriteria.MatchBloodGroupToGiveReceive).toHaveBeenCalled();
                expect(testPersonCriteria.ValidateBloodGroup(callback)).toContain("O-");
            });
        });
    });
});