import readlineSync from 'readline-sync';
import greeting from '../cli.js';
import getRndNum from '../getRandomInRange.js';

export default function calculator() {
  greeting();
  const name = readlineSync.question();
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  for (let i = 0; i <= 2;) {
    const arrOperator = ['+', '-', '*'];
    const rndOperator = Math.floor(Math.random() * arrOperator.length);
    const operator = arrOperator[rndOperator];

    const rnd1 = getRndNum();
    const rnd2 = getRndNum();
    let result;

    switch (operator) {
      case '+':
        result = rnd1 + rnd2;
        break;
      case '-':
        result = rnd1 - rnd2;
        break;
      case '*':
        result = rnd1 * rnd2;
        break;
      default:
    }
    console.log(`Question: ${rnd1} ${operator} ${rnd2}`);
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
