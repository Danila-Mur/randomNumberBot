const isNumber = (num) => {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

function gameQuestion(x) {
  function insideFun() {
    const question = +prompt('Угадай число от 1 до 100');

    console.log(question);
    console.log(x);

    if (question === null || question === 0) {
      alert('Игра окончена');
    } else if (!isNumber(question)) {
      alert('Введите число!');
      insideFun();
    } else if (
      question !== x &&
      (question > 100 || question > x) &&
      question !== 0
    ) {
      alert('Загаданное число меньше');
      insideFun();
    } else if (
      question !== x &&
      (question < 1 || question < x) &&
      question !== 0
    ) {
      alert('Загаданное число больше');
      insideFun();
    } else if (question === x && question !== 0) {
      alert('Поздравляю, Вы угадали!!!');
    }
  }
  insideFun();
}

gameQuestion(50);
