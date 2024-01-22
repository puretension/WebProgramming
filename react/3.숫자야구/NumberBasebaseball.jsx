import React, { useState } from 'react';
import Try from './Try';

function getNumbers() { // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
  const candidate = [1,2,3,4,5,6,7,8,9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

const NumberBaseball = () => {
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    // const [answer, setAnswer] = useState(getNumbers());
    const [answer, setAnswer] = useState(getNumbers); // lazy init(함수형태로 넣어주면 처음 렌더링될때만 실행됨)
    const [tries, setTries] = useState([]);

    const onSubmitForm = (e) => {
        if(value === answer.join('')){
            // this.setState((prevState) => {
            //     return {
            //         result: '홈런',
            //         tries: [...prevState.values, {try:value, result:'홈런'},]
            //     }
            // });
            setResult('홈런');
            //이전 tries에서의 변화가 필요할땐 prevState를 사용해야함
            setTries((prevTries) => {
               return [...prevTries, {try: value, result: '홈런'}]
            });

            alert('게임을 다시 시작합니다!');
            // this.setState({
            //     value: '',
            //     answer: getNumbers(),
            //     tries: [],
            // });

            setValue('');
            setAnswer(getNumbers());
            setTries([]);   

            this.inputRef.current.focus();
        }else{
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;

            if(tries.length >= 9){
                // this.setState({
                //     result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`,
                // })
                setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`);
                alert("게임을 다시 시작합니다!");
                // this.setState({
                //     value: '',
                //     answer: getNumbers(),
                //     tries: [],
                // });
                setValue('');
                setAnswer(getNumbers());
                setTries([]);
                this.inputRef.current.focus();
            }else {
                for(let i = 0;i<4;i+= 1){
                    if(answerArray[i] === answer[i]){
                        strike += 1;
                    } else if(answer.includes(answerArray[i])){
                        ball += 1;
                    }
                }
                // this.setState((prevState) => {
                //     return {
                //         tries: [...prevState.tries, {try: value, result: `${strike} 스트라이크, ${ball}볼입니다.`}],
                //         value: '',
                //     };
                // });
                // setTries((prevTries) => [...prevTries, {try: value, result: `${strike} 스트라이크, ${ball}볼입니다.`}]);
                // setValue('');
                setTries((prevTries) => [...prevTries, {try: value, result: `${strike} 스트라이크, ${ball}볼입니다.`}]);
                this.inputRef.current.focus();
            }
        }
    };

    // const onChangeInput = (e) => {
    //     console.log(this.state.answer);
    //     this.setState({
    //       value: e.target.value,
    //     });
    //   };

    // const onChangeInput = (e) => {
    //     console.log(answer);
    //     this.setState({
    //         value: e.target.value,
    //     });
    // };
    
    //   inputRef = createRef(); // this.inputRef

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };
    
    //   render() {
    //     const { result, value, tries } = this.state; // 비구조화 할당(this.state.result를 result로)
    //     return (
    //       <>
    //         <h1>{result}</h1>
    //         <form onSubmit={this.onSubmitForm}>
    //           <input ref={this.inputRef} maxLength={4} value={value} onChange={this.onChangeInput} />
    //         </form>
    //         <div>시도: {tries.length}</div>
    //         <ul>
    //           {tries.map((v, i) => {
    //             return (
    //               <TryClass key={`${i + 1}차 시도 :`} tryInfo={v} />
    //             );
    //           })}
    //         </ul>
    //       </>
    //     );
    //   }

    // 부모 컴포넌트가 리렌더링되면 자식 컴포넌트들도 리렌더링됨
    // 자식 리렌더링은 어떻게 막나?
    // -> PureComponennt 사용(Class, 클래스형 컴포넌트에서 사용)
    // -> memo(Hooks, 함수형 컴포넌트에서 사용)
    return (
        <>
         <h1>{result}</h1>
         <form onSubmit={onSubmitForm}>
            <input ref={inputRef} maxLength={4} value={value} onChange={onChangeInput}/>
         </form>
         <div>시도: {tries.length}</div>
         <ul>
            {tries.map((v,i) => {
                return (
                    <Try key={`${i + 1}차 시도: `} tryInfo={v} />
                );
            })}
         </ul>
        </>
    );
    

};

export default NumberBaseball; // import NumberBaseball;
