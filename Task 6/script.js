/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atliks nurodytas užduotis:
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus vidurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

const users = [
  { id: '1', name: 'John Smith', age: 20 },
  { id: '2', name: 'Ann Smith', age: 24 },
  { id: '3', name: 'Tom Jones', age: 31 },
  { id: '4', name: 'Rose Peterson', age: 17 },
  { id: '5', name: 'Alex John', age: 25 },
  { id: '6', name: 'Ronald Jones', age: 63 },
  { id: '7', name: 'Elton Smith', age: 16 },
  { id: '8', name: 'Simon Peterson', age: 30 },
  { id: '9', name: 'Daniel Cane', age: 51 },
];

function getUserAverage(users){
  let ages =[];
  for(let user in users){
    let currentUser = users[user];
    ages.push(currentUser.age);
  }
  let sum = 0;
  let average = 0;
  for(i=0;i<ages.length;i++){
    sum += parseInt(ages[i]);
    average = sum/ages.length;
  }
  console.log("Average user age is "+average.toFixed(2)+" years.");
}

function getUserNames(users){
  let userNames =[];
  for(let user in users){
    let currentUser = users[user];
    userNames.push(currentUser.name);
  }
  console.log("Array of user names:");
  console.log(userNames);
}

getUserAverage(users);
getUserNames(users);
