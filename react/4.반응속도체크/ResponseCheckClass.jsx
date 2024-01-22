import React, { Component } from 'react';

class ResponseCheck extends Component {
  // state = {
  //   state: 'waiting',
  //   message: '클릭해서 시작하세요.',
  //   result: [],
  // };

  state = {
    state: 'waiting',
    message: '클릭해서 시작하세요!',
    result: [],
  };

  timeout;
  startTime; //렌더링에 영향 X
  endTime;
  
  onClickScreen = () => {
    const { state, message, result } = this.state;
    // 사용자가 화면을 클릭하면 setTimeout을 사용하여
    // 2초에서 3초 사이의 랜덤한 시간 후에 상태를 'now'로 변경하며
    // 이때의 메시지는 '지금 클릭'으로 변경한다.
    // 상태를 'ready'로 바꾸고, '초록색이 되면 클릭하세요'라는 메시지를 사용자에게 보여준다.(화면엔  이게 먼저)
    // waiting - blue
    if(state = 'waiting') {
      this.setState({
        state: 'ready',
        message: '초록색이 되면 클릭하세요.'
      })
      this.timeout = setTimeout(() => {
        this.setState({
          state: 'now',
          message: '지금 클릭'
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    }
    //ready - red
    else if(state == 'ready') {
      //clearTimeout을 호출하여 초록색 화면으로 바뀌기 전에 설정된 타이머를 취소한다.
      clearTimeout(this.timeout);
      this.setState({
        state:'waiting',
        message: '너무 성급하시군요! 초록색이 된 후에 클릭하세요.'
      });
    } 
    //now - green
    else if(state == 'now') {
      this.endTime.current = new Date();
      this.setState((prevState) => {
        return {
           state: 'waiting',
           message: '클릭해서 시작하세요.',
           result: [...prevState.result, this.endTime - this.startTime],
        }
      });
    }
  };

  onReset = () => {
    this.setState({
      result: [],
    });
  };
  
  renderAverage = () => {
    const {result} = this.state;
    return result.length === 0 ? 
    null : <>
    <div>평균 시간: {result.reduce((a,c) => a + c) / result.length}ms</div>
    <button onClick={this.onReset}>리셋</button>
    </>
  }

  // render() {
  //   const { state, message } = this.state;
  //   return (
  //     <>
  //       <div
  //         id="screen"
  //         className={state}
  //         onClick={this.onClickScreen}
  //       >
  //         {message}
  //       </div>
  //       {this.renderAverage()}
  //     </>
  //   )
  // }
  render() {
    const {state, message} = this.state;
    return (
      <>
      <div
        id="screen"
        className={state}
        onClick={this.onClickScreen}
      >
        {message}
        </div>
        {this.renderAverage()}
      </>
    );
  }

}

export default ResponseCheck;
