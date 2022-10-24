let cheeseCalories = 200;
let eggsRequire = 4;
let caloriesPerEgg = 75;
let comensal1 = 1;
let comensal2 = 1;

let eggsCalories = caloriesPerEgg*eggsRequire;
let omelleteDuFromageCalories = cheeseCalories + eggsCalories;


console.log("Las calorías de todos los huevos son", eggsCalories, "calorías")
console.log("Las calorías totales de la tortilla es", omelleteDuFromageCalories, "calorías")

console.log("Cada ración de tortilla aporta", omelleteDuFromageCalories/(comensal1+comensal2),"calorías a cada comensal")