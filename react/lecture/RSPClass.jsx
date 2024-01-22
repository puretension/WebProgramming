import React, { Component } from 'react';


//⭐️⭐️⭐️⭐️⭐️
// Class의 경우 -> constructor -> render -> ref -> componentDidMount
// -> (setState/props 바뀔 때 -> shouldComponentUpdate(true) -> render -> componentDidUpdate)
// -> 부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸

const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px',
};

const scores = {
    바위: 0,
    가위: 1,
    보: -1
};

const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function(v) {
      return v[1] === imgCoord;
    })[0];
  };

class RSPClass extends Component {
    state = {
        result: '',
        score: 0,
        imgCoord: rspCoords.바위,
    };

    interval;

    changeHand = () => {
        const {imgCoord} = this.state;
        if (imgCoord === rspCoords.바위) {
          this.setState({
            imgCoord: rspCoords.가위,
          });
        } else if (imgCoord === rspCoords.가위) {
          this.setState({
            imgCoord: rspCoords.보,
          });
        } else if (imgCoord === rspCoords.보) {
          this.setState({
            imgCoord: rspCoords.바위,
          });
        }
      };

    // 2. 컴포넌트가 첫 렌더링된 후(여기에 비동기 요청을 많이 한다.⭐️)
    componentDidMount() {
        this.interval = setInterval(() => {
            const {imgCoord} = this.state; // 비동기 함수 안에서는 this.state를 쓰면 안된다.
            console.log('hello');
            if(imgCoord === rspCoords.바위){
                this.setState({
                    imgCoord: rspCoords.가위
                });
            }else if(imgCoord === rspCoords.가위){
                this.setState({
                    imgCoord: rspCoords.보
                });
            }else if(imgCoord === rspCoords.보){
                this.setState({
                    imgCoord: rspCoords.바위
                });
            }
        }, 1000);
        // this.interval = setInterval(this.changeHand, 100);
    }

    // //3. 리렌더링 후
    // shouldComponentUpdate() {}

    //4. 리렌더링 후
    componentDidUpdate() {}

    // 5. 컴포넌트가 제거되기 직전(리렌더링 후)에 호출(비동기 요청 정리를 많이 한다.)
    //완료되지 않은 비동기요청 처리해리해야 메모리 누수가 발생하지 않는다.
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    // 🩵최적화 x = () => () => {}하는 이유 onClickBtn = (choice) => () => {} 
    onClickBtn = (choice) => () => {
        const {imgCoord} = this.state;
        clearInterval(this.interval);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;
        if (diff === 0) {
          this.setState({
            result: '비겼습니다!',
          });
        } else if ([-1, 2].includes(diff)) {
          this.setState((prevState) => {
            return {
              result: '이겼습니다!',
              score: prevState.score + 1,
            };
          });
        } else {
          this.setState((prevState) => {
            return {
              result: '졌습니다!',
              score: prevState.score - 1,
            };
          });
        }
        setTimeout(() => {
          this.interval = setInterval(this.changeHand, 100);
        }, 1000);
      };
    
    //1. 
    render() {
        const { result, score, imgCoord} = this.state;
        return (
            <>
                    <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
                    <div>
                    {/* 🩵최적화 전onClick <button id="rock" className="btn" onClick={() => this.onClickBtn('바위')}>바위</button> */}
                    <button id="rock" className="btn" onClick={this.onClickBtn('바위')}>바위</button>
                        <button id="scissor" className="btn" onClick={this.onClickBtn('가위')}>가위</button>
                        <button id="paper" className="btn"onClick={this.onClickBtn('보')}>보</button>
                    </div>
                    <div>{result}</div>
                    <div>현재 {score}점</div>
            </>
        )
    }
}

export default RSPClass;