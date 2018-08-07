describe("Credit Card Division of a Bank: ", function() {
    describe("Accept Credit Card Number for Master Card Category", function() {
        it("Should be equal to 16 digits", function() {
            expect(validateCreditCardNumber("9999-9999-9999-9999")).toBeTruthy();
        });
    });
});