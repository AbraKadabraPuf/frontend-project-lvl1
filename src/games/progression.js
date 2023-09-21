import randomNumber from '../randomNumber.js';// импорт рандома
import gameEngine from '../index.js'; // импорт игрового движка

const rule = ('What number is missing in the progression?');
const range = randomNumber(2, 6);// шаг увеличения

const getQuestionAndAnswer = () => {
  const startNum = randomNumber(0, 55);// стартовое число в диапазоне 0-55
  const arr = [];// пустой массив
  for (let i = 0; i < 10; i += 1) { // цикл на 10 повторов
    const progressNum = range * i;// увеличение шага с каждым циклом
    arr[i] = startNum + progressNum;// добавление в массив:число+шаг
  }
  const hiddenNum = randomNumber(0, 10);// генерирование числа для замены на '..'
  const rightAnswer = arr[hiddenNum].toString();// ответ должен быть строкой
  arr[hiddenNum] = '..';// замена рандомного индекса на '..'
  const questionNumber = arr.join(' ');// преобразование массива в строку без ','
  return [questionNumber, rightAnswer];// возврат результата
};

const startGame = () => {
  gameEngine(rule, getQuestionAndAnswer);
};

export default startGame;
