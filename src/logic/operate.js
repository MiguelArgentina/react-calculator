import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  Big.DP = 10;
  let bigNumberOne;
  let bigNumberTwo;

  if (numberOne) {
    bigNumberOne = new Big(numberOne);
  }
  if (numberTwo) {
    bigNumberTwo = new Big(numberTwo);
  }
  try {
    switch (operation) {
      case '+/-':
        return String(bigNumberOne.times(-1));
      case '+':
        return String(bigNumberOne.plus(bigNumberTwo));
      case '-':
        return String(bigNumberOne.minus(bigNumberTwo));
      case 'X':
        return String(bigNumberOne.times(bigNumberTwo));
      case '÷':
        return String(bigNumberOne.div(bigNumberTwo));
      case '%':
        return String(bigNumberOne.div(100));
      default:
        return '0';
    }
  } catch (error) {
    return 'Error';
  }
};

export default operate;
