# Winning Combinations Challenge

## What is the challenge?

We are developing a slot game, and you are responsible for the functionality that checks whether a pay line has occurred.

A pay line is a combination of symbols that results in a win on a slot machine. The original slot machines only had one pay line, which would pay if three matching symbols created a horizontal line.

You will have an array of numbers with 5 or 6 positions containing the game symbols, but we have some rules regarding the symbols:

- `0` is the wild symbol. It forms a pay line with any other paying symbol. For example, if the received array was: `[1, 2, 0, 2, 3]`, we have a pay line;

- the paying symbols are: `[1, 2, 3, 4, 5, 6, 7, 8, 9]`;

- and there are the non-paying symbols, which are: `[10, 11, 12, 13, 14, 15]`.

Example, given the input `[1, 2, 6, 6, 6]` the expected output is `[6, [2, 3, 4]]]`.

In the repository, you will find a `call` function where you will implement this functionality, and to check if it is correct, run the `yarn test` command. When your implementation passes all the test cases, you are ready to deliver your challenge.

Good luck. Any questions, please, contact us.
