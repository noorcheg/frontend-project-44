import getRandomNumber from '../utils.js';

const calculate = (firstNumber, secondNumber, operation) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return 'error';
  }
};

const createGameRules = 'What is the result of the expression?';

const createGameData = () => {
  const minNumber = 1;
  const maxNumber = 99;
  const firstNumber = getRandomNumber(minNumber, maxNumber);
  const secondNumber = getRandomNumber(minNumber, maxNumber);
  const operations = ['+', '-', '*'];
  const operation = operations[getRandomNumber(0, operations.length - 1)];
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const correctAnswer = calculate(firstNumber, secondNumber, operation).toString();

  return [question, correctAnswer];
};

export { createGameRules, createGameData };
