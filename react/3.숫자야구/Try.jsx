import React, {PureComponent, memo, useState} from 'react';

//  자식컴포넌트는 state가 바꼈을때, props가 바꼈을때, 부모컴포넌트가 리렌더링될때 리렌더링된다.
// 아래의 memo를 사용하면 자식컴포넌트가 리렌더링되지 않는다.

const Try = memo(({tryInfo}) => {
    // tryInfo.try = 'hello'; // 자식컴포넌트에서 props를 바꾸면 안됨. (불변성을 지켜야한다. 부모에서 바꿔줘야함)
     // 부모에서 바꿔줘야함(state를 사용하면 부모에서 바꿔줄 수 있음!).props를 state로 바꿔서 바꿔준다.
    const [result, setResult] = useState(tryInfo.result);
    const onClick = () => {
        setResult('1'); 
    }
    return (
        <li>
            <div>{tryInfo.try}</div>
            <div onClick={onClick}> {tryInfo.result}</div>
        </li>
    )
});

Try.displayName = 'Try'; // 이름을 지정해주면 개발자도구에서 컴포넌트 이름을 확인할 수 있다.(안하면 이상하게 바뀜)

export default Try;
