import readlineSync from 'readline-sync';
import greeting from '../cli.js';
import getRndNum from '../getRandomInRange.js';

export default function prime() {
  greeting();
  const name = readlineSync.question();
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the given number is prime. Otherwise, answer "no".');

  for (let i = 0; i <= 2;) {
    const rnd = getRndNum();
    if (rnd === 0) {
      console.log('Question: 0');
      console.log('Your answer: ');
      const answ = readlineSync.question();
      if (answ === 'no') {
        console.log('Correct!');
        i += 1;
      } else {
        console.log(`no is the wrong answer :(. Let's try again, ${name}!`);
        break;
      }
    } else {
      const halfRnd = Math.ceil(rnd / 2);
      let count = 0;
      if (rnd === 1) {
        count = 1;
      }
      for (let j = 2; j <= halfRnd + 1; j += 1) {
        if (rnd % j === 0) {
          count += 1;
        }
      }
      console.log(`Question: ${rnd}`);
      console.log('Your answer: ');
      const answ = readlineSync.question();
      if ((count > 0 && answ === 'no') || (count === 0 && answ === 'yes')) {
        console.log('Correct!');
        i += 1;
      } else if (count === 0 && answ === 'no') {
        console.log(`no is the wrong answer :(. Correct answer was "yes". Let's try again, ${name}!`);
        break;
      } else if (count > 0 && answ === 'yes') {
        console.log(`yes is the wrong answer :(. Correct answer was "no". Let's try again, ${name}!`);
        break;
      } else {
        console.log('error!');
        break;
      }
      if (i > 2) {
        console.log(`Congratulations, ${name}!`);
      }
    }
  }
}
