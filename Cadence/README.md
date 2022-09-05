## What is expected of you?

1. **Working on the code from this folder**
2. Implement a function to solve a game need: **slot machine cadence**.
3. The capacity to understand written code and new tech. You can improve what is already written.
4. **Clean and commented code**. Feel free to comment the existing code - it will be useful in understanding how it works.

---

## Example of how the game works

The game has a slot machine with 5 columns and 6 rows. (A matrix of 5x6)
Every time a new round starts, the machine spins all columns and receive a new set of symbol for each position.
When the machine stop spinning each column stops with a default cadence.
But the game has a special symbol that can appear when receive the new set of symbols,
and that special symbol can change the machine column cadence to stop.
The special symbol has minimum number of symbols to start changing the cadence and a maximum number of symbols to end the change in cadence.
This change of cadence is called Anticipation.

---

## Example of how the column cadence works

When the machine stops, each column has to stop at its given time.
The stop starts from the first column with a value of 0 and goes on adding up to the last column, with a time interval between each.

---

## Case example

In a game with 6 columns.
Minimum of 1 special symbol to start anticipation.
Maximum of 2 special symbols to end anticipation.
Default cadence of 1.
Anticipate cadence of 2.
Special symbols coordinates of column: 1, row: 2, column: 4, row: 3.

The expected result for the cadence is: [0, 1, 3, 5, 7, 8 ]

---

## What should you deliver?

### Slot Machine Cadence:

Each game round you will receive coordinates of special symbols positions in the columns and rows.
Your function must return all game rounds with the slot machine cadence to stop the columns.

_PS: Do overthink this. It is required that your code contemplates every special symbol coordinate possible. Also, the quantity of columns, min and max of symbols can change._

---

## That's it!

Feel free to contact us should you face any blocking issues or difficulties that stop your progress.
