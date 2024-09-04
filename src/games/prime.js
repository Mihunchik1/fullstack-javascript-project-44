import getRndNum from '../getRandomInRange.js';
import runEngine from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let count = 0;
  const halfRnd = Math.ceil(num / 2);
  if (num === 1 || num === 0) {
    count = 1;
  }
  for (let j = 2; j <= halfRnd + 1; j += 1) {
    if (num % j === 0) {
      count += 1;
    }
  }
  if (count > 0) {
    return false;
  }
  return true;
};

const generateRound = () => {
  const question = getRndNum();
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default function prime() {
  runEngine(rules, generateRound);
}
