import React, { Component } from 'react';
import Ball from './Ball.jsx';

//console.log로 자주 확인해보자

//당첨 번호를 생성하는 함수
// 1부터 45까지의 숫자 중에서 무작위로 6개를 선택하고, 마지막 번호를 보너스 번호로 설정
// function getWinNumbers() {
//   console.log('getWinNumbers');
//   const candidate = Array(45).fill().map((v, i) => i + 1);
//   const shuffle = [];
//   while (candidate.length > 0) {
//     shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
//   }
//   const bonusNumber = shuffle[shuffle.length - 1];
//   const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
//   return [...winNumbers, bonusNumber];
// }
function getWinNumbers() {
  console.log('getWinNumbers');
  const candidate = Array(45).fill().map((v,i) => i + 1); //1~45까지의 숫자를 candidate에 넣음
  const shuffle = []; //무작위로 섞은 숫자를 넣을 배열
  while(candidate.length > 0) {
    //candidate의 길이가 0보다 클 때까지 반복
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]); //candidate에서 랜덤으로 하나 뽑아서 shuffle에 넣음
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0,6).sort((p,c) => p - c);
  return [...winNumbers, bonusNumber];
}

class LottoClass extends Component {
  state = {
    winNumbers: getWinNumbers(), // 당첨 숫자들
    winBalls: [],
    bonus: null, // 보너스 공
    redo: false,
  };

  timeouts = [];

  // runTimeouts = () => {
  //   console.log('runTimeouts');
  //   const { winNumbers } = this.state;
  //   for (let i = 0; i < winNumbers.length - 1; i++) {
  //     this.timeouts[i] = setTimeout(() => {
  //       this.setState((prevState) => {
  //         return {
  //           winBalls: [...prevState.winBalls, winNumbers[i]],
  //         };
  //       });
  //     }, (i + 1) * 1000);
  //   }
  //   this.timeouts[6] = setTimeout(() => {
  //     this.setState({
  //       bonus: winNumbers[6],
  //       redo: true,
  //     });
  //   }, 7000);
  // };

  runTimeouts = () => {
    console.log('runTimeouts');
    const {winNumbers} = this.state;
    //winNumbers 배열의 각 숫자에 대해 작업을 수행
    for(let i = 0;i<winNumbers.length - 1;i++){
      this.timeouts[i] = setTimeout(() => {
        //setTimeout 함수 내부에서 this.setState를 호출하여 winBalls 상태를 업데이트
        this.setState((prevState) => {
          return {
            //prevState.winBalls 배열에 새로운 번호를 추가
            winBalls:[...prevState.winBalls,winNumbers[i]],
          };
        });
      }, i+1 * 1000); //각 setTimeout은 i+1 * 1000 밀리초 후에 실행
    }
    this.timeouts[6] = setTimeout(() => {
      this.setState({
        bonus:winNumbers[6],
        redo:true,
      });
    }, 7000); 
    // bonus 상태를 winNumbers 배열의 마지막 요소로 설정하고,
    // redo 상태를 true로 변경하여 사용자가 게임을 다시 시작할 수 있도록
  }

  //⭐️컴포넌트가 마운트된 후(처음 화면에 렌더링된 후)실행.
  componentDidMount() {
    console.log('didMount');
    this.runTimeouts();
    console.log('로또 숫자를 생성합니다.');
  }

  //⭐️컴포넌트가 업데이트된 후(화면에 렌더링된 후)실행.(winBalls배열 길이가 0이면 실행)
  componentDidUpdate(prevProps, prevState) {
    console.log('didUpdate');
    if (this.state.winBalls.length === 0) {
      this.runTimeouts();
    }
    if (prevState.winNumbers !== this.state.winNumbers) {
      console.log('로또 숫자를 생성합니다.');
    }
  }

  //⭐️컴포넌트가 마운트 해제될 때(즉, 화면에서 사라질 때) 실행
  componentWillUnmount() {
    console.log('willUnmount');
    //clearTimeout안해주면 메모리 누수가 발생함
    this.timeouts.forEach((v) => {
      clearTimeout(v); 
    });
  }

  //"한 번 더!" 버튼이 클릭될 때 실행
  onClickRedo = () => {
    console.log('onClickRedo');
    this.setState({
      winNumbers: getWinNumbers(), // 당첨 숫자들
      winBalls: [],
      bonus: null, // 보너스 공
      redo: false,
    });
    this.timeouts = [];
  };

  render() {
    const { winBalls, bonus, redo } = this.state;
    return (
      <>
        <div>당첨 숫자</div>
        <div id="결과창">
          {winBalls.map((v) => <Ball key={v} number={v} />)}
        </div>
        <div>보너스!</div>
        {bonus && <Ball number={bonus} />}
        {redo && <button onClick={this.onClickRedo}>한 번 더!</button>}
      </>
    );
  }
}

export default LottoClass;
