/*
    Scenario-1: Inventory Stock should be updated on account of item(s) sale or issue of item(s)
    Scenario-2: Inventory stock should be updated on return of any item(s)
    Scenario-3: Inventory stocks should be updated on receiving/procuring new item(s)
*/

describe("Inventory Stock", function() {

    var stockinhand_item1, item1;

    beforeEach(function() {
        stockinhand_item1 = 11;
        item1 = 1;
        console.log("beforeEach: Stock in hand for item1 before spec execution = " + stockinhand_item1);
    });

    afterEach(function() {
        stockinhand_item1 = 0;
        item1 = 0;
        console.log("afterEach: Stock in hand for item1 once spec executed = " + stockinhand_item1);
    });

    // Scenario – 1
    it("Inventory Stock should be updated on sale/issue of an item", function() {
        expect(stockinhand_item1 - item1).toEqual(10);
    });

    it("Inventory Stock should be updated on issue of an item within organization", function() {
        expect(stockinhand_item1 - item1).toEqual(10);
    });

    // Scenario - 2
    it("Inventory Stock should be updated on return of any item", function() {
        expect(stockinhand_item1 + item1).toEqual(12);
    });

    // Scenario - 3
    it("Inventory Stock should be updated on receiving or procuring new item", function() {
        expect(stockinhand_item1 + item1).toEqual(12);
    });
});