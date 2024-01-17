const createGameRules = () => 'What is the result of the expression?.';

const createGameData = () => {
  const questions = [];
  const correctAnswers = [];
  const countOfRounds = 3;
  for (let i = 0; i < countOfRounds; i += 1) {
    const minNumber = 1;
    const maxNumber = 99;
    const firstNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    const secondNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    const operations = ['+', '-', '*'];
    const operationNumber = Math.floor(Math.random() * operations.length);
    const question = `${firstNumber} ${operations[operationNumber]} ${secondNumber}`;
    let correctAnswer;
    if (operationNumber === 0) {
      correctAnswer = firstNumber + secondNumber;
    } else if (operationNumber === 1) {
      correctAnswer = firstNumber - secondNumber;
    } else if (operationNumber === 2) {
      correctAnswer = firstNumber * secondNumber;
    }
    questions.push(question);
    correctAnswers.push(String(correctAnswer));
  }
  return [questions, correctAnswers];
};

export { createGameRules, createGameData };
