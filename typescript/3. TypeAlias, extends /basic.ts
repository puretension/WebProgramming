// type vs interface

// type Animal = { breath: true};
// type Mammal = Animal & {breed: true};
// type Human = Mammal & {think: true};

// const puretension: Human = {breath: true, breed: true, think:true}; 

// interface A{
//     breath: true
// }

// interface B extends A{
//     breed: true
// }

// const b : B = { breath: true, breed: true};

// const me: Human = {breath: true, breed: true, think: true};

// interface D{
//     talk: () => void;
// }

// interface E{
//     eat: () => void;
// }

// interface F{
//     run: () => void;
// }

// 이전 타입스크립트에서는 이렇게 했었음
// interface IProps {}
// type TAlias = string | number;
// enum EHello {
//     Left,
//     Right,
// }


// 타입 범위⭐️
// type A = string | number; // 넓은 타입
// type B = string; // 좁은 타입
// type C = string & number; // never
// type D = {name: string, age: number};

// // type A보다 넓은 타입이 있을까?
// type A = { name: string};
// type B = {age: number};
// type AB = A | B;
// type C = A & B;
// const ab: AB = {name: 'puretension'}; 
// const c: C = {name: 'puretension', age: 1234}; 

// const d: AB = c; // AB는 C보다 넓은 타입이다.
// // const e: C = ab; // 에러❕ C는 AB보다 좁은 타입이다.   
// // const k: C = {name: 'puretension', age: 1234, married: true};  //잉여 속성 검사로 에러❕


// // interface A { a: string}
// // const obj1: A = { a: 'hello', b: 'world'}; // 잉여 속성 검사로 에러❕ 
// interface A { a: string}
// const obj = { a: 'hello', b: 'world'};
// const obj1: A = obj;