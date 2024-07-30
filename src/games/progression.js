import getRndNum from '../getRandomInRange.js';
import runEngine from '../index.js';

const rules = 'What number is missing in the progression?';
const generateRound = () => {
  const result = [];
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

  const answer = rndArr[rndKey];

  const question = copyRndArr.join(' ');
  result.push(question);
  result.push(answer.toString());
  return result;
};
export default function progression() {
  runEngine(rules, generateRound);
}
