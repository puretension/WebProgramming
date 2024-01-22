import React, { memo } from 'react'; //말단 자식 컴포넌트는 PureComponent/memo를 임포트

//hoc(higher order component) : 컴포넌트를 다른 컴포넌트로 감싸는것.
//hooks가 아니고 함수 컴포넌트임. hooks는 useState, useEffect 등을 사용
const Ball = memo(({number}) => {
    let background;
    if(number <= 10){
        background = 'red';
    }else if(number <= 20){
        background = 'orange';
    }else if(number <= 30){
        background = 'yellow';
    }else if(number <= 40){
        background = 'blue';
    }else{
        background = 'green';
    } return (
        <div className="ball" style={{background}}>{number}</div>
    );
});

export default Ball;

// class Ball extends PureComponennt {
//     render() {
//         const {number} = this.props;
//         let background;
//         if(number <= 10) {
//             background = 'red';
//         } else if(number <= 20) {
//             background = 'orange';
//         } else if(number <= 30) {
//             background = 'yellow';
//         } else if(number <= 40) {
//             background = 'blue';
//         } else {
//             background = 'green';
//         }

//         return (
//             <div className="ball" style={{background}}>{number}</div>
//         )
//     }
// }