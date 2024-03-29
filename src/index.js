import readlineSync from 'readline-sync';
import * as gameEven from './games/game-even.js';
import * as gameCalc from './games/game-calc.js';
import * as gameGcd from './games/game-gcd.js';
import * as gameProgression from './games/game-progression.js';
import * as gamePrime from './games/game-prime.js';

export default (gameTitle) => {
  let gameRules;
  let gameData;
  switch (gameTitle) {
    case 'gameCalc':
      gameRules = gameCalc.createGameRules();
      gameData = gameCalc.createGameData();
      break;
    case 'gameEven':
      gameRules = gameEven.createGameRules();
      gameData = gameEven.createGameData();
      break;
    case 'gameGcd':
      gameRules = gameGcd.createGameRules();
      gameData = gameGcd.createGameData();
      break;
    case 'gameProgression':
      gameRules = gameProgression.createGameRules();
      gameData = gameProgression.createGameData();
      break;
    case 'gamePrime':
      gameRules = gamePrime.createGameRules();
      gameData = gamePrime.createGameData();
      break;
    default:
      return;
  }

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRules);
  const countOfRounds = 3;
  const [gameQuestion, correctAnswer] = gameData;
  for (let i = 0; i < countOfRounds; i += 1) {
    console.log(`Question: ${gameQuestion[i]}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === correctAnswer[i]) {
      console.log('Correct!');
    } else {
      console.log(
        `'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer[i]}'.\nLet's try again, ${name}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
