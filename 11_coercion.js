/**
 * 타입 변환
 * Type Conversion (Type Casting) and Coercion
 * 1) 명시적
 * 2) 암묵적
 */

let age = 32;
console.log(age, typeof age); // 32 number

// 1) 명시적
let stringAge = age.toString();
console.log(stringAge, typeof stringAge); // 32 string

let test = age + '';
console.log(test, typeof test); // 32 string

console.log('98' + 2); // 982⭐️
console.log('98' - 2);  // 96
console.log(98 * 2); // 196

/**
 * 명시적 변환 몇가지 더 배우기
 */

console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log(typeof + '1', +'1')
console.log(typeof Number('0'), Number('0'));

/**
 * Boolean 타입으로 변환
 */

//값이 없거나, 실제숫자 0, false, null, undefined, NaN은 false로 변환
//나머지는 true. 걍 외우자!

console.log(!!'asdsdsadad'); // true
console.log(!!''); // false
console.log(!!0); // false
console.log(!!false); // false
console.log(!!'false'); //true
console.log(!!undefined);
console.log(!!null); // false
console.log(!!{}); // true(객체는 무조건 true)⭐️

/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 숫자 0
 * 4) false
 * 5) null
 * 6) undefined
 * 7) NaN
 */