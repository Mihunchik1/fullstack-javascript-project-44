import readlineSync from 'readline-sync';
import greeting from '../src/greeting.js';
import getRndNum from '../src/getRandomInRange.js';

export default function prime() {
  greeting();
  const name = readlineSync.question();
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i <= 2;) {
    const rnd = getRndNum();
    const halfRnd = Math.ceil(rnd / 2);
    let count = 0;
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
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!`);
      break;
    } else if (count > 0 && answ === 'yes') {
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
}
