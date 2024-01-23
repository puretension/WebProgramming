## 강의 내용 정리
### type VS interface
- 나에게는 interface가 더 편할거지만... type도 익숙해지자!!(아래가 자연스럽게 읽혀야함)
```typescript
interface Person {
  name: string;
  age: number;
}

type Contact = {
  email: string;
  phone: string;
};

// Interface와 Type을 조합하여 새로운 Type 생성
type PersonWithContact = Person & Contact;

// 또는 Interface를 확장하여 새로운 Interface 생성
interface Employee extends Person {
  employeeId: string;
}

```

### 넓은 타입과 좁은 타입(집합, 벤다이어그램 생각)

```typescript
// type A = string | number; // 넓은 타입
// type B = string; // 좁은 타입
// type C = string & number; // never
// type D = {name: string, age: number};

// type A보다 넓은 타입이 있을까?
type A = { name: string};
type B = {age: number};
type AB = A | B;
type C = A & B;
const ab: AB = {name: 'puretension'}; 
const c: C = {name: 'puretension', age: 1234}; 
```

#### 잉여 속성 검사 
```typescript
// interface A { a: string}
// const obj1: A = { a: 'hello', b: 'world'}; // 잉여 속성 검사로 에러❕ 
interface A { a: string}
const obj = { a: 'hello', b: 'world'};
const obj1: A = obj;
```

### void의 2가지 사용법⭐️
- 리턴값이 void, 매개변수가 void함수, 내부 로직이 void인 함수는 모두 다르다. 
- 구현까지 같이해주자.
- 타입변환시 as unknown as 적극 활용 
```typescript
function a() {} // void
const b = a();

function a(): void {
    return;
    // return 할수 없다 -> return undefined만 가능
    // return undefined;
}

interface Human {
    talk: () => void;
}

const human: Human = {
    // talk() { return 'abc'} //이거도 물론 됨
    talk() {}
}

// 리턴값이 void, 매개변수가 void함수, 내부 로직이 void인거랑은 다 다르다.⭐️

//매개변수도 void, 리턴값도 void
function a(callback: () => void): void {
    callback();
}

a(() => {
    return '3';
});

//매개변수만 void
interface Human {
    talk: () => void;
}

//내부 로직이 void
const human: Human = {
    talk() { return 'abc'; }
}

//선언만 하고 싶을때, but JS로 컴파일 되면서 사라짐 - > 이 주석까지 함께 사라짐ㅋ
declare function forEach(arr: number[], callback: (item: number) => void): void; 

//구현까지 같이 해주자 
function forEach(arr: number[], callback: (item: number) => void): void {
    for (const item of arr) {
        callback(item);
    }
}

// undefined일때 아래의 forEach를 사용하면 에러 -> 'number' 은 'undefined' 형식에 할당불가(에러메시지)
// declare function forEach(arr: number[], callback: (el: number) => undefined): void;
// declare function forEach(arr: number[], callback: (el: number) => string): void;
declare function forEach(arr: number[], callback: (el: number) => void): void; // void는 다통함❕
let target: number[] = [];
forEach([1,2,3], el => target.push(el));

interface A {
    talk: () => void;
}

const a: A = {
    talk() { return 3;}
}

const b = <unknown>a.talk(); // 강제 타입변환 but 리엑트에도 태그가 있어서 이렇게 쓰면 안됨
const c = a.talk() as unknown as number; // ⭐️ as unknown as number⭐️
```


### any와 unknown
- any쓸거면 TS왜씀 ㅇㅇ
- unknown은 선언은 했는데, 타입이 너무 고민될때 선처리 해놓는느낌(후에 지정해주자)

```typescript
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
```