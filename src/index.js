import readlineSync from 'readline-sync';
import greeting from './cli.js';

const gamesToWin = 3;

export default (rule, getData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  greeting(name);
  console.log(rule);
  for (let i = 0; i < gamesToWin; i += 1) {
    const { question, answer } = getData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
