import randomNumber from '../randomNumber.js';//  импорт рандома
import gameEngine from '../index.js';// импорт движка

const rule = ('Answer "yes" if given number is prime. Otherwise answer "no".');// правило игры
const primeNumArr = [2, 3, 5, 7, 11];// массив простых чисел

const getQuestionAndAnswer = () => {
  let rightAnswer = '';
  const questionNumber = randomNumber(0, 12);// генерация рандомного числа в диапазоне 1-12

  for (let i = 0; i < primeNumArr.length; i += 1) { // цикл на поиск рандомног очисла в массиве
    if (primeNumArr[i] === questionNumber) { // первое условие
      rightAnswer = 'yes';// если найдется- правильный ответ: yes
      return [questionNumber, rightAnswer];// возврат массива: число проверки и правильный овет
    }
  }
  rightAnswer = 'no';// если не найдется- правильный ответ: no
  return [questionNumber, rightAnswer];// возврат массива: число проверки и правильный овет
};

const startGame = () => { // запускает функцию из index.js с параметрами игры из gcd.js
  gameEngine(rule, getQuestionAndAnswer);
};

export default startGame;
