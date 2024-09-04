import getRndNum from '../getRandomInRange.js';
import runEngine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = getRndNum();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default function even() {
  runEngine(rules, generateRound);
}
