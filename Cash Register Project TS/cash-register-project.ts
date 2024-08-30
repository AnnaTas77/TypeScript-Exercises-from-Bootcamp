/** GOAL: In index.js, there are a collection of functions which provide functionality for a cash register to be used by a point-of-sale system. 
 * Your task is to complete the functions by writing the logic to meet the specifications below:

Level 1:
removeItem(name, drawer): Removes a single item from the drawer
addItem(name, drawer): Adds a single item to the drawer
Level 2:
countCoins(drawer): Counts how many coins are in the drawer
countNotes(drawer): Counts how many notes/bills are in the drawer
Level 3:
sumDrawer(drawer): Calculates the total amount of money in the drawer as a string formatted in dollars (see example below)
Level 4:
canMakeAmount(target, drawer): Determines whether it is possible to create a specific cash amount from the items in the drawer.
Level 5:
transaction(cost, paid, drawer): Calculates the change required from a transaction and removes it from the drawer if possible. */

const drawer = require("./drawer");
// console.log('Drawer content:', drawer);

interface DrawerObject {
  name: string;
  value: number;
  quantity: number;
}

type Drawer = DrawerObject[]; // array of objects

const coinsArray: string[] = ["penny", "nickel", "dime", "quarter"];
const notesArray: string[] = ["one", "five", "ten", "twenty", "hundred"];

const findInDrawer = (name:string, arr:Drawer):DrawerObject  => {
  const foundInDrawer = arr.find((currentItem) => currentItem.name === name);
  if (!foundInDrawer) {
    throw new Error(`Item with name ${name} not found in drawer`);
  }
  return foundInDrawer;
};

console.log('Found in drawer: ', findInDrawer('penny', drawer))

// Level 1: removeItem and addItem

function removeItem(name: string, drawer:Drawer):Drawer {
  // Write your code here
  for (let i = 0; i < drawer.length; i++) {
    const currentInnerObject = drawer[i];
    if (currentInnerObject.name === name) {
      currentInnerObject.quantity -= 1;
      break;
    }
  }
  return drawer;
}
const returnedDrawer = removeItem("penny", drawer); // Removes 1 penny
console.log('Removed an item - returnedDrawer: ', returnedDrawer);

function addItem(name: string, drawer:Drawer):Drawer {
  // Write your code here
  for (let i = 0; i < drawer.length; i++) {
    const currentInnerObject = drawer[i];
    if (currentInnerObject.name === name) {
      currentInnerObject.quantity += 1;
      break;
    }
  }
  return drawer;
}
const updatedDrawer = addItem("nickel", drawer); // Adds 1 nickel
console.log('Added an item - updatedDrawer: ', updatedDrawer);

// Level 2: countCoins and countNotes

function countCoins(drawer:Drawer):number {
  // Write your code here
  let coinsCount = 0;
  for (let i = 0; i < drawer.length; i++) {
    const currentInnerObject = drawer[i];
    if (coinsArray.includes(currentInnerObject.name)) {
      const currentCoinQuantity = currentInnerObject.quantity;
      coinsCount += currentCoinQuantity;
    }
  }
  return coinsCount;
}

console.log("Coins Count: ", countCoins(drawer));

function countNotes(drawer:Drawer): number {
  // Write your code here
  let notesCount = 0;
  for (let i = 0; i < drawer.length; i++) {
    const currentInnerObject = drawer[i];
    if (notesArray.includes(currentInnerObject.name)) {
      const currentNotesQuantity = currentInnerObject.quantity;
      notesCount += currentNotesQuantity;
    }
  }
  return notesCount;
}
console.log("Notes Count: ", countNotes(drawer));

// Level 3: sumDrawer

function sumDrawer(drawer:Drawer): string {
  // Write your code here
  let totalSum = 0;

  for (let i = 0; i < drawer.length; i++) {
    const currentInnerObject = drawer[i];
    let currentTotal = currentInnerObject.value * currentInnerObject.quantity;
    totalSum += currentTotal;
  }
  return `$${(totalSum / 100).toFixed(2)}`;
}

console.log('Total sum: ', sumDrawer(drawer));

// Level 4: canMakeAmount

function canMakeAmount(target:number, drawer: Drawer):boolean {
  // Write your code here
  for (let i = drawer.length - 1; i >= 0; i--) {
    const currentInnerObject = drawer[i];
    if (
      target - currentInnerObject.value >= 0 &&
      currentInnerObject.quantity >= 1
    ) {
      while (
        target - currentInnerObject.value >= 0 &&
        currentInnerObject.quantity >= 1
      ) {
        target -= currentInnerObject.value;
        currentInnerObject.quantity--;
      }
    }
  }

  return target === 0;
}

// console.log(canMakeAmount(613, drawer)) // false
console.log('Can make a specific amount with what is in the drawer - ', canMakeAmount(1651, drawer)); //true


// Level 5: transaction

function transaction(cost: number, paid: number, drawer: Drawer): Drawer {

  let change = paid - cost;

  // First, add all what the customer paid to the drawer.
  for (let i = drawer.length - 1; i >= 0; i--) {
    const currentInnerObject = drawer[i];

    while (paid - currentInnerObject.value >= 0) {
      paid = paid - currentInnerObject.value;
      currentInnerObject.quantity += 1;
      // console.log('Remaining from paid: ', paid)
    }
  }

  // If no change needs be returned to the customer, terminate the function.
  if (change === 0) return drawer;
  
  // If the customer has to receive a change, update the drawer again and return it. 
  for (let i = drawer.length - 1; i >= 0; i--) {
    const currentInnerObject = drawer[i];

    while (change - currentInnerObject.value >= 0) {
      change = change - currentInnerObject.value;
      currentInnerObject.quantity -= 1;
      // console.log('Remaining change: ', change)
    }
  }
  return drawer;
}

// console.log('After transaction: ', transaction(450, 450, drawer))

console.log("Drawer after transaction: ", transaction(700, 1000, drawer));

// DO NOT EDIT CODE BELOW
module.exports = {
  removeItem,
  addItem,
  countCoins,
  countNotes,
  sumDrawer,
  canMakeAmount,
  transaction,
};
