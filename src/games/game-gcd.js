const createGameRules = () => {
  return "Find the greatest common divisor of given numbers.";
};

const createGameData = () => {
  const questions = [];
  const correctAnswers = [];
  const countOfRounds = 3;
  for (let i = 0; i < countOfRounds; i += 1) {
    const minNumber = 1;
    const maxNumber = 99;
    const firstNumber =
      Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    const secondNumber =
      Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    const question = firstNumber + " " + secondNumber;
    let correctAnswer;
    let iterationsCount;
    if (firstNumber > secondNumber) {
      iterationsCount = secondNumber;
    } else {
      iterationsCount = firstNumber;
    }
    for (let i = 1; i <= iterationsCount; i += 1) {
      if (firstNumber % i === 0 && secondNumber % i === 0) {
        correctAnswer = i;
      }
    }
    questions.push(question);
    correctAnswers.push(String(correctAnswer));
  }
  return [questions, correctAnswers];
};

export { createGameRules, createGameData };
