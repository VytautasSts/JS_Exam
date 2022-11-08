/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
let title = "";
let director = "";
let budget = 0;

let movie = new Movie();

function Movie() {
    this.read = function () {
        this.title = prompt("Įveskite filmo pavadinimą:", "");
        this.director = prompt("Įveskite filmo ražisierių:","");
        this.budget = parseInt(prompt("Įveskite filmo biudžetą:", 0));
    }
    this.wasExpensive = function () {
        return this.budget>100000000?true:false;
    
}
}

movie.read();
console.log("Movie tile: "+movie.title);
console.log("Movie director: " +movie.director);
console.log("Ar brangus filmas? "+ movie.wasExpensive());
