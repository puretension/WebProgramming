// function a() {} // void
// const b = a();

// function a(): void {
//     return;
//     // return 할수 없다 -> return undefined만 가능
//     // return undefined;
// }

// interface Human {
//     talk: () => void;
// }

// const human: Human = {
//     // talk() { return 'abc'} //이거도 물론 됨
//     talk() {}
// }

// 리턴값이 void, 매개변수가 void함수, 내부 로직이 void인거랑은 다 다르다.

// //매개변수도 void, 리턴값도 void
// function a(callback: () => void): void {
//     callback();
// }

// a(() => {
//     return '3';
// });

// //매개변수만 void
// interface Human {
//     talk: () => void;
// }

// //내부 로직이 void
// const human: Human = {
//     talk() { return 'abc'; }
// }

// //선언만 하고 싶을때, but JS로 컴파일 되면서 사라짐 - > 이 주석까지 함께 사라짐ㅋ
// declare function forEach(arr: number[], callback: (item: number) => void): void; 

// function forEach(arr: number[], callback: (item: number) => void): void {
//     for (const item of arr) {
//         callback(item);
//     }
// }

// // undefined일때 아래의 forEach를 사용하면 에러 -> 'number' 은 'undefined' 형식에 할당불가(에러메시지)
// // declare function forEach(arr: number[], callback: (el: number) => undefined): void;
// // declare function forEach(arr: number[], callback: (el: number) => string): void;
// declare function forEach(arr: number[], callback: (el: number) => void): void; // void는 다통함❕
// let target: number[] = [];
// forEach([1,2,3], el => target.push(el));

// interface A {
//     talk: () => void;
// }

// const a: A = {
//     talk() { return 3;}
// }

// const b = <unknown>a.talk(); // 강제 타입변환 but 리엑트에도 태그가 있어서 이렇게 쓰면 안됨
// const c = a.talk() as unknown as number; // ⭐️ as unknown as number⭐️

// any VS unknown 
interface A {
    talk: () => void;
}

const a: A = {
    talk() { return 3;}
}

const b: unknown = a.talk(); // unknown 예제
(b as A).talk(); // 이렇게 쓰는게 맞다


try{

}catch(error){
    //여기서 error는 unknown 타입임. 
    (error as Error).message;
}