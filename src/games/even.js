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
}
