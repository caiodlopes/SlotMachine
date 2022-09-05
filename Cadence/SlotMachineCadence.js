"use strict";
exports.__esModule = true;
exports.SlotMachineCad = void 0;
/**
 * This must be used to get all game rounds cadences.
 */
var slotMachineCadences = { roundOne: [], roundTwo: [], roundThree: [] };
/**
 * This must be used to get AnticipatorConfig.
 */
var antConfig = { columnSize: 0, minToAnticipate: 0, maxToAnticipate: 0, anticipateCadence: 0, defaultCadence: 0 };
/**
 * This function receives an array of coordinates relative to positions in the slot machine's matrix.
 * This array is the positions of the special symbols.
 * And it has to return a slot machine stop cadence.
 * @param symbols Array<SlotCoordinate> positions of the special symbols. Example: [{ column: 0, row: 2 }, { column: 2, row: 3 }]
 * @returns SlotCadence Array of numbers representing the slot machine stop cadence.
 */
function slotCadence(symbols, antConfig) {
    //Magic
    var sCadence = [0];
    var cadenceToAdd = 0;
    var lastAdded = 0;
    var totalSpecialSymbols = 0;
    // Iterates each column of slotCadence
    for (var i = 0; i < antConfig.columnSize - 1; i++) {
        //Find total symbols per column and add it to our variable totalSpecialSymbols
        totalSpecialSymbols += findTotalSpecialSymbolsInColumn(symbols, i);
        //Defines what cadence we should use, based on totalSpecialSymbols and the min and max to anticipate.
        cadenceToAdd = (totalSpecialSymbols < antConfig.minToAnticipate || totalSpecialSymbols >= antConfig.maxToAnticipate) ? antConfig.defaultCadence : antConfig.anticipateCadence;
        //Add desired cadence to lastAdded
        lastAdded += cadenceToAdd;
        //Push the new element to sCadence array
        sCadence.push(lastAdded);
    }
    return sCadence;
}
/**
 * Counts the total number of symbols in a column
 * @param symbols Array<SlotCoordinate> with contains all special symbols positions
 * @return totalSpecialSymbols
 */
function findTotalSpecialSymbolsInColumn(symbols, column) {
    var total = 0;
    //Iterates of symbols to find how many special symbols have in specific column
    symbols.forEach(function (x) {
        if (x.column === column) {
            total++;
        }
    });
    return total;
}
/**
 * Get all game rounds and return the final cadences of each.
 * @param rounds RoundsSymbols with contains all rounds special symbols positions.
 * @return RoundsCadences has all cadences for each game round.
 */
function handleCadences(rounds, columnSize, minToAnticipate, maxToAnticipate, anticipateCadence, defaultCadence) {
    var antConfig = populateAntConfig(columnSize, minToAnticipate, maxToAnticipate, anticipateCadence, defaultCadence);
    slotMachineCadences.roundOne = slotCadence(rounds.roundOne.specialSymbols, antConfig);
    slotMachineCadences.roundTwo = slotCadence(rounds.roundTwo.specialSymbols, antConfig);
    slotMachineCadences.roundThree = slotCadence(rounds.roundThree.specialSymbols, antConfig);
    return slotMachineCadences;
}
//Function to populate AnticipatorConfig with variable numbers
function populateAntConfig(columnSize, minToAnticipate, maxToAnticipate, anticipateCadence, defaultCadence) {
    antConfig.columnSize = columnSize;
    antConfig.minToAnticipate = minToAnticipate;
    antConfig.maxToAnticipate = maxToAnticipate;
    antConfig.anticipateCadence = anticipateCadence;
    antConfig.defaultCadence = defaultCadence;
    return antConfig;
}
//Just to pass if we execute this file, now that information is stored on test file.
console.log('CADENCES: ', handleCadences({
    roundOne: {
        specialSymbols: [
            { column: 0, row: 2 },
            { column: 1, row: 3 },
            { column: 3, row: 4 },
        ]
    },
    roundTwo: {
        specialSymbols: [
            { column: 0, row: 2 },
            { column: 0, row: 3 },
        ]
    },
    roundThree: {
        specialSymbols: [
            { column: 4, row: 2 },
            { column: 4, row: 3 },
        ]
    }
}, 5, 2, 3, 2, 0.25));
exports.SlotMachineCad = { handleCadences: handleCadences };
