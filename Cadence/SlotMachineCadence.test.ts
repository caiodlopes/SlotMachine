import { SlotMachineCad } from './SlotMachineCadence';

const expectedGameRounds1 = { roundOne: [ 0, 0.25, 2.25, 4.25, 4.5 ], roundTwo: [ 0, 2, 4, 6, 8 ], roundThree: [ 0, 0.25, 0.5, 0.75, 1 ] };

const expectedGameRounds2 = { roundOne: [ 0, 2, 3, 4, 5, 6 ], roundTwo: [ 0, 1, 2, 3, 4, 5 ], roundThree: [ 0, 1, 2, 3, 4, 5 ] };

const expectedGameRounds3 = { roundOne: [ 0, 1, 3, 5, 7, 9 ], roundTwo: [ 0, 1, 2, 3, 5, 6 ], roundThree: [ 0, 2, 4, 6, 8, 10 ] };

const roundSymbols1 = {
  roundOne: {
    specialSymbols: [
      { column: 0, row: 2 },
      { column: 1, row: 3 },
      { column: 3, row: 4 },
    ],
  },
  roundTwo: {
    specialSymbols: [
      { column: 0, row: 2 },
      { column: 0, row: 3 },
    ],
  },
  roundThree: {
    specialSymbols: [
      { column: 4, row: 2 },
      { column: 4, row: 3 },
    ],
  },
};

const roundSymbols2 = {
  roundOne: {
    specialSymbols: [
      { column: 1, row: 4 }
    ],
  },
  roundTwo: {
    specialSymbols: [
      { column: 3, row: 2 },
      { column: 4, row: 3 },
    ],
  },
  roundThree: {
    specialSymbols: [
      { column: 0, row: 2 },
      { column: 5, row: 3 },
    ],
  },
};
//testing roundSymbols1
test('Its match!', () => {
  expect(SlotMachineCad.handleCadences(roundSymbols1, 5, 2, 3, 2, 0.25)).toEqual(expectedGameRounds1);
});
//testing roundSymbols1 with diferent AnticipatosConfig
test('Its match!', () => {
  expect(SlotMachineCad.handleCadences(roundSymbols1, 6, 1, 2, 2, 1)).toEqual(expectedGameRounds2);
});
//testing roundSymbols2
test('Its match!', () => {
  expect(SlotMachineCad.handleCadences(roundSymbols2, 6, 1, 2, 2, 1)).toEqual(expectedGameRounds3);
});