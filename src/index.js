import readlineSync from 'readline-sync';
import greeting from './cli.js';

const roundsCount = 3;

const runEngine = (rules, generateRound) => {
  const name = greeting();
  console.log(rules);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    console.log('Your answer: ');
    const userAnswer = readlineSync.question();
    if (userAnswer === answer) {
      console.log('correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'. Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runEngine;
