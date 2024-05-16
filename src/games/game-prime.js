import getRandomNumber from '../utils.js';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const createGameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const createGameData = () => {
  const minNumber = 1;
  const maxNumber = 99;
  const questionNumber = getRandomNumber(minNumber, maxNumber);
  let correctAnswer;
  if (isPrime(questionNumber)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return [questionNumber, correctAnswer];
};

export { createGameRules, createGameData };
