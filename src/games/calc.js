import getRndNum from '../getRandomInRange.js';
import runEngine from '../index.js';

const rules = 'What is the result of the expression?';
const generateRound = () => {
  const result = [];
  const arrOperator = ['+', '-', '*'];
  const operator = arrOperator[Math.floor(Math.random() * arrOperator.length)];

  const rnd1 = getRndNum();
  const rnd2 = getRndNum();

  const questionStr = `${rnd1} ${operator} ${rnd2}`;
  result.push(questionStr);
  let answerNum;
  switch (operator) {
    case '+':
      answerNum = rnd1 + rnd2;
      break;
    case '-':
      answerNum = rnd1 - rnd2;
      break;
    case '*':
      answerNum = rnd1 * rnd2;
      break;
    default:
  }
  result.push(answerNum.toString());
  return result;
};

export default function calculator() {
  runEngine(rules, generateRound);
}
