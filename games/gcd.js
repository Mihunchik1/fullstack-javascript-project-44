import readlineSync from 'readline-sync';
import greeting from '../src/greeting.js';
import getRndNum from '../src/rnd.js';

export default function gcd() {
  greeting();
  const name = readlineSync.question();
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i <= 2;) {
    const rnd1 = getRndNum();
    const rnd2 = getRndNum();
    let result;

    let rndNum1 = rnd1;
    let rndNum2 = rnd2;

    if (rnd1 === rnd2) {
      result = rnd1;
    }

    while (rndNum1 !== rndNum2) {
      if (rndNum1 > rndNum2) {
        rndNum1 -= rndNum2;
      } else {
        rndNum2 -= rndNum1;
      }
    }
    result = rndNum1;

    console.log(`Question: ${rnd1} ${rnd2}`);
    console.log('Your answer: ');
    const answ = readlineSync.question();
    if (result === Number(answ)) {
      console.log('Correct!');
      i += 1;
    } else if (result !== Number(answ)) {
      console.log(`${answ} is wrong answer ;(. Correct answer was ${result}.`);
      console.log(`Let's try again, ${name}!`);
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
