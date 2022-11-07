/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */
document.getElementById("submit-btn").addEventListener("click", convertWeight);

function convertWeight() {
    let kg = parseInt(document.getElementById('search').value);
    let lb = getPounds(kg);
    let g = getGrams(kg);
    let oz = getOunces(kg);
    showResult(kg, lb, g, oz);
}

function getPounds(weight) {
    let pounds = weight * 2.2046;
    return pounds;
}
function getGrams(weight) {
    let grams = weight / 0.001;
    return grams;
}
function getOunces(weight) {
    let ounces = weight * 35.274;
    return ounces;
}

function showResult(kg, lb, g, oz) {
    document.getElementById("output").style.visibility = "visible";
    document.getElementById('pounds').innerHTML = kg+" kg is equal to "+lb+" pounds."
    document.getElementById('grams').innerHTML = kg+" kg is equal to "+g+" grams."
    document.getElementById('ounces').innerHTML = kg+" kg is equal to "+oz+" pounds."
}