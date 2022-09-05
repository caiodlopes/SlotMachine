
type WinningCombinationsResult = [number, number[]][];


function call(lines: number[]): WinningCombinationsResult {
  var currentNumber = -1;
  //Keep currentIndexes to add to WinningCombinationsResult
  var currentIndexes: number[] = [];
  //If we counting zeros, we need to keep the nextIndexes, because zeros can former a sequence with next numbers either
  var nextIndexes: number[] = [];
  //Our result array
  var result: WinningCombinationsResult = [];


  //Iterates over array to former WinningCombinationsResult
  lines.forEach((x: number, i: number) => {
    //If x > 9, it is not a winning number, so we set the current number to -1, currentIndexes an nextIndexes to an empty array, because we wont former any sequence with a non winningNumber, so we have to reinicialize our variables and prepare for next possible sequence
    if (x > 9) {
      //if we find a non winning element after a winning sequence, we need to push the winning sequence before reinitialize our variables
      if(currentIndexes.length >= 3){
        result.push([currentNumber, Object.assign([], currentIndexes)]);
      }
      currentNumber = -1;
      currentIndexes = [];
      nextIndexes = [];
      return;
    }
    //If x = 0, it is a special number, so we can count it in currentIndexes and nextIndexes
    if (x === 0) {
      currentIndexes.push(i);
      nextIndexes.push(i);
      return;
    }
    //If x is diferent from current number, it means the current number is -1, or just a new sequence from zeros
    if (x !== currentNumber) {
      //If its = -1, it means a new sequence or first sequence
      if (currentNumber === -1) {
        //sets x to currentNumber
        currentNumber = x;
        //get nextIndexes, formed by zeros, and turn it in currentIndexes
        currentIndexes = Object.assign([], nextIndexes);
        //zeros nextIndexes
        nextIndexes = [];
        //push the index of actual element to currentIndexes
        currentIndexes.push(i);
        return;
      }
      //if currentIndexes.lenght is bigger or equal 3, it means we complete the sequence and can add it to result
      if (currentIndexes.length >= 3) {
        result.push([currentNumber, Object.assign([], currentIndexes)]);
      }
      currentNumber = x;
      currentIndexes = Object.assign([], nextIndexes);
      nextIndexes = [];
      currentIndexes.push(i);
      return;
    }
    //if not enter in any other above "if", it means the current element former a sequence and just add it to current indexes
    currentIndexes.push(i);
    //for sure its not zero because we verify if is 0 above, so we cant have nextIndexes and must reinitialize nextIndexes array
    nextIndexes = [];
  });
  //When we finished to loop through array of numbers, and current number is -1, it means all other number are 0 or we finish with non winning number
  if (currentNumber === -1) {
    currentNumber = 0;
  }
  //If currentIndexes are bigger or equal 3, we complet a sequence and must add it to result
  if (currentIndexes.length >= 3) {
    result.push([currentNumber, Object.assign([], currentIndexes)]);
  }
  console.log(result);
  return result;
}

export const WinningCombinations = { call };
