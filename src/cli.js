import readlineSync from 'readline-sync';

export function getName() {
    console.log('May I have your name?');
    const name = readlineSync.question();
    console.log('Hello, ' + name + '!');
}
