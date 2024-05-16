import getRandomNumber from '../utils.js';

const createProgression = (firstNumber, numbersGap, progressionLength) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNumber + i * numbersGap);
  }
  return progression;
};

const createGameRules = 'What number is missing in the progression?';

const createGameData = () => {
  const minFirstNumber = 1;
  const maxFirstNumber = 99;
  const firstNumber = getRandomNumber(minFirstNumber, maxFirstNumber);

  const minNubersGap = 2;
  const maxNumbersGap = 9;
  const numbersGap = getRandomNumber(minNubersGap, maxNumbersGap);

  const progressionLength = 10;
  const hiddenElementPosition = getRandomNumber(0, progressionLength - 1);

  const progression = createProgression(firstNumber, numbersGap, progressionLength);
  const correctAnswer = progression[hiddenElementPosition].toString();
  progression[hiddenElementPosition] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export { createGameRules, createGameData };
