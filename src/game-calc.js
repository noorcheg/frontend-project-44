import readlineSync from "readline-sync";

export default () => {
  console.log(`Welcome to the Brain Games!`);
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!\nWhat is the result of the expression?.`);
  let correctAnswer;
  const gamesCount = 3;
  for (let i = 0; i < gamesCount; i += 1) {
    const firstNumber = Math.floor(Math.random() * 100) + 1;
    const secondNumber = Math.floor(Math.random() * 100) + 1;
    const operations = ["+", "-", "*"];
    const operationNumber = Math.floor(Math.random() * 3);
    console.log(
      `Question: ${firstNumber} ${operations[operationNumber]} ${secondNumber}`
    );
    if (operationNumber === 0) {
      correctAnswer = firstNumber + secondNumber;
    } else if (operationNumber === 1) {
      correctAnswer = firstNumber - secondNumber;
    } else if (operationNumber === 2) {
      correctAnswer = firstNumber * secondNumber;
    }
    const yourAnswer = readlineSync.question("Your answer: ");
    if (Number(yourAnswer) === correctAnswer) {
      console.log(`Correct!`);
    } else {
      console.log(
        `'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
