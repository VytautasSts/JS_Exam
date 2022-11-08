/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
let a = 0;
let b = 0;

let calculator = new Calculator();

function Calculator() {
    this.read = function () {
        this.a = parseInt(prompt("Enter number A", 0));
        this.b = parseInt(prompt("Enter number B", 0));
    }
    this.sum = function () {
        return this.a + this.b;
    }
    this.substraction = function () {
        return this.a - this.b;
    }
    this.multiplication = function () {
        return this.a * this.b;
    }
    this.division = function () {
        return this.a / this.b;
    }
}

calculator.read();
console.log("A + B = " + calculator.sum());
console.log("A - B = " + calculator.substraction());
console.log("A x B = " + calculator.multiplication());
console.log("A / B = " + (calculator.division()).toFixed(2));
