#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getQuestion, checkAnswer, getRightAnswer } from '../src/even-game.js';
import greeting from '../src/cli.js';

const state = { result: 0 };

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
greeting(name);

console.log('Answer "yes" if the number is even, otherwise answer "no".');
while (state.result !== 3) {
  const question = getQuestion();
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Answer: ');
  const result = checkAnswer(answer, question);
  if (result) {
    state.result += 1;
    console.log('Correct!');
  } else {
    const rightAnswer = getRightAnswer(question);
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}

if (state.result === 3) {
  console.log('Congratulations, Bill!');
}
