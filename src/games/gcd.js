import runCoreGame from '../index.js';
import getRandom from '../utils.js';

const desciption = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  const iter = (a, b) => {
    if (b === 0) {
      return a;
    }
    return iter(b, a % b);
  };

  if (num1 > num2) {
    return iter(num1, num2);
  }

  return iter(num2, num1);
};

const getQuestion = () => {
  const firstNumber = getRandom(1, 99);
  const secondNumber = getRandom(1, 99);

  return `${firstNumber} ${secondNumber}`;
};

const getAnswer = (expression) => {
  const [firstNumber, secondNumber] = expression.split(' ');
  return `${gcd(firstNumber, secondNumber)}`;
};

const getData = () => {
  const question = getQuestion();
  const answer = getAnswer(question);

  return { question, answer };
};

export default () => runCoreGame(desciption, getData);
