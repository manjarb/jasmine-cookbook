/*
  Scenario-1: The correct URL should be passed to the $.ajax object
  Scenario-2: The myCallback method should be called on successful response
  Scenario-3: The showErrorMessage method should be called for any malfunctioning
  Scenario-4: The DOM should be updated based on the server response
*/

describe("jQuery", function() {
    describe("Ajax Calls:", function() {
        describe("with $.ajax", function() {

            var configurationData = {
                url: "myJSONData.json",
                remainingTime: 5000
            };

            // Scenario - 1
            it("Correct URL should be passed to $.ajax object", function() {
                spyOn($, "ajax");
                sendRequestWithJQuery(undefined, undefined, configurationData);
                expect($.ajax).toHaveBeenCalledWith(jasmine.objectContaining({url: configurationData.url}));
            });

            // Scenario - 2
            it("Method 'myCallback' should be called on successful response", function() {
                spyOn($, "ajax").and.callFake(function(e) {
                    e.success({});
                });
                var myCallback;
                myCallback = jasmine.createSpy();
                showErrorMessage = jasmine.createSpy();
                sendRequestWithJQuery(myCallback, showErrorMessage, configurationData);
                expect(myCallback).toHaveBeenCalled();
                expect(showErrorMessage).not.toHaveBeenCalled();
            });

            // Scenario - 3
            it("Error method showErrorMessage should be called for any malfunctioning", function() {
                spyOn($, "ajax").and.callFake(function(e) {
                    e.error({});
                });
                showErrorMessage = jasmine.createSpy();
                sendRequestWithJQuery(myCallback, showErrorMessage, configurationData);
                expect(showErrorMessage).toHaveBeenCalled();
            });

            // Scenario - 4
            describe("DOM Manipulation", function() {
                it("Test HTML Fixture", function() {
                    jasmine.getFixtures().fixturesPath = '../spec/fixtures/jquery';
                    loadFixtures('myfixture.html');
                    jasmine.getJSONFixtures().fixturesPath = '../spec/fixtures/data';
                    var FixtureUrl = "myJSONData.json";
                    var fixtures = loadJSONFixtures(FixtureUrl);
                    var myResult = fixtures[FixtureUrl];
                    spyOn($, "ajax").and.callFake(function(e) {
                        e.success(myResult);
                    });
                    showErrorMessage = jasmine.createSpy();
                    sendRequestWithJQuery(myCallback, showErrorMessage, configurationData);
                    expect($('#my-fixture')).toContainText(/Jasmine Cookbook by Munish Sethi/i);
                });
            });
        });
    });
});