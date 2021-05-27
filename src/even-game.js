const answers = { yes: true, no: false };

const isEven = (num) => num % 2 === 0;

const isValid = (answer) => Object.keys(answers).includes(answer);

const isNotValid = (answer) => !isValid(answer);

const getQuestion = () => Math.ceil(Math.random() * 100);

const checkAnswer = (answer, num) => {
  if (isNotValid(answer)) {
    return false;
  }

  return isEven(num) === answers[answer];
};

const getRightAnswer = (num) => {
  const answer = isEven(num);
  return Object.keys(answers).find((key) => answers[key] === answer);
};

export { getQuestion, checkAnswer, getRightAnswer };
