/** GOAL: In index.js, there are a collection of functions which provide functionality for a cash register to be used by a point-of-sale system. Your task is to complete the functions by writing the logic to meet the specifications below:

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
// DO NOT EDIT CODE ABOVE

const coinsArray = ["penny", "nickel", "dime", "quarter"];
const notesArray = ["one", "five", "ten", "twenty", "hundred"];

const findInDrawer = (name, arr) => {
  arr.find((currentItem) => currentItem.name === name);
};

// Level 1: removeItem and addItem

function removeItem(name, drawer) {
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
console.log(returnedDrawer);

function addItem(name, drawer) {
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
console.log(updatedDrawer);

// Level 2: countCoins and countNotes

function countCoins(drawer) {
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

console.log("Coins: ", countCoins(drawer));

function countNotes(drawer) {
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
console.log("Notes: ", countNotes(drawer));

// Level 3: sumDrawer

function sumDrawer(drawer) {
  // Write your code here
  let totalSum = 0;

  for (let i = 0; i < drawer.length; i++) {
    const currentInnerObject = drawer[i];
    let currentTotal = currentInnerObject.value * currentInnerObject.quantity;
    totalSum += currentTotal;
  }
  return `$${(totalSum / 100).toFixed(2)}`;
}

console.log(sumDrawer(drawer));

// Level 4: canMakeAmount

function canMakeAmount(target, drawer) {
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
console.log(canMakeAmount(1651, drawer)); //true

// ALTERNATIVE SOLUTION 1 - Level 4 task

// function canMakeAmount(target, drawer) {
//   for (let i = drawer.length - 1; i >= 0; i--) {
//     while (drawer[i].quantity > 0 && target - drawer[i].value >= 0) {
//       target -= drawer[i].value;
//       drawer[i].quantity--;
//     }
//   }

//   return target === 0;
// }

// ALTERNATIVE SOLUTION 2 - Level 4 task

// function canMakeAmount(target, drawer) {
//   for (let i = drawer.length - 1; i >= 0; i--) {
//     while (drawer[i].quantity > 0) {
//       const diff = target - drawer[i].value;
//       if (diff < 0) break;

//       target -= drawer[i].value;
//       drawer[i].quantity--;
//     }
//   }

//   return target === 0;
// }
////////

// Level 5: transaction

function transaction(cost, paid, drawer) {
  // Write your code here
  let change = paid - cost;

  for (let i = drawer.length - 1; i >= 0; i--) {
    const currentInnerObject = drawer[i];

    while (paid - currentInnerObject.value >= 0) {
      paid = paid - currentInnerObject.value;
      currentInnerObject.quantity += 1;
      // console.log('Remaining from paid: ', paid)
    }
  }

  if (change === 0) return drawer;
  
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

console.log("After transaction: ", transaction(700, 1000, drawer));

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
