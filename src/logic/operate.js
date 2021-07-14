import Big from 'big';

const operate = (numberOne, numberTwo, operation) => {
  let bigNumuberOne;
  let bigNumberTwo;
  if (numberOne) {
    bigNumuberOne = Big(numberOne);
  }
  if (numberTwo) {
    bigNumberTwo = Big(numberTwo);
  }
  try {
    switch (operation) {
      case '+/-':
        return bigNumuberOne.times(-1);
      case '+':
        return bigNumuberOne.plus(bigNumberTwo);
      case '-':
        return bigNumuberOne.minus(bigNumberTwo);
      case 'X':
        return bigNumuberOne.times(bigNumberTwo);
      case '÷':
        return bigNumuberOne.div(bigNumberTwo);
      case '%':
        return bigNumuberOne.div(100);
      default:
        return '0';
    }
  } catch (error) {
    return 'Error';
  }
};

export default operate;
