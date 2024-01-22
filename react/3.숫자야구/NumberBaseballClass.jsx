import React, { Component, createRef } from 'react'; // 이렇게 하자
import TryClass from './TryClass';

function getNumbers() { // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
  const candidate = [1,2,3,4,5,6,7,8,9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

class NumberBaseballClass extends Component {
//   state = {
//     result: '',
//     value: '',
//     answer: getNumbers(), // ex: [1,3,5,7]
//     tries: [], // push 쓰면 안 돼요
//   };

state = {
    result: '',
    value: '',
    answer: getNumbers(), // ex: [1,3,5,7]
    tries: [], // push 쓰면 안 돼요
}

// A -> B -> C -> D, 에서 A-> D로 바로 갈 수 있게 해주는 context API, props drilling을 막아줌
shouldComponentUpdate(nextProps, nextState, nextContext){

}

onSubmitForm = (e) => {
    const {value, tries, answer} = this.state;
    e.preventDefault();
    if(value === answer.join('')){
        this.setState((prevState) => {
            return {
                result: '홈런',
                tries: [...prevState.tries, {try:value, result:'홈런'}],
            }
        });
        alert('게임을 다시 시작합니다!');
        this.setState({
            value: '',
            answer: getNumbers(),
            tries: [],
        });
        this.inputRef.current.focus();
    }else {
        const answerArray = value.split('').map((v) => parseInt(v));
        let strike = 0;
        let ball = 0;
        if(tries.length > 9){
            this.setState({
                result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`,
            });
            alert("게임을 다시 시작합니다!");   
            this.setState({
                value: '',
                answer: getNumbers(),
                tries: [],
            });
            this.inputRef.current.focus();
        }else {
            for(let i = 0;i<4;i += 1){
                if(answerArray[i] === answer[i]){
                    strike += 1;
                } else if(answer.includes(answerArray[i])){
                    ball += 1;
                }
            }
            this.setState((prevState) => {
                return {
                    tries: [...prevState.tries, {try: value, result: `${strike} 스트라이크, ${ball}볼입니다.`}],
                    value: '',
                };
            });
            this.inputRef.current.focus();
        }
    }
};

  onChangeInput = (e) => {
    console.log(this.state.answer);
    this.setState({
      value: e.target.value,
    });
  };

  inputRef = createRef(); // this.inputRef

  //  inputRef;
  //  oninputRef = (c) => { this.inputRef = c; };
  //  아래에서 ref = {this.onInputRef}로 사용햇었으나 
  //  위와 같이 inputRef = createRef();로 사용할 수 있음, createRef()는 import 필수
  // onInputRef = (c) => { console.log(); this.inputRef = c; };

  render() {
    const { result, value, tries } = this.state; // 비구조화 할당(this.state.result를 result로)
    // setState를 하면 render()가 다시 실행되므로, render() 안에 setState를 넣으면 무한 반복
    return (
      <>
        <h1>{result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input ref={this.inputRef} maxLength={4} value={value} onChange={this.onChangeInput} />
        </form>
        <div>시도: {tries.length}</div>
        <ul>
          {tries.map((v, i) => {
            return (
              <TryClass key={`${i + 1}차 시도 :`} tryInfo={v} />
            );
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseballClass; // import NumberBaseball;
