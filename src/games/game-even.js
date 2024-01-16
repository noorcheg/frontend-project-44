import gameEngine from "../index.js";

const gameRules = () => {
  return 'Answer "yes" if the number is even, otherwise answer "no".';
};

const createGameData = () => {
  let question = Math.floor(Math.random() * 100) + 1;
  let correctAnswer;
  if (question % 2 === 0) {
    correctAnswer = "yes";
  } else {
    correctAnswer = "no";
  }
  return [question, correctAnswer];
};

export default gameEngine;
export { gameRules, createGameData };
