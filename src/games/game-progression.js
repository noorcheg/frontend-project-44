import getRandomNumber from '../utils.js';

const createGameRules = () => 'What number is missing in the progression?';

const createGameData = () => {
  const minFirstNumber = 1;
  const maxFirstNumber = 99;
  const firstNumber = getRandomNumber(minFirstNumber, maxFirstNumber);

  const minNubersGap = 2;
  const maxNumbersGap = 9;
  const numbersGap = getRandomNumber(minNubersGap, maxNumbersGap);

  const progressionLength = 10;
  const hiddenElementPosition = getRandomNumber(0, progressionLength - 1);

  const progression = [];
  let correctAnswer;

  for (let i = 0; i < progressionLength; i += 1) {
    const progressionElement = firstNumber + i * numbersGap;
    if (i === hiddenElementPosition) {
      progression.push('..');
      correctAnswer = progressionElement.toString();
    } else {
      progression.push(progressionElement);
    }
  }

  const question = progression.join(' ');

  return [question, correctAnswer];
};

export { createGameRules, createGameData };
