import operate from './operate';

const calculate = (calculatorData, btnName) => {
  const {
    total,
    next,
    operation,
  } = calculatorData;

  if (Array.from(Array(10).keys()).includes(Number(btnName))) {
    if (operation === '=') {
      return {
        total: total || '0',
        next: btnName,
        operation: null,
      };
    }
    if (next === '0' || next === 'Error') {
      return {
        total: total || '0',
        next: btnName,
        operation,
      };
    }
    return {
      total: total || '0',
      next: next ? next + btnName : btnName,
      operation,
    };
  }

  switch (btnName) {
    case '.':
      if (next.includes('.')) {
        return {
          total,
          next,
          operation,
        };
      }
      return {
        total: total || '0',
        next: next ? next + btnName : btnName,
        operation,
      };
    case 'AC':
      return {
        total: null,
        next: null,
        operation: null,
      };
    case '+':
    case '-':
    case 'X':
    case '÷':
      if (operation) {
        return {
          total: operate(Number(total), Number(next), operation),
          next: '0',
          operation: btnName,
        };
      }
      return {
        total: String(next),
        next: null,
        operation: btnName,
      };

    case '=':
      return {
        total: operate(Number(total), Number(next), operation),
        next: operate(Number(total), Number(next), operation),
        operation: '=',
      };
    case '%':
      return {
        total,
        next: operate(Number(next), Number(next), btnName),
        operation,
      };
    case '+/-':
      return {
        total,
        next: operate(Number(next), Number(next), btnName),
        operation,
      };
    default:
      return {
        total,
        next,
        operation,
      };
  }
};

export default calculate;
