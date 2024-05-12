import getRandomNumber from '../utils.js';

const createGameRules = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const createGameData = () => {
  const minNumber = 1;
  const maxNumber = 99;
  const question = getRandomNumber(minNumber, maxNumber);
  let correctAnswer;
  if (question % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
};
export { createGameRules, createGameData };
