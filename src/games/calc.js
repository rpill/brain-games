import runCoreGame from '../index.js';
import getRandom from '../utils.js';

const description = 'What is the result of the expression?';

const math = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const operators = Object.keys(math);

const getQuestion = () => {
  const firstNumber = getRandom(1, 99);
  const secondNumber = getRandom(1, 99);
  const sign = operators[getRandom(0, operators.length - 1)];

  return `${firstNumber} ${sign} ${secondNumber}`;
};

const getAnswer = (expression) => {
  const [firstNumber, sign, secondNumber] = expression.split(' ');
  return `${math[sign](Number(firstNumber), Number(secondNumber))}`;
};

const getData = () => {
  const question = getQuestion();
  const answer = getAnswer(question);

  return { question, answer };
};

export default () => runCoreGame(description, getData);
