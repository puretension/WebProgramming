"use strict";
// // let a: string = 'hello';
// // a = 1234; // Error: Type 'number' is not assignable to type 'string'.
// const a: string = 'Hello';
// const b: number = 1234;
// const c: boolean = true;
// const d: undefined = undefined;
// const e: null = null;
// const f: any = true; // JS에서...
// const exactF: true = true;
// //1. basic function
// function add(x: number, y: number): number { return x + y}
// function sub(x:number, y: number): number {return x - y}
// // function arrow
// const addTs = (x: number, y: number): number => x + y;
// const subTs = (x:number, y:number): number => x - y;
// //2. type
// type Add = (x: number, y:number) => number;
// const addNow: Add = (x, y) => x + y;
// type Sub = (x: number, y:number) => number;
// const subNow: Sub = (x,y) => x - y;
// //3. interface
// interface AddInterface {
//     (x:number, y: number): number;
// }
// const addInterface: AddInterface = (x, y) => x + y;
// //4. array
// const obj: {lat: number, lon: number} = {lat: 123, lon: 456};
// const arr: string[] = ['a', 'b', 'c'];
// const arr2: number[] = [1,2,3];
// const arr3: Array<number> = [123,456];
// //5. tuple
// const tupleArray: [number, number, string] = [123,456,'hello'];
// // 아래처럼 타입만,선언만 가능
// function addDeclare(x: number, y:number): number; //JS변환시 이부분은 사라짐 
// function addDeclare(x: number,y: number){
//     return x + y;
// }
// //6 . unknown as number
// let aa = 123;
// aa = 'hello' as unknown as number; // as unknown as number : 타입단언
// //7. never  
// try{
//     // const array = []; ❌ -> never
//     const array: string[] = []; //타입 선언은 필수
//     array.push('hello');
// }catch(e){
//     e;
// }
// const head:  Element = document.querySelector('#head')!;
// if(head) {
//     //'inneHTML' 속성이 'Element' 형식에 없습니다. 'innerHTML'을(를) 사용하시겠습니까? -> 개꿀(오타 고통 감소!)
//     //div id = "head" 가 맞는데 오타로 header로 적어서 발생한 문제? TS에서는 잡아줌
//     // head.inneHTML = 'hello';
//     // const head = document.querySelector('#head')!; // ! : null이 아님을 확신할때만, 일반적으론 비추천
//     if(head) {
//         head.innerHTML = 'hello';
//     }
// }
