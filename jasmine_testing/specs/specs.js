describe("randomNumber", function() {
    describe("hard is false test", function() {
        it("should return a random number between 0 and 3", function() {
            expect(randomNumber(4)).toBeGreaterThanOrEqual(0);
            expect(randomNumber(4)).toBeLessThanOrEqual(3);
        });
    });
    describe("hard is true test", function() {
        it("should return a random number between 0 and 4", function() {
            expect(randomNumber(5)).toBeGreaterThanOrEqual(0);
            expect(randomNumber(5)).toBeLessThanOrEqual(4);
        });
    });
});