"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var drawer_1 = require("./drawer");
var findInDrawer = function (name, arr) {
    var foundInDrawer = arr.find(function (currentItem) { return currentItem.name === name; });
    if (!foundInDrawer) {
        throw new Error("Item with name ".concat(name, " not found in drawer"));
    }
    return foundInDrawer;
};
console.log("Found in drawer: ", findInDrawer("penny", drawer_1.default));
// Level 1: removeItem and addItem
function removeItem(name, drawer) {
    for (var i = 0; i < drawer.length; i++) {
        var currentInnerObject = drawer[i];
        if (currentInnerObject.name === name) {
            currentInnerObject.quantity -= 1;
            break;
        }
    }
    return drawer;
}
var returnedDrawer = removeItem("penny", drawer_1.default); // Removes 1 penny
console.log("Removed an item - returnedDrawer: ", returnedDrawer);
function addItem(name, drawer) {
    // 'name' can by of type 'Coin' or 'Note'
    for (var i = 0; i < drawer.length; i++) {
        var currentInnerObject = drawer[i];
        if (currentInnerObject.name === name) {
            currentInnerObject.quantity += 1;
            break;
        }
    }
    return drawer;
}
var updatedDrawer = addItem("nickel", drawer_1.default); // Adds 1 nickel
console.log("Added an item - updatedDrawer: ", updatedDrawer);
// Level 2: countCoins and countNotes
// GUARD FUNCTIONS with Type Predicates
function isCoin(name) {
    return (name === "penny" ||
        name === "nickel" ||
        name === "dime" ||
        name === "quarter");
}
// If the 'isNote' function returns 'true', then 'name' is of type 'Note'.
function isNote(name) {
    return (name === "one" ||
        name === "five" ||
        name === "ten" ||
        name === "twenty" ||
        name === "hundred");
}
function countCoins(drawer) {
    // Write your code here
    var coinsCount = 0;
    for (var i = 0; i < drawer.length; i++) {
        var currentInnerObject = drawer[i];
        if (isCoin(currentInnerObject.name) && currentInnerObject.quantity > 0) {
            var currentCoinQuantity = currentInnerObject.quantity;
            coinsCount += currentCoinQuantity;
        }
    }
    return coinsCount;
}
console.log("Coins Count: ", countCoins(drawer_1.default));
function countNotes(drawer) {
    var notesCount = 0;
    for (var i = 0; i < drawer.length; i++) {
        var currentInnerObject = drawer[i];
        if (isNote(currentInnerObject.name) && currentInnerObject.quantity > 0) {
            var currentNotesQuantity = currentInnerObject.quantity;
            notesCount += currentNotesQuantity;
        }
    }
    return notesCount;
}
console.log("Notes Count: ", countNotes(drawer_1.default));
// Level 3: sumDrawer
function sumDrawer(drawer) {
    // Write your code here
    var totalSum = 0;
    for (var i = 0; i < drawer.length; i++) {
        var currentInnerObject = drawer[i];
        var currentTotal = currentInnerObject.value * currentInnerObject.quantity;
        totalSum += currentTotal;
    }
    return "$".concat((totalSum / 100).toFixed(2));
}
console.log("Total sum: ", sumDrawer(drawer_1.default));
// Level 4: canMakeAmount
function canMakeAmount(target, drawer) {
    // Write your code here
    for (var i = drawer.length - 1; i >= 0; i--) {
        var currentInnerObject = drawer[i];
        if (target - currentInnerObject.value >= 0 &&
            currentInnerObject.quantity >= 1) {
            while (target - currentInnerObject.value >= 0 &&
                currentInnerObject.quantity >= 1) {
                target -= currentInnerObject.value;
                currentInnerObject.quantity--;
            }
        }
    }
    return target === 0;
}
// console.log(canMakeAmount(613, drawer)) // false
console.log("Can make a specific amount with what is in the drawer - ", canMakeAmount(1651, drawer_1.default)); //true
// Level 5: transaction
function transaction(cost, paid, drawer) {
    var change = paid - cost;
    // First, add all what the customer paid to the drawer.
    for (var i = drawer.length - 1; i >= 0; i--) {
        var currentInnerObject = drawer[i];
        while (paid - currentInnerObject.value >= 0) {
            paid = paid - currentInnerObject.value;
            currentInnerObject.quantity += 1;
            // console.log('Remaining from paid: ', paid)
        }
    }
    // If no change needs be returned to the customer, terminate the function.
    if (change === 0)
        return drawer;
    // If the customer has to receive a change, update the drawer again and return it.
    for (var i = drawer.length - 1; i >= 0; i--) {
        var currentInnerObject = drawer[i];
        while (change - currentInnerObject.value >= 0) {
            change = change - currentInnerObject.value;
            currentInnerObject.quantity -= 1;
            // console.log('Remaining change: ', change)
        }
    }
    return drawer;
}
// console.log('After transaction: ', transaction(450, 450, drawer))
console.log("Drawer after transaction: ", transaction(700, 1000, drawer_1.default));
// DO NOT EDIT CODE BELOW
module.exports = {
    removeItem: removeItem,
    addItem: addItem,
    countCoins: countCoins,
    countNotes: countNotes,
    sumDrawer: sumDrawer,
    canMakeAmount: canMakeAmount,
    transaction: transaction,
};
