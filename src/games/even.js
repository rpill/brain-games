import runCoreGame from '../index.js';
import getRandom from '../utils';

const desciption = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestion = () => getRandom(1, 99);

const getAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const getData = () => {
  const question = getQuestion();
  const answer = getAnswer(question);

  return { question, answer };
};

export default () => runCoreGame(desciption, getData);
