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

describe("Fizz Buzz Game", function() {
    describe("Fizz Buzz", function() {
        it("abc should return Invalid Input!", function() {
            expect(fizzBuzz("abc")).toBe("Invalid Input!");
        });
        it("22 should return 22 not divisible by 3 or 5!", function() {
            expect(fizzBuzz(22)).toBe("22 not divisible by 3 or 5!");
        });
        it("124 should return 124 not divisible by 3 or 5!", function() {
            expect(fizzBuzz(124)).toBe("124 not divisible by 3 or 5!");
        });
        it("3 should return Fizz", function() {
            expect(fizzBuzz(3)).toBe("Fizz");
        });
        it("6 should return Fizz", function() {
            expect(fizzBuzz(6)).toBe("Fizz");
        });
        it("12 should return Fizz", function() {
            expect(fizzBuzz(12)).toBe("Fizz");
        });
        it("-3 should return Fizz", function() {
            expect(fizzBuzz(-3)).toBe("Fizz");
        });
        
        it("5 should return Buzz", function() {
            expect(fizzBuzz(5)).toBe("Buzz");
        });
        it("10 should return Buzz", function() {
            expect(fizzBuzz(10)).toBe("Buzz");
        });
        it("20 should return Buzz", function() {
            expect(fizzBuzz(20)).toBe("Buzz");
        });
        it("-5 should return Buzz", function() {
            expect(fizzBuzz(-5)).toBe("Buzz");
        });
        
        it("15 should return FizzBuzz", function() {
            expect(fizzBuzz(15)).toBe("FizzBuzz");
        });
        it("30 should return FizzBuzz", function() {
            expect(fizzBuzz(30)).toBe("FizzBuzz");
        });
        it("45 should return FizzBuzz", function() {
            expect(fizzBuzz(45)).toBe("FizzBuzz");
        });
        it("-15 should return FizzBuzz", function() {
            expect(fizzBuzz(-15)).toBe("FizzBuzz");
        });
    });
});
        
        
        
        
        
        
        
        
        
        
        
        
