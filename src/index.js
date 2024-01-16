import readlineSync from "readline-sync";
import { gameRules, createGameData } from "./games/game-even.js";

export default () => {
  console.log(`Welcome to the Brain Games!`);
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log(gameRules());
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = createGameData();
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question("Your answer: ");
    if (yourAnswer === correctAnswer) {
      console.log(`Correct!`);
    } else {
      console.log(
        `'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
