import readlineSync from 'readline-sync';

const cli = () => {
  const name = readlineSync.question('Your answer: ');
  console.log(`May I have your name? ${name}`);
  console.log(`Hello, ${name}!`);
};

export default cli;
