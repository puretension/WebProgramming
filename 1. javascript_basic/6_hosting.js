/** 
 * Hosting
 */

console.log("Hello");
console.log("World");

//Hoisting 
console.log(name); //undefined
var name = 'Code Factory';
console.log(name);

/**
 * Hoisting이란
 * ⭐️모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상⭐️
 * Execution Contexting에서 이해 가능 
 */

//  //Cannot access 'yuJin' before initialization, let, const
// console.log(yuJin);
// let yuJin = 'YuJin';

// //yuJin is not defined
// console.log(yuJin);
