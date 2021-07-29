import calculate from '../logic/calculate';

describe('These are unit tests for calculator logic', () => {
  test('Should return 0 when app starts:', () => {
    const result = { next: '0', operation: null, total: '0' };
    const { next, total, operation } = { next: null, total: null, operation: null };
    const btnName = '0';
    expect(calculate({ next, total, operation }, btnName)).toEqual(result);
  });

  test('Should return 2 when summing 1 plus 1:', () => {
    const result = { next: '2', operation: '=', total: '2' };
    const { next, total, operation } = { next: 1, total: 1, operation: '+' };
    const btnName = '=';
    expect(calculate({ next, total, operation }, btnName)).toEqual(result);
  });

  test('Should clean operation and total and show 0 when presing AC:', () => {
    const result = { next: '0', operation: null, total: null };
    const { next, total, operation } = { next: 1, total: 1, operation: '+' };
    const btnName = 'AC';
    expect(calculate({ next, total, operation }, btnName)).toEqual(result);
  });

  test('Should change sign when pressing +/-:', () => {
    const result = { next: '-1', operation: null, total: 1 };
    const { next, total, operation } = { next: 1, total: 1, operation: null };
    const btnName = '+/-';
    expect(calculate({ next, total, operation }, btnName)).toEqual(result);
  });
});
