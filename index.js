// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *
 * the variable count is within the function scope in counter 1, and outside of the function scope in counter 2.
 *
 * 2. Which of the two uses a closure? How can you tell?
 *
 * Counter1 has closure because it has a function, within a function. Although you can also say that conter2 also has closure since all javascript functions have closure.
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *
 * If we are using the variable count later in code, we would not want to to have a functional scope and would want to use counter2. counter1 would be useful when you are counting continuous strings of data.
 *
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  };
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
  let points = Math.floor(Math.random() * 3);
  return points;
}
inning();

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(inningfunct, num) {
  let home = 0;
  let away = 0;
  for (let i = 0; i <= num; i++) {
    home += inningfunct();
    away += inningfunct();
  }

  return `Final Score: Home: ${home}, Away: ${away}`;
}

console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `finalScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function scoreboard(finalScore, inning, num) {
  let home = 0;
  let away = 0;
  for (let i = 1; i <= num; i++) {
    /* This doesn't seem to work with the finalScore */
    //home = (finalScore(inning,i))
    //away = (finalScore(inning,i));
    home += inning();
    away += inning();
    if (i === 1) {
      console.log(`${i}st inning: ${away} - ${home}`);
    } else if (i === 2) {
      console.log(`${i}nd inning: ${away} - ${home}`);
    } else if (i === 3) {
      console.log(`${i}rd inning: ${away} - ${home}`);
    } else {
      console.log(`${i}th inning: ${away} - ${home}`);
    }
  }
  if (away > home) {
    console.log(`Away team wins! 🙌`);
  } else if (home > away) {
    console.log(`Home team wins!!! 🎉🎉`);
  } else {
    console.log(`It's a tie! 🎀`);
  }
  return `Final Score: ${away} - ${home}`;
}
console.log(scoreboard(finalScore, inning, 9));
