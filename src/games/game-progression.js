const createGameRules = () => 'What number is missing in the progression?';

const createGameData = () => {
  const questions = [];
  const correctAnswers = [];
  const countOfRounds = 3;
  for (let i = 0; i < countOfRounds; i += 1) {
    const minFirstNumber = 1;
    const maxFirstNumber = 99;
    const firtsNumber = Math.floor(Math.random() * (maxFirstNumber - minFirstNumber + 1))
      + minFirstNumber;
    const minNubersGap = 2;
    const maxNumbersGap = 9;
    const numbersGap = Math.floor(Math.random() * (maxNumbersGap - minNubersGap)) + minNubersGap;
    const progressionLength = 10;
    const hiddenElementPosition = Math.floor(Math.random() * progressionLength);
    let progressionElement;
    const progression = [];
    for (let j = 0; j < progressionLength; j += 1) {
      progressionElement = firtsNumber + j * numbersGap;
      progression.push(progressionElement);
    }
    correctAnswers.push(String(progression[hiddenElementPosition]));
    progression[hiddenElementPosition] = '..';
    questions.push(progression.join(' '));
  }
  return [questions, correctAnswers];
};

export { createGameRules, createGameData };
