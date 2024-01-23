const a: string = 'hello';
const b: String = 'hell'; // String은 래퍼객체, string은 원시타입  -> 원시타입을 쓰는게 좋음
// 템플릿 리터럴 타입 유니온 타입과 함께 사용
type World = "world" | "hell";
const world: World = 'world'; // ctrl + space -> 자동완성 추천 단축키

// 템플릿 리터럴 타입
type Greeting = `hello ${World}`;// type Greeting = "hello world";
const c: Greeting = 'hello world';

// rest는 배열로 받으며, args는 모든 인자를 받는다(아래처럼 타입 설정가능)
function rest(...args: number[]){
    console.log(a, args); // hello [ 1, 2, 3 ]
}

rest(1,2,3);

// 컴파일 시점에 인라인으로 대체되며, 최종 JavaScript 코드에는 해당 enum의 흔적이 남지 않는다.
const enum EDirection{
    Up,
    Down,
    Left,
    Right
}

const aNum = EDirection.Up;
const bNum = EDirection.Down;   
function walk(dir: EDirection) {}

// Enum은 이런방식으로 하자. const Type {} as const;
// as const는 객체의 속성을 읽기 전용(readonly)으로 만들고, 리터럴 타입으로 좁혀주는 역할, 최종 JS코드에도 반영됨
const ODirection = {
    Up: 0,
    Down: 1,
    Left:  2,
    Right: 3,
} as const;

//  typeof ODirection: ODirection 객체의 타입을 가져옵니다. 
//  이 타입은 { Up: 0; Down: 1; Left: 2; Right: 3; }와 같이 됩니다.
//  keyof typeof ODirection: ODirection 객체 타입의 모든 키
//  (여기서는 Up, Down, Left, Right)를 
//  유니온 타입으로 가져옵니다. 결과적으로 "Up" | "Down" | "Left" | "Right"가 됩니다.

// key만 뽑아내고 싶다면? 
const obj = {a: '123', b: '456', c: '789'} as const;
type Key = keyof typeof obj; // type Key = "a" | "b" | "c", 
//value만 뽑아내고 싶다면?
// type Key = typeof obj[keyof typeof obj]; // type Key = "123" | "456" | "789"

type Direction = typeof ODirection[keyof typeof ODirection];
function run(dir: Direction) {} //

run(ODirection.Up);


// // type vs interface -> 간단한건 type, 복잡한건 interface
// type A = {a: string};
// const aType:A = {a: 'hello'};

// interface B {a: string};
// const bInterface:B = {a: 'hello'};

// // union type
// // ❌ -> 리턴타입이 string | number
// // function add(x: string | number, y: string | number): string | number {return x + y} 

// // 모든 속성이 다 있어야하는 intersection, 1개만 있어도 되는 union
// type A = {hello: 'world'} & {zero: 'cho'};
// const a: A = {hello: 'world', zero: 'cho'};

// type B = {hello: 'hello'} | {scott: 'tiger'};
// const b: B = {hello: 'hello'}; // 가능 
