const createGameRules = () => {
  return "What is the result of the expression?.";
};

const createGameData = () => {
  const questions = [];
  const correctAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = Math.floor(Math.random() * 100) + 1;
    const secondNumber = Math.floor(Math.random() * 100) + 1;
    const operations = ["+", "-", "*"];
    const operationNumber = Math.floor(Math.random() * 3);
    const question =
      firstNumber + " " + operations[operationNumber] + " " + secondNumber;
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
