let turtle1 = 'Leonardo';
let turtle2 = 'Raphael';
let turtle3 = 'Donatello';
let turtle4 = 'Michelangelo'

let allTurtles = ''

allTurtles += turtle1

console.log (allTurtles)

allTurtles += " "+turtle2+" "+turtle3+" "+turtle4

console.log (allTurtles)

console.log (allTurtles.indexOf("Donatello"));

console.log (allTurtles.length);

let firstHalfTurtles

let secondHalfTurtles

firstHalfTurtles = allTurtles.slice(0,17);

secondHalfTurtles = allTurtles.slice(17,)

console.log (firstHalfTurtles);

console.log (secondHalfTurtles);

console.log ("My favorite are:", turtle4, "and", turtle3);

console.log ("My least favorites are:", turtle1, "and", turtle2);

