import readlineSync from 'readline-sync';
import greeting from '../cli.js';

export default function brain() {
  greeting();
  const name = readlineSync.question();
  console.log(`Hello, ${name}!`);
}
