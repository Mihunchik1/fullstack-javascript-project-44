import getRndNum from '../getRandomInRange.js';
import runEngine from '../index.js';

const rules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const arrOperator = ['+', '-', '*'];
  return arrOperator[Math.floor(Math.random() * arrOperator.length)];
};

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Invalid operator - ${operator}`);
  }
};

const generateRound = () => {
  const rnd1 = getRndNum();
  const rnd2 = getRndNum();
  const randomOperator = getRandomOperator();
  const question = `${rnd1} ${randomOperator} ${rnd2}`;
  const answer = String(calculation(rnd1, rnd2, randomOperator));
  return [question, answer];
};

export default function calculator() {
  runEngine(rules, generateRound);
}
