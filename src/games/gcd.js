import getRndNum from '../getRandomInRange.js';
import runEngine from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const result = [];
  let rnd1 = getRndNum();
  let rnd2 = getRndNum();
  const question = `${rnd1} ${rnd2}`;
  result.push(question);
  if (rnd1 === rnd2) {
    result.push(rnd1.toString());
  }
  while (rnd1 !== rnd2) {
    if (rnd1 > rnd2) {
      rnd1 -= rnd2;
    } else {
      rnd2 -= rnd1;
    }
  }
  result.push(rnd1.toString());
  return result;
};

export default function gcd() {
  runEngine(rules, generateRound);
}
