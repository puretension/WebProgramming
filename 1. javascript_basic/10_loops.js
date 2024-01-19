/**
 * Loops
 * 
 * 1) for
 * 2) while
 */

for(let i = 0; i < 10; i++){
    console.log(i);
}

for(let i = 0; i < 10; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}      

for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}

// *를 이용해서 6X6 정사각형 만들기
for(let i = 0; i < 6; i++){
    let star = '';
    for(let j = 0; j < 6; j++){
        star += '*';
    }
    console.log(star);
}


/** 
 * for ... in
 */

// key-value
const yujin = {
    name: 'YuJin',
    year: 1995,
}

for(let key in yujin)   {
    console.log(key);
    console.log(yujin[key]);
}

const iveMembersArray = ['안유진', '가을', '장원영'];

console.log('-------------------');

for(let key in iveMembersArray){
    console.log(key);
    console.log(`${key}번째 요소: ${iveMembersArray[key]}`);    
}

/**
 * for ... of
 */

for(let value of iveMembersArray){
    console.log(value);
}

/**
 * While
 */

let number = 0;

while(number < 10){
    console.log(number);
    number++;
}   

