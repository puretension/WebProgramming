/**
 * Data Types
 * 
 * JS는 
 * 6개의 Primitive Types과
 * 1개의 Object Type
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리안)
 * 4) undefined (미정의)
 * 5) null
 * 6) Symbol (심볼)
 * 7) Object (객체)
 *      Function
 *      Array
 *      Object
 */

const age = 32;
const temperature = -10;
const pi = 3.14;

console.log(typeof(age));
console.log(typeof(temperature));
console.log(typeof(pi));

const infinity = Infinity; 
const nInfinity = -Infinity;

console.log(typeof infinity); // Number
console.log(typeof -Infinity);

console.log('----------');


/** 
 * String 타입
 */

const codeFactory = '코드팩토리'; // 작은 따옴표로 선언해도 되고, 
console.log(typeof codeFactory);

const ive = "'아이브' 안유진"; // 큰 따옴표로 선언해도 된다!
console.log(ive);

console.log('----------');

/**
 * Template Literal
 * 
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면? 두번 입력하면 된다!
 */

const iveYuJin = 'ive\nYuJin';
console.log(iveYuJin);
const iveWonYoung = '아이브\t장원영';
console.log(iveWonYoung);
const backSlash = '아이브\\코드팩토리';
console.log(backSlash);
const smallQutoation = '아이브\'코드팩토리'; // '/'를 무조건 써서 구분하니 귀찮음
console.log(smallQutoation);

console.log('----------');

// backtick ( ` )을 통해 빠르게!
const iveWonYoung2 = `아이브 
장원영`;
console.log(iveWonYoung2);

console.log(typeof iveWonYoung2);

const groupName = 'ive';
console.log(groupName + ' YuJin'); 
console.log(`${groupName} YuJin`); // `${}

console.log('----------');

/**
 * Boolean 타입
 */

const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

/**
 * Undefined
 * 
 * 사용자가 직접 값을 초기화하지 않았을때
 * 지정되는 값
 * 
 */

let noInit; //값 배정을 조금 있다가 하겟어!
console.log(noInit);
console.log(typeof noInit);

console.log('----------');

/**
 * null 타입
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나,
 * JS에서는 개발자가 명시적으로 없!는!값으로 초기화할때 사용함
 */
let init = null;
console.log(init); // null
console.log(typeof init); //object타입으로 출력됨(받아들이자)

console.log('----------');

/**
 * Symbol 타입
 * 
 * one-and-only 값 생성할때 사용함
 * 다른 private 값들과 다르게 Symbol 함수 호출해서 사용함
 */

const test1 = '1';
const test2 = '1';

console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2);

console.log('----------');

/**
 * ⭐️ Object 타입
 * 
 * Map
 * Key-Value 쌍
*/

const dictionary = {
    red: 'red',
    orange: 'orange',
    yellow: 'yellow',
}

console.log(dictionary);
console.log(dictionary['red']);

console.log(dictionary['orange']);

console.log(typeof dictionary); // object 타입

console.log('----------');

/**
 * Array 타입
 * 값을 List로! 
 */

const languageArray = [
    'C',
    'Java',
    'Dart',
    'Python',
];

console.log(languageArray[0]);
console.log(languageArray[2]);

languageArray[0] = 'C++';
console.log(languageArray[0]);
console.log(typeof languageArray);


/**
 * static typing -> 변수 선언시 타입까지 함께 선언 like C
 * dynamic typing -> 변수 타입을 명시적으로 선언X, 값에 의해 "추론"
 * JS -> dynamic typing
 */