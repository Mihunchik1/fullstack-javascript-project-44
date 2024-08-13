import getRndNum from '../getRandomInRange.js';
import runEngine from '../index.js';

const rules = 'What number is missing in the progression?';

const getProgression = () => {
  const rndArr = [];
  const firstNum = getRndNum();
  rndArr.push(firstNum);

  const step = getRndNum();

  for (let j = 1; j < 10; j += 1) {
    const nextNum = rndArr[j - 1] + step;
    rndArr.push(nextNum);
  }
  return rndArr;
};

const generateRound = () => {
  const rndArr = getProgression();
  const copyRndArr = [...rndArr];
  const rndKey = Math.floor(Math.random() * 10);

  copyRndArr[rndKey] = '..';
  const question = copyRndArr.join(' ');
  const answer = rndArr[rndKey].toString();
  return [question, answer];
};

export default function progression() {
  runEngine(rules, generateRound);
}
