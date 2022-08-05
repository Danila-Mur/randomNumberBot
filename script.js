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
      case question > x:
        alert('Загаданное число меньше');
        insideFun();
      case question < x:
        alert('Загаданное число больше');
        insideFun();
      default:
        alert('Поздравляю, Вы угадали!!!');
        break;
    }
  }
  insideFun();
}

gameQuestion(randomGenerate());
