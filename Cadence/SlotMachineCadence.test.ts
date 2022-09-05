import { SlotMachineCad } from './SlotMachineCadence';

const expectedGameRounds = { roundOne: [ 0, 0.25, 2.25, 4.25, 4.5 ], roundTwo: [ 0, 2, 4, 6, 8 ], roundThree: [ 0, 0.25, 0.5, 0.75, 1 ] };

test('Its match!', () => {
  expect(SlotMachineCad.handleCadences(SlotMachineCad.gameRounds)).toEqual(expectedGameRounds);
});
