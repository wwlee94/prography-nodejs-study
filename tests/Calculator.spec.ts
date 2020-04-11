import { Calculator } from '../src/Calculator';

describe('test Calculator', () => {
  const calculator = new Calculator();

  test('add 2 + 3 = 5', () => {
    expect(calculator.add(2, 3)).toEqual(5);
  });
});
