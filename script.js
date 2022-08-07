const isNumber = (num) => {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const randomGenerate = () => {
  return Math.floor(Math.random() * 100) + 1;
};

function gameQuestion(x) {
  function insideFun() {
    const question = +prompt('Угадай число от 1 до 100');

    switch (true) {
      case question === 0:
        alert('Игра окончена');
        return;
      case !isNumber(question):
        alert('Введите число!');
        insideFun();
        return;
      case question > x:
        alert('Загаданное число меньше');
        insideFun();
        return;
      case question < x:
        alert('Загаданное число больше');
        insideFun();
        return;
      default:
        alert('Поздравляю, Вы угадали!!!');
        return;
    }
  }
  insideFun();
}

gameQuestion(randomGenerate());
