import getRndNum from '../getRandomInRange.js';
import runEngine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const generateRound = () => {
  const question = getRndNum();
  return [question, isEven(question)];
};

export default function even() {
  runEngine(rules, generateRound);
}
