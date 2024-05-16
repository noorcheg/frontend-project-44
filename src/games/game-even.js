import getRandomNumber from '../utils.js';

const isEven = (num) => num % 2 === 0;

const createGameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const createGameData = () => {
  const minNumber = 1;
  const maxNumber = 99;
  const question = getRandomNumber(minNumber, maxNumber);
  let correctAnswer;
  if (isEven(question)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
};
export { createGameRules, createGameData };
