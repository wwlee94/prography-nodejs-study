// import { Calculator } from "../src/Calculator";

import { Calculator } from "../src/Calculator";

describe('test Calulator', () => {
    const calculator = new Calculator;
    test('add 2 + 3 = 5', () => {
        expect(calculator.add(2,3)).toEqual(5);
    });
})