import getRandomNumber from '../utils.js';

const createGameRules = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const createGameData = () => {
  const questions = [];
  const correctAnswers = [];
  const countOfRounds = 3;
  for (let i = 0; i < countOfRounds; i += 1) {
    const minNumber = 1;
    const maxNumber = 99;
    const question = getRandomNumber(minNumber, maxNumber);
    let correctAnswer;
    if (question % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    questions.push(question);
    correctAnswers.push(correctAnswer);
  }
  return [questions, correctAnswers];
};
export { createGameRules, createGameData };
