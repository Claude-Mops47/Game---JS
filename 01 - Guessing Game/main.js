// function guessNumber() {
//   let playerGuess;
//   const numberToGuess = Math.ceil(Math.random() * 10);

//   prompt("Devinez le nombre entre 1 et 10 inclus.");

//   while (playerGuess != numberToGuess) {
//     playerGuess = prompt(
//       "Echec! Essayez à nouveau de deviner le nombre (entre 1 et 10 inclus)."
//     );
//   }
//   alert(`Felicitation! Le nombre était ${numberToGuess}!`);
// }
// guessNumber();

const fs = require("fs");
const rawdata = fs.readFileSync("animals.json");
const animals = JSON.parse(rawdata);

console.table(animals);
