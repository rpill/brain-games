import runCoreGame from '../index.js';
import getRandom from '../utils.js';

const desciption = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const getQuestion = () => getRandom(1, 99);

const getAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

const getData = () => {
  const question = getQuestion();
  const answer = getAnswer(question);

  return { question, answer };
};

export default () => runCoreGame(desciption, getData);
