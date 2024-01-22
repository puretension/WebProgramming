/**
 * Operators(연산자)
 */

/**
 * 산술 연산자
 * 
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */
console.log("-----------------------------------");
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);

let number = 1;
console.log(number);
number++;
number--;
console.log(number); // 3

/**
 * 연산자의 위치
 */

let result = 1;
console.log(result);

result = number++;
console.log(result, number); //1 2
result = ++number;
console.log(result, number); //3 3

/*
*숫자 타입이 아닌 타입에 +, - 사용하면 어떻게 될까?
*/
console.log("-----------------------------------");
let sample = '99';
console.log(+sample); // 99
console.log(typeof +sample); // number(숫자로 변환됨)

console.log(sample); // 99
console.log(typeof sample); // string

sample = true;
console.log(+sample) // 1
console.log(typeof +sample); // number

sample = false;
console.log(+sample); // 0
console.log(typeof +sample); // number

sample = 'yujin';
console.log(+sample); // NaN    

sample = '99';
console.log(-sample); // -99
console.log(typeof -sample); // number

/**
 * 할당 연산자(assignment operator)
 */
console.log("-----------------------------------");
number = 100;
console.log(number); // 100

number += 10;
console.log(number); // 110

number -= 10;
console.log(number); // 100 

number *= 10;
console.log(number); // 1000

number /= 10;
console.log(number); // 100 

number %= 10;   
console.log(number); // 0

/**
 * 비교 연산자(comparison operator)
 *
 * 1) 값의 비교
 * 2) 값과 타입의 비교
*/
console.log("-----------------------------------");
// 타입이 다르더라도 값이 같으면 true

console.log(10 == 10); // true
console.log(10 == '10'); // true
console.log(0 == ''); // true
console.log(true == 1); // true
console.log(false == 0); // true

//타입도 같고, 값도 같아야 true, 실무에서 비교는 무조건 ===를 사용한다.
console.log("===");  //⭐️ 이거랑
console.log(10 === 10); // true
console.log(10 === '10'); // false(타입이 다르기 때문에!)
console.log(0 === ''); // false(타입이 다르기 때문에!)
console.log(10 === '10'); // false(타입이 다르기 때문에!)
console.log(true === 1); // false(타입이 다르기 때문에!)

console.log("-----------------------------------");
console.log("!=");
console.log(10 != 10); // false
console.log(10 != '10'); // false
console.log(0 != ''); // false
console.log(true != 1); // false    
console.log(false != 0); // false

console.log("-----------------------------------");
console.log("!=="); //⭐️ 이거 주로 사용
console.log(5 !== 5); // 같으니까
console.log(5 !== '5');
console.log(0 !== '');
console.log(true !== 1);
console.log(false !== 0);
console.log(true !== '1');

console.log("-----------------------------------");

/**
 * 대소 관계 비교 연산자
 */

console.log(100 > 1);
console.log(100 >= 1);
console.log(100 == '100');

/** 
 * 삼항 조건 연산자(ternary operator)
 */

console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');

/** 
 * 논리 연산자
 * 
 * 1) &&
 * 2) ||
 */

// &&조건은 모두 true여야 true를 반환한다
console.log(true && true); //true
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("-----------------------------------");

// ||는 하나만 true여도 true를 반환한다.
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false); //false

console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 > 1 && 20 < 2);

/**
 * 단축평가 (short-circuit evaluation)
 * 암기하자!✅
 * && 사용했을때 좌측이 true면 우측을 반환하고, 
 * 좌측이 false면 좌측을 반환한다.
 * || 사용했을때 좌측이 true면 좌측을 반환하고, 
 * 좌측이 false면 우측을 반환한다.
 */

console.log(true && 'hello'); //hello
console.log(false && 'hello'); //false
console.log(true || 'hello'); //true    
console.log(false || 'hello'); //hello

console.log(true && true && 'codeit'); //codeit  
console.log(true && false && 'codeit'); //false


/** 
 * 지수 연산자
 */

console.log(3 ** 2); //9
console.log(   2 ** 2 ** 3   ); //256

/** 
 * null 연산자
 */

let name;
console.log(name); //undefined

name = name ?? "YuJin";
console.log(name); //YuJin

