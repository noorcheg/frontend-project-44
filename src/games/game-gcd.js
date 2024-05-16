import getRandomNumber from '../utils.js';

const calculateGCD = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return calculateGCD(num2, num1 % num2);
};

const createGameRules = 'Find the greatest common divisor of given numbers.';

const createGameData = () => {
  const minNumber = 1;
  const maxNumber = 99;
  const firstNumber = getRandomNumber(minNumber, maxNumber);
  const secondNumber = getRandomNumber(minNumber, maxNumber);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = calculateGCD(firstNumber, secondNumber).toString();
  return [question, correctAnswer];
};

export { createGameRules, createGameData };
