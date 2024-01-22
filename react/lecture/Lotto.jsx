import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import Ball from './Ball';

//useMemo vs useCallback -> useMemo는 함수의 return값을 기억, useCallback은 함수 자체를 기억

//useEffect에 초점맞춰서 보자!

//componentDidmount, componentDidUpdate, componentWillUnmount
///⭐️componentDidmount: 컴포넌트가 첫 렌더링된 후 실행. (처음 화면에 렌더링된 후)
//⭐️componentDidUpdate: 컴포넌트가 업데이트된 후 실행. (화면에 렌더링된 후)
//⭐️componentWillUnmount: 컴포넌트가 마운트 해제될 때 실행. (즉, 화면에서 사라질 때)
// => 2번째 배열 인자에 들어있는 값들이 바뀔 때 실행된다.

// ⭐️⭐️⭐️⭐️⭐️
//useMemo는 deps가 바뀌기 전까지는 리턴값(함수X)을 기억한다.
//useCallback은 deps가 바뀌기 전까지는 감싸는 함수를 기억한다.
//useEffect는 deps가 바뀔때 마다 실행된다.
function getWinNumbers() {
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v,i) => i + 1);
    const shuffle = [];
    while(candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length-1];
    const winNumbers=  shuffle.slice(0,6).sort((p,c) => p - c);
    return [...winNumbers, bonusNumber];
}

const Lotto = () => {
    //  ❕Hooks는 순서가 중요하며, 조건문, 반복문, 함수 안에서는 사용할 수 없다.(최상위에 선언하여 실행순서가 같게끔!)

    // useMemo, useEffect, useCallback은 2번째 인자가 있고, 2번째 인자가 바뀌면 다시 실행된다.
    const lottoNumbers = useMemo(() => getWinNumbers(), []); //useMemo: 복잡한 함수 결과값을 기억⭐️
     //useMemo를 사용하면, getWinNumbers()를 실행하지 않고, lottoNumbers를 실행(불필요한 실행을 막아줌)
    const [winNumbers, setWinNumbers] = useState(lottoNumbers);
    const [winBalls, setWinBalls] = useState([]);
    const [bonus, setBonus] = useState(null);
    const [redo, setRedo] = useState(false); //한 번 더 버튼
    const timeouts = useRef([]);

    //componentdidmount에 쓰이는 것들 useEffect로 대체
    //componentdidupdate에 쓰이는 것들 deps에 넣어주기
    //state별로 componentdidupdate를 여러번 써야하는데 -> useEffect를 여러번 쓰면 됨
    useEffect(() => {
        console.log('useEffect');
        for(let i = 0;i<winNumbers.length - 1;i++){
            //여기의 timeouts.current는 바뀌지 않는다.
            timeouts.current[i] = setTimeout(() => {
              //setTimeout 함수 내부에서 this.setState를 호출하여 winBalls 상태를 업데이트
            //   this.setState((prevState) => {
            //     return {
            //       //prevState.winBalls 배열에 새로운 번호를 추가
            //       winBalls:[...prevState.winBalls,winNumbers[i]],
            //     };
            //   });
            setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]]);
            }, i+1 * 1000); //각 setTimeout은 i+1 * 1000 밀리초 후에 실행
          }
          timeouts.current[6] = setTimeout(() => {
            // this.setState({
            //   bonus:winNumbers[6],
            //   redo:true,
            // });
            setBonus(winNumbers[6]);
            setRedo(true);
          }, 7000); 
          return () => {
            timeouts.current.forEach((v) => {
                clearTimeout(v);
            });
          }; 
          //아래 배열에 winBalls.length == 0은 안됨(Class와 다르다.)
      }, [timeouts.current]); //Input: [] -> componentDidMount와 동일,
      // But, 배열에 요소가 있으면 componentDidMount와 componentDidUpdate 둘 다 수행

//     //"한 번 더!" 버튼이 클릭될 때 실행
//   onClickRedo = () => {
//     console.log('onClickRedo');
//     // this.setState({
//     //   winNumbers: getWinNumbers(), // 당첨 숫자들
//     //   winBalls: [],
//     //   bonus: null, // 보너스 공
//     //   redo: false,
//     // });
//     setWinNumbers(getWinNumbers());
//     setWinBalls([]);
//     setBonus(null);
//     setRedo(false);
//     timeouts.current = [];
//   };

  //componentDidMount, componentDidUpdate, componentWillUnmount -> ⭐️useEffect 로 대체 가능⭐️

  

  useEffect(() => {
    console.log('로또 숫자를 생성합니다.');
  }, [winNumbers]);

    //"한 번 더!" 버튼이 클릭될 때 실행(useCallback  -> 함수 자체를 기억))  
    // 자식 컴포넌트에 함수를 넘길때에는 useCallback을 사용해야함 why? -> 자식 컴포넌트가 계속 렌더링되기 때문에
    const onClickRedo = useCallback(() => {
        console.log('onClickRedo');
        console.log(winNumbers); //useCallback을 사용하면, winNumbers를 기억 -> input에 winNumbers를 넣어줘야함
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = [];
      }, [winNumbers]);

  return (
    <>
      <div>당첨 숫자</div>
      <div id="결과창">
        {winBalls.map((v) => <Ball key={v} number={v} />)}
      </div>
      <div>보너스!</div>
      {bonus && <Ball number={bonus} onClick={onClickRedo} />}
      {redo && <button onClick={onClickRedo}>한 번 더!</button>}
    </>
  );
};

export default Lotto;


// //componentDidmount는 실행안되면 좋겟고, componentDidUpdate는 실행되면 좋겟다. -> useEffect로 대체 가능

// const mounted = useRef(false);
// useEffect(() => {
//     if(!mounted.current){
//         mounted.current = true;
//     }else{
//         /여기에 원하는 거 넣기
//     } //componentDidUpdate만 실행 -> mounted.current가 true일때만 실행
// });