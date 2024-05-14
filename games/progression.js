import readlineSync from 'readline-sync';
import greeting from '../src/greeting.js';
import getRndNum from '../src/getRandomInRange.js';

export default function progression() {
  greeting();
  const name = readlineSync.question();
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  for (let i = 0; i <= 2;) {
    const rndArr = [];

    const firstNum = getRndNum();
    rndArr.push(firstNum);

    const step = getRndNum();

    for (let j = 1; j < 10; j += 1) {
      const nextNum = rndArr[j - 1] + step;
      rndArr.push(nextNum);
    }

    const copyRndArr = [...rndArr];
    const rndKey = Math.floor(Math.random() * 10);

    copyRndArr[rndKey] = '..';

    const result = rndArr[rndKey];

    const listArr = copyRndArr.join(' ');

    console.log(`Question: ${listArr}`);
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
