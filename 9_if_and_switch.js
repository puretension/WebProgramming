/**
 * If and Switch
 */

let number = 5;

if(number % 2 === 0) {
    console.log('number 변수는 짝수입니다.');
}else{
    console.log('number 변수는 홀수입니다.');
}

if(number % 2 === 0){
    console.log('number 변수는 2의 배수입니다.');   
} else if(number % 3 === 0){
    console.log('number 변수는 3의 배수입니다.');
} else if(number % 4 === 0){
    console.log('number 변수는 4의 배수입니다.');
}else if(number  % 5 === 0){
    console.log('number 변수는 5의 배수입니다.');
}else{
    console.log('number 변수는 2,3,4,5의 배수가 아닙니다.');
}

const englishDay = 'monday';

let koreanDay;

switch(englishDay){
    case 'monday':
        koreanDay = '월요일';
        break; //break를 만나면 switch문을 빠져나옴
    case 'tuesday':
        koreanDay = '화요일';
        break;
    case 'wednesday':
        koreanDay = '수요일';
        break;  
    case 'thursday':
        koreanDay = '목요일';
        break;  
    case 'friday':
        koreanDay = '금요일';
        break;  
    default:
        koreanDay = '주말';
        break;
}

console.log(`${englishDay}에 해당하는 한국어는 ${koreanDay}입니다.`);
