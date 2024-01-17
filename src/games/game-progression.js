const createGameRules = () => {
  return "What number is missing in the progression?";
};

const createGameData = () => {
  const questions = [];
  const correctAnswers = [];
  const countOfRounds = 3;
  for (let i = 0; i < countOfRounds; i += 1) {
    const minFirstNumber = 1;
    const maxFirstNumber = 99;
    let firtsNumber =
      Math.floor(Math.random() * (maxFirstNumber - minFirstNumber + 1)) +
      minFirstNumber;
    const minNubersGap = 2;
    const maxNumbersGap = 9;
    let numbersGap =
      Math.floor(Math.random() * (maxNumbersGap - minNubersGap)) + minNubersGap;
    const progressionLength = 10;
    let hiddenElementPosition = Math.floor(Math.random() * progressionLength);
    let progressionElement;
    const progression = [];
    for (let i = 0; i < progressionLength; i += 1) {
      progressionElement = firtsNumber + i * numbersGap;
      progression.push(progressionElement);
    }
    correctAnswers.push(String(progression[hiddenElementPosition]));
    progression[hiddenElementPosition] = "..";
    questions.push(progression.join(" "));
  }
  return [questions, correctAnswers];
};

export { createGameRules, createGameData };
