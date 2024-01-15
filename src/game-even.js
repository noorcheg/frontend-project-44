import readlineSync from "readline-sync";

export default () => {
  console.log(`Welcome to the Brain Games!`);
  const name = readlineSync.question("May I have your name? ");
  console.log(
    `Hello, ${name}!\nAnswer "yes" if the number is even, otherwise answer "no".`
  );
  let correctAnswer;
  const gamesCount = 3;
  for (let i = 0; i < gamesCount; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
    if (randomNumber % 2 === 0) {
      correctAnswer = "yes";
    } else {
      correctAnswer = "no";
    }
    const yourAnswer = readlineSync.question("Your answer: ");
    if (yourAnswer === correctAnswer) {
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
