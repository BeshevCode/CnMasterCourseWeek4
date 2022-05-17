let myDrink = "My string is:";
let myBal = 10;
let myBool = 0;
let myArray = ["Coffee", "Tea", "Hot Chocolate", "Fruit Juice"];

myArray.push("Milkshake");

for (let i = 0; i < myArray.length; i++){
console.log(myArray[i])
}

function withdraw (amt){
myBal -= amt;
console.log (`You have withdrawn ${amt}. You have ${myBal} left.`)
}

withdraw(5);


let myDrinks = [
  ["Coke", 2, 30], 
  ["Pepsi", 1,], 
  ["Water", 1]
];

myArray[2][1]