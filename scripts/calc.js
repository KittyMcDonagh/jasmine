Calculator = function() {
    this.value = 0;
}

Calculator.prototype.add = function(number) {
    if (typeof(number) == "number") {
        this.value += number;
    }
    else
        alert("Error!");

}

function whatCanIDrink(age) {
    if (age < 0 || age > 129) {
        return "Sorry. I can’t tell what drink because that age is incorrect!";
    }
    if (age < 14) {
        return "Drink Toddy";
    }
    if (age < 18) {
        return "Drink Coke";
    }
    if (age < 21) {
        return "Drink Beer";
    }
    if (age < 130) {
        return "Drink Whiskey";
    }

};
