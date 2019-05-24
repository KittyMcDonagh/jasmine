describe("Calculator", function() {

    beforeEach(function() {
        calc = new Calculator;
    });

    describe("Addition tests", function() {
        it("should return 42", function() {
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });
        it("should return 26", function() {
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        });
        it("should return an error if we don't supply two numbers", function() {
            spyOn(window, "alert");
            calc.add("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});

describe("Drink About Game", function() {
    describe("Age Checks", function() {
        it("should return (130): Sorry. I can’t tell what drink because that age is incorrect!", function() {
            expect(whatCanIDrink(130)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        it("should return (-1): Sorry. I can’t tell what drink because that age is incorrect!", function() {
            expect(whatCanIDrink(-1)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        it("should return: Drink Toddy", function() {
            expect(whatCanIDrink(13)).toBe("Drink Toddy");
        });
        it("should return: Drink Coke", function() {
            expect(whatCanIDrink(17)).toBe("Drink Coke");
        });
        it("should return: Drink Beer", function() {
            expect(whatCanIDrink(20)).toBe("Drink Beer");
        });
        it("should return: Drink Whiskey", function() {
            expect(whatCanIDrink(129)).toBe("Drink Whiskey");
        });
    });
});
