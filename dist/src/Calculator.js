"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 런타임 오류는 안좋은 것
// 미리 컴파일 단계에서 에러를 판단해주는 것이 좋아서 TypeScript를 사용하는 것
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
// const calculator = new Calculator();
//  console.log(calculator.add(1, 2)); // 1. 정상 실행
//  console.log(calculator.subtract(2, 1)); // 2. 코드상 오류로 걸림 - private 메서드 접근 불가
//  console.log(calculator.multiply(3, 4)) // 3. 코드상 오류로 걸림 - 없는 메서드
//  console.log(calculator.add('a', 'b')); // 4. 코드상 오류로 걸림 - 파라미터 타입 불일치
