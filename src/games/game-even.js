const createGameRules = () => {
  return 'Answer "yes" if the number is even, otherwise answer "no".';
};

const createGameData = () => {
  const questions = [];
  const correctAnswers = [];
  const countOfRounds = 3;
  for (let i = 0; i < countOfRounds; i += 1) {
    let question = Math.floor(Math.random() * 100) + 1;
    let correctAnswer;
    if (question % 2 === 0) {
      correctAnswer = "yes";
    } else {
      correctAnswer = "no";
    }
    questions.push(question);
    correctAnswers.push(correctAnswer);
  }
  return [questions, correctAnswers];
};
export { createGameRules, createGameData };
