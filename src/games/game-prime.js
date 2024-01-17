const createGameRules = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const createGameData = () => {
  const questions = [];
  const correctAnswers = [];
  const countOfRounds = 3;
  for (let i = 0; i < countOfRounds; i += 1) {
    const minNumber = 1;
    const maxNumber = 99;
    const questionNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
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
    questions.push(questionNumber);
    correctAnswers.push(correctAnswer);
  }
  return [questions, correctAnswers];
};

export { createGameRules, createGameData };
