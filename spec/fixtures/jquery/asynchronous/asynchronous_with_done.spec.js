// Scenario-1: Jasmine should support JavaScript asynchronous operations using the done() function

describe("Jasmine Specs for Asynchronous Operations: ", function() {
    //Scenario -1
    describe("With Done() function: ", function() {

        var myCallback, showErrorMessage;

        beforeEach(function(done) {
            myCallback = jasmine.createSpy();
            $.ajax({
                url: "../spec/fixtures/data/myJSONData.json",
                dataType: "json",
                success: function(responseResult) {
                    myCallback(responseResult);
                    done();
                },
                error: showErrorMessage,
                timeout: 5000
            });
        });

        it("should support JavaScript " + "asynchronous operations", function() {
            expect(myCallback).toHaveBeenCalled();
        });
    });
});