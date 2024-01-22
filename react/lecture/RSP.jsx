import React, {useState, useRef, useEffect, memo} from 'react';  //✅

 //✅
const rspCoords = {
    '바위': '0',
    '가위': '-142px',
    '보': '-284px',
};

 //✅
const scores = {
    가위: 1,
    바위: 0,
    보: -1,
};

// 이미지 좌표를 입력으로 받아 
// 해당 좌표와 일치하는 가위, 바위, 보 중 하나를 문자열로 반환 ✅
const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function(v){
        return v[1] === imgCoord; // ex) v[0] = '바위', v[1] = '0'
    })[0]; // ex) '바위'
}

 //✅
const RSP = () => {
    const [result, setResult] = useState('');
    const [imgCoord, setImgCoord] = useState(rspCoords.바위); // 초기값은 바위
    const [score, setScore] = useState(0);
    const interval = useRef();

    // didmount + didupdate 역할(1대1 대응은 아님),Hooks의 lifecycle ✅
    useEffect(() => {
        console.log('다시 실행'); //콘솔에서 확인
        interval.current = setInterval(changeHand, 100);
        return () => {
            console.log('종료');
            clearInterval(interval.current);
        }
    }, [imgCoord]); // imgCoord가 바뀔때마다 useEffect가 실행된다.
    //[imgCoord]자리에 []를 넣으면 componentDidMount만 실행된다(처음에만 바뀌고 이후로는 X)


    const changeHand = () => {
        if(imgCoord === rspCoords.바위){
            setImgCoord(rspCoords.가위);
        } else if(imgCoord === rspCoords.가위){
            setImgCoord(rspCoords.보);
        } else if(imgCoord === rspCoords.보){
            setImgCoord(rspCoords.바위);
        }
    };

    // const onClickBtn = (choice) =>{
    //     if(interval.current){ 
    //         clearInterval(interval.current);
    //         interval.current = null;
    //         const myScore = scores[choice];
    //         const cpuScore = scores[computerChoice(imgCoord)];
    //         const diff = myScore - cpuScore;

    //         if(diff === 0) {
    //             setResult('비겼습니다!');
    //         }else if([-1,2].includes(diff)){
    //             setResult('이겼습니다!');
    //             setScore((prevScore) => prevScore + 1);
    //         }else {
    //             setResult('졌습니다!');
    //             setScore((prevScore) => prevScore - 1);
    //         }
    //         setTimeout(() => {
    //             interval.current = setInterval(changeHand, 100);
    //         }, 1000);
    //      } 
    // }

     //✅
    const onClickBtn = (choice) => () => {
        if (interval.current) {
            clearInterval(interval.current);
            interval.current = null;
            const myScore = scores[choice];
            const cpuScore = scores[computerChoice(imgCoord)];
            const diff = myScore - cpuScore;

        if(diff === 0){
            setResult('비겼습니다!');
        } else if([-1,2].includes(diff)){
            setResult('이겼습니다!');
            setScore((prevScore) => prevScore + 1);
        }else {
            setResult('졌습니다!');``
            setScore((prevScore) => prevScore - 1);
        }
        setTimeout(() => {
            interval.current = setInterval(changeHand, 100); // 2초정도 결과확인
        }, 1000);
    }
    };

 //✅
    return (
        <>
            <div id="computer" style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}} />
            <div>
                <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
                <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
                <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
            </div>
            <div>{result}</div>
            <div>현재 {score}점</div>
        </>
    );
}

export default RSP;