import getRandomNumber from '../utils.js';

const isEven = (num) => num % 2 === 0;

const createGameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const createGameData = () => {
  const minimumNumber = 1;
  const maximumNumber = 99;
  const question = getRandomNumber(minimumNumber, maximumNumber);
  let correctAnswer;
  if (isEven(question)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
};
export { createGameRules, createGameData };
