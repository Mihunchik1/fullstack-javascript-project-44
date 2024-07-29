// import readlineSync from 'readline-sync';
// import greeting from '../cli.js';
import getRndNum from '../getRandomInRange.js';
import runEngine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const generateRound = () => {
  const result = [];
  const question = getRndNum();
  result.push(question);
  if (question % 2 === 0) {
    result.push('yes');
  } else {
    result.push('no');
  }
  return result;
};

export default function even() {
  runEngine(rules, generateRound);
/*
  greeting();
  const name = readlineSync.question();
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i <= 2;) {
    const rnd = getRndNum();
    console.log(`Question: ${rnd}`);
    console.log('Your answer: ');
    const answ = readlineSync.question();
    if ((rnd % 2 === 0 && answ === 'yes') || (rnd % 2 !== 0 && answ === 'no')) {
      console.log('Correct!');
      i += 1;
    } else if (rnd % 2 === 0 && answ === 'no') {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!`);
      break;
    } else if (rnd % 2 !== 0 && answ === 'yes') {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`);
      break;
    } else {
      console.log('error!');
      break;
    }
    if (i > 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
    */
}
