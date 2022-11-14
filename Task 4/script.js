/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */
const ENDPOINT = './cars.json';

async function importData() {
  const response = await fetch(ENDPOINT);
  const cars = await response.json();
  getCars(cars);
}

async function getCars(cars) {
  for (let car in cars) {

    const card = document.createElement('div');

    const brand = document.createElement('h1');
    brand.innerText = cars[car].brand;
    brand.id='brand';
    card.append(brand);

    const variants = document.createElement('div');
    variants.id = 'variants';
    card.append(variants);

    for (i=0; i<cars[car].models.length; i++){
      const model = document.createElement('p');
      model.innerText = cars[car].models[i];
      variants.append(model);
    }

    document.getElementById("output").append(card);
  }
};

importData();

/* Coded by V.S. */