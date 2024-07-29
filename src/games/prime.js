import readlineSync from 'readline-sync';
import greeting from '../cli.js';
import getRndNum from '../getRandomInRange.js';

export default function prime() {
  greeting();
  const name = readlineSync.question();
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the given number is prime. Otherwise, answer "no".');

  let i = 0; // Счётчик правильных ответов
  while (i < 3) { // Играем 3 раунда
    const rnd = getRndNum();
    console.log(`Question: ${rnd}`);
    console.log('Your answer: ');
    const answ = readlineSync.question();

    // Проверка на число 0
    if (rnd === 0) {
      if (answ === 'no') {
        console.log('Correct!');
        i += 1;
      } else {
        console.log(`'no' is the wrong answer :(. Let's try again, ${name}!`);
        break;
      }
      continue;
    }

    // Проверка на простоту числа
    let isPrime = true;
    if (rnd === 1) {
      isPrime = false; // 1 не является простым числом
    } else {
      for (let j = 2; j <= Math.sqrt(rnd); j += 1) {
        if (rnd % j === 0) {
          isPrime = false;
          break;
        }
      }
    }

    // Проверка ответа пользователя
    const correctAnswer = isPrime ? 'yes' : 'no';
    if (answ === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${answ}' is the wrong answer :(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`);
      break;
    }

    // Проверка на окончание игры
    if (i >= 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
}
