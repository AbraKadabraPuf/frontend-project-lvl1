import randomNumber from '../randomNumber.js';// импорт рандома
import gameEngine from '../index.js';

const rule = ('What is the result of the expression?');

const getQuestionAndAnswer = () => {
  const numberOne = randomNumber(1, 10);// вызов рандомного числа
  const numberTwo = randomNumber(1, 10);// вызов второго рандомного числа
  const resultPlus = numberOne + numberTwo;// сложение чисел
  const resultMinus = numberOne - numberTwo;// разница чисел
  const resultMultiply = numberOne * numberTwo;// умножение числе
  let rightAnswer;
  let questionNumber;
  const generate = Math.floor(Math.random() * 3);

  if (generate === 0) {
    rightAnswer = resultPlus.toString();
    questionNumber = `${numberOne} + ${numberTwo}`;
    return [questionNumber, rightAnswer];
  } if (generate === 1) {
    rightAnswer = resultMinus.toString();
    questionNumber = `${numberOne} - ${numberTwo}`;
    return [questionNumber, rightAnswer];
  }
  rightAnswer = resultMultiply.toString();
  questionNumber = `${numberOne} * ${numberTwo}`;
  return [questionNumber, rightAnswer];
};

const startGame = () => {
  gameEngine(rule, getQuestionAndAnswer);
};
export default startGame;
