import readlineSync from 'readline-sync';
import greeting from './cli.js';

const roundsCount = 3;

const runEngine = (rules, generateRound) => {
  greeting();
  const name = readlineSync.question();
  console.log(`Hello, ${name}!`);
  console.log(rules);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateRound();
    console.log(question);
    console.log('Your answer: ');
    const userAnswer = readlineSync.question();
    if (userAnswer === answer) {
      console.log('correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'. Let's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default runEngine;
