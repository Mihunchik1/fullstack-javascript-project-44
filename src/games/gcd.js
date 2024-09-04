import getRndNum from '../getRandomInRange.js';
import runEngine from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  let firstNum = num1;
  let secondNum = num2;
  while (secondNum !== 0) {
    const temp = secondNum;
    secondNum = firstNum % secondNum;
    firstNum = temp;
  }
  return firstNum.toString();
};

const generateRound = () => {
  const rnd1 = getRndNum();
  const rnd2 = getRndNum();
  const question = `${rnd1} ${rnd2}`;
  const answer = getGcd(rnd1, rnd2);
  return [question, answer];
};

export default function gcd() {
  runEngine(rules, generateRound);
}
