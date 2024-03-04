#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from './brain-games.js';
import getRndNum from '../src/rnd.js';

greeting();
const name = readlineSync.question();
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
for (let i = 0; i <= 2;) {
  const rnd = getRndNum();
  console.log(`Questions: ${rnd}`);
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
