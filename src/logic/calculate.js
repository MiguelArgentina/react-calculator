import {
  operate
} from "./operate"

export const calculate = (calculatorData, btnName) => {

  const {
    total,
    next,
    operation
  } = calculatorData;

  if (
    btnName == '.' ||
    Array.from(Array(10).keys()).includes(Number(btnName))
  ) {
    return {
      total,
      next: next + btnName,
      operation
    }
  }

  switch (btnName) {
    case 'AC':
      return {
        total: '0',
          next: null,
          operation: null
      }
    case '+':
    case '-':
    case 'x':
    case '/':
      if (operation) {
        return {
          total: operate(Number(total), Number(next), operation),
          next: String(total),
          operation: btnName
        }
      } else {
          return {
            total,
            next,
            operation: btnName
          }
      }
    case '=':
      return {
        total: operate(Number(total), Number(next), operation),
        next: String(total),
        operation: null
      }
    case '%':
      return {
        total: operate(Number(total), Number(next), btnName),
        next: String(total),
        operation: null
      }
    case '+/-':
      return {
        total: operate(Number(total), Number(next), btnName),
        next: String(total),
        operation: operation
      }
    default:
      break;
  }
}