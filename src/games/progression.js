import runCoreGame from '../index.js';
import getRandom from '../utils.js';

const description = 'What number is missing in the progression?';

const generateProgression = () => {
  const length = getRandom(5, 10);
  const difference = getRandom(1, 10);
  const start = getRandom(1, 20);
  const progression = Array(length)
    .fill(0)
    .map((_, i) => start + i * difference);

  return progression;
};

const getQuestion = (progression, index) => {
  const newProgression = [...progression];
  newProgression[index] = '..';
  return newProgression.join(' ');
};

const getAnswer = (num) => `${num}`;

const getData = () => {
  const progression = generateProgression();

  const index = getRandom(0, progression.length - 1);

  const question = getQuestion(progression, index);
  const answer = getAnswer(progression[index]);

  return { question, answer };
};

export default () => runCoreGame(description, getData);
