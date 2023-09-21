import randomNumber from '../randomNumber.js';// импорт рандома
import gameEngine from '../index.js';

const rule = ('Answer "yes" if the number is even, otherwise answer "no".');

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};
// проверка четности, если четное, то возвращает true, наоборот - false.

const getQuestionAndAnswer = () => { // возвращает массив: рандомное число и правильный ответ
  const questionNumber = randomNumber(); // передача функции генерирующей число в константу.
  const resultCheck = isEven(questionNumber);// если число четное: возврат true, иначе false
  let rightAnswer;
  if (resultCheck === true) { // Если число четное
    rightAnswer = 'yes';// правильный ответ-yes
    return [questionNumber, rightAnswer];// вернет массив: число и правильный ответ 'yes'
  }
  rightAnswer = 'no';// правильный ответ-no
  return [questionNumber, rightAnswer];// вернет массив: число и правильный ответ 'no'
};

const startGame = () => {
  gameEngine(rule, getQuestionAndAnswer);
};

export default startGame;
