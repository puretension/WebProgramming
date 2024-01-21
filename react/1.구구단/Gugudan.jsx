//React 및 Hooks Import
const React = require('react'); // import React from 'react';
const {useState, useRef} = React; // import {useState, useRef} from 'react';


const Gugudan = () => {
  //useState를 사용하여 컴포넌트의 상태를 관리
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9)); 
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState(''); 
  const inputRef = useRef(null); //useRef 훅을 사용하여 input 요소에 대한 참조를 생성

  // 이벤트 핸들러 const onChangeInput = (e) => {};
  const onSubmitForm = (e) => {
    e.preventDefault();
    if(parseInt(value) === first * second){
      setResult('정답: ' + value);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      inputRef.current.focus();
    }else{
      setResult('땡');
      setValue('');
      inputRef.current.focus();
    }
  };

  // JSX
  return (
    <>
      <div>{first}곱하기 {second}는?</div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputRef}
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>입력!</button>
      </form>
      <div id="result">{result}</div>
    </>
  );
};

module.exports = Gugudan;

