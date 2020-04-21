describe("randomNumber", function () {
    it("should return a random number between 0 and 3 if hard is false", function () {
        expect(randomNumber(4)).toBeGreaterThanOrEqual(0);
        expect(randomNumber(4)).toBeLessThanOrEqual(3);
    });
    it("should return a random number between 0 and 4 if hard is true", function () {
        expect(randomNumber(5)).toBeGreaterThanOrEqual(0);
        expect(randomNumber(5)).toBeLessThanOrEqual(4);
    });
});

describe("getDifficultyValue", function() {
    it("should return 4 (hard is set to false by default)", function() {
        expect(getDifficultyValue()).toBe(4);
    });
});