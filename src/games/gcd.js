import randomNumber from '../randomNumber.js';// импорт рандома
import gameEngine from '../index.js';

const rule = ('Find the greatest common divisor of given numbers.');

const randomNumbers = () => {
  
}

const getQuestionAndAnswer = () => {
  let i = 0;// начало отсчета с нуля, так как ноль попадает в диапазон рандомных чисел
  let divider = 0;// начальное значение общего делителя, все числа делятся на 0
  let rightAnswer = 0;
  const num1 = randomNumber(1, 50);// перемещение первого числа в переменную
  const num2 = randomNumber(51, 100);// перемещение второго числа в переменную
  const questionNumber = `${num1} ${num2}`;// отображение двух вызванных рандомных чисел чисел

  while (num1 >= i && num2 >= i) { // цикл, количество циклов равно нимимальному рандом числу
    const remainder1 = num1 % i === 0;// деление 1-го числа, возвращает true / false
    const remainder2 = num2 % i === 0;// деление 2-го числа, возвращает true / false
    
    if (remainder1 && remainder2) { // для выполнения условия нужно 2 раза true
      divider = i;// если условие выполнено, division = i, на которое делили числа
    }  // иначе делитель не увеличивается, увеличивается только i
    i += 1;
  }
  rightAnswer = divider.toString();// перемещение результата в универс. переменную
  return [questionNumber, rightAnswer];// возврат массива: два числа и их общий максю
};
const startGame = () => { // запускает функцию из index.js с параметрами игры из gcd.js
  gameEngine(rule, getQuestionAndAnswer);
};
export default startGame;
