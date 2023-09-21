const randomNumber = (min = 0, max = 100) => {
  const generate = Math.floor(Math.random() * (max - min) + min);
  return generate;
};
// Math.Random возвращает случайное число от 0 до 1, не включая 1.
// Mart.floor округляет до целого в меньшую сторону.
// Умножение на 101 дает максимальное число = 100.
// чтобы получить рандомное число нужно вызвать randomNumber();
// при использовании тернарного оператора ругается ЛИНТЕР.
export default randomNumber;
