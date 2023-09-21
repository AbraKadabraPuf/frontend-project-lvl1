import readlineSync from 'readline-sync';

const gameEngine = (rule, getQuestionAndAnswer) => {
// принимает правило и массив: число и правильный ответ
  console.log('Welcome to Brain games!');// приветствие (можно заменить на импорт отдельног оприветствия)
  const userName = readlineSync.question('May I have your name? ');// вопрос юзеру и запрос на ввод имени юзера
  console.log(`Hello, ${userName}!`);// отображение приветствия и введенного имени юзером
  console.log(rule);// правило игры

  const raund = 3;// количество циклов

  for (let counter = 0; counter < raund; counter += 1) { // цикл на 3 игры
    const [questionNumber, rightAnswer] = getQuestionAndAnswer();// деструктуризация
    console.log(`Question: ${questionNumber}`);// вывод вопроса и рандомного числа
    const userAnswer = readlineSync.question('Your answer: ');// вывод:вопрос юзеру с полем ввода ответа
    if (userAnswer !== rightAnswer) { // сравнение:ответ юзера !== правильному ответу
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);//
      console.log(`Let's try again, ${userName}!`);// ответ юзеру: ты ошибся попробуй еще.
      return;// конец игры
    }
    console.log('Correct!');// вывод: все верно.
  }
  console.log(`Congratulations, ${userName}!`);// если прошло 3 игры и 3 ответа были верные, вовзрат: поздравление
};
export default gameEngine;
