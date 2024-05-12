import getRandomNumber from '../utils.js';

const createGameRules = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const createGameData = () => {
  const minNumber = 1;
  const maxNumber = 99;
  const questionNumber = getRandomNumber(minNumber, maxNumber);
  const numberOfIterations = Math.floor(questionNumber / 2);
  let maxDivider;
  for (let j = 1; j <= numberOfIterations; j += 1) {
    if (questionNumber % j === 0) {
      maxDivider = j;
    }
  }
  let correctAnswer;
  if (maxDivider > 1) {
    correctAnswer = 'no';
  } else {
    correctAnswer = 'yes';
  }

  return [questionNumber, correctAnswer];
};

export { createGameRules, createGameData };
