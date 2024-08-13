import getRndNum from '../getRandomInRange.js';
import runEngine from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const result = [];
  const question = getRndNum();
  result.push(question);
  let count = 0;
  const halfRnd = Math.ceil(question / 2);
  if (question === 1 || question === 0) {
    count = 1;
  }
  for (let j = 2; j <= halfRnd + 1; j += 1) {
    if (question % j === 0) {
      count += 1;
    }
  }
  if (count > 0) {
    result.push('no');
  } else {
    result.push('yes');
  }
  return result;
};

export default function prime() {
  runEngine(rules, generateRound);
}
