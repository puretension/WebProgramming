"use strict";
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
//매개변수도 void, 리턴값도 void
function a(callback) {
    callback();
}
a(() => {
    return '3';
});
//내부 로직이 void
const human = {
    talk() { return 'abc'; }
};
// function forEach(arr: number[], callback: (item: number) => void): void {
//     for (const item of arr) {
//         callback(item);
//     }
// }
