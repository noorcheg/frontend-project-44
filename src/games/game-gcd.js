import getRandomNumber from '../utils.js';

const createGameRules = () => 'Find the greatest common divisor of given numbers.';

const createGameData = () => {
  const minNumber = 1;
  const maxNumber = 99;
  const firstNumber = getRandomNumber(minNumber, maxNumber);
  const secondNumber = getRandomNumber(minNumber, maxNumber);
  const question = `${firstNumber} ${secondNumber}`;
  let correctAnswer;
  let iterationsCount;
  if (firstNumber > secondNumber) {
    iterationsCount = secondNumber;
  } else {
    iterationsCount = firstNumber;
  }
  for (let j = 1; j <= iterationsCount; j += 1) {
    if (firstNumber % j === 0 && secondNumber % j === 0) {
      correctAnswer = j.toString();
    }
  }
  return [question, correctAnswer];
};

export { createGameRules, createGameData };
