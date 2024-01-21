const React = require('react'); // react를 불러옴
const { useState } = React; // React.useState를 useState로 줄여서 사용

const WordRelay = () => {
    const [word, setWord] = useState('판다'); //초기상태는 판다
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = React.useRef(null); //useRef 훅을 사용하여 input 요소에 대한 참조를 생성(텍스트필드에 포커스를 줄때 사용)

    // 폼 제출시 실행되는 함수
    const onSubmitForm = (e) => {
        e.preventDefault(); // 새로고침 방지
        if(word[word.length - 1] === value[0]){
            setResult('딩동댕');
            setWord(value);
            setValue('');
            inputRef.current.focus(); // current는 dom을 가리킴(Hooks에서는 필수임)
        } else {
            setResult('땡');
            setValue('');
            inputRef.current.focus();
        }
    }

    return (
        <>
            <div>{word}</div> 
            <form onSubmit={onSubmitForm}>
            <input
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
                />
                <button>클릭!</button>
            </form>
            <div>{result}</div>
        </>  
    );
}

module.exports = WordRelay; // 파일 쪼갤때 필요한 코드2