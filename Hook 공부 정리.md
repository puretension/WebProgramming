# React Hooks 정리

## 1. useState
- const [state, setState] = useState(초기값);
- state 변경시 새로 변경될 state값과 연관되어있다면? -> prevState가 담긴 콜백함수
```javascript
setState((prevState) => {
    // some works;
    return newState;
});
```
- useState를 사용해서 무거운 작업(함수)을 해야한다면  콜백함수로 비동기 1번만 실행!
```javascript
useState(() => { return heavyWorks();})
```


### Mount, Update, Unmount 될때 특정 작업을 수행시키고싶다?
#### Mount, Update, Unmount
- Mount: 화면에 첫 렌더링 
- Update: 다시 렌더링(Mount 이후)
- Unmount: 화면에서 사라짐

## 2. useEffect⭐️
- 렌더링마다 매번 실행됨
```javascript
useEffect(() => {
    console.log('렌더링 🎨');
});
```
- 마운팅 + count가 변화할때마다 실행됨
```javascript
useEffect(() => {
    console.log('count 변화');
}, [count]);
```

- useEffect는 2번째 인자로 빈배열을받기에 마운트될때만 실행, return문은 언마운트될때 실행
```javascript
useEffect(() => {
    //작업...(dependency array일때!)
     // ex) 구독,,,
       return () => {
        //구독해지
    } 
}, [value]);
```

- useEffect는 2번째 인자로 빈배열을받기에 마운트될때만 실행, return문은 언마운트될때 실행
```javascript
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('타이머 돌아가는중...');
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log('타이머가 종료되었습니다.');
        }
    }, []);
``` 

## 3. useRef
### 저장공간(useRef는 언제쓰나?)
- State의 변화 -> 렌더링 -> 컴포넌트 내부 변수들 초기화
- Ref의 변화 -> No 렌더링 -> 변수들의 값이 유지됨⭐️
- State의 변화 -> 렌더링 -> 그래도 Ref값은 유지됨⭐️
- Dom 요소에 접근(로그인시 input에 Focus)
#### ref값은 독립적으로 변경시키고 싶을때! useRef
- Ref는 불필요한 렌더링을 발생시키지않고, DOM에도 접근O(로그인시 유용)


## 4. useContext
- Language, Theme, User 등과같은 전역변수 설정에 유용함

``` javascript
import  {createContext} from 'react';   
export const UserContext  =  createContext(null);

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <UserContext.Provider value={'사용자'}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}
``` 

## 5. useMemo
- Memoization된 값을 재사용가능
- Memoization이란 자주 사용되는 값을 매번 계산하는게 아니라, 캐싱해둠으로써 메모리에 저장된 걸 그대로 꺼내서 사용

```javascript
  const [isKorea, setIsKorea] = useState(true);

  // const location = isKorea ? '한국': '외국';

  // // 원시타입과 객체타입(메모리 주소 비교이므로 ===에서 다른거 생각)
  // const location = {
  //   country: isKorea ? '한국' : '외국',
  // };
  const location = useMemo(() => {
    return {
      country: isKorea ? '한국' : '미국',
    };
  }, [isKorea]);
  ``` 


## 6. useCallBack
- 컴포넌트 최적화 
- 인자로 전달한 콜백함수 그 자체를 Memoization

```
someFunction은 함수 객체( () => {};)가 들어있는 메모리의 주소를 갖고있고,
앱 컴포넌트가 렌더링되서 someFunction이 초기화가 된다면,
함수객체가 새로 만들어져서 다른 메모리공간에 저장되기때문에 
이 메모리공간이 someFunction에 저장되고, 
useEffect입장에서는 someFunction에 저장된 주소값이 바뀌었기에 반복호출됨
```

```javascript
  const [number, setNumber] = useState(0);
// 반복호출
//   const someFunction = () => {
//     console.log(`someFunc: number: ${number}`);
//     return;
//   };

// // useCallback, 의존성 배열 []받아 Memoization,근데 이러면 number값 눌러도 업데이트X
//   const someFunction = useCallback(() => {
//     console.log(`someFunc: number: ${number}`);
//     return;
//   }, []);

   const someFunction = useCallback(() => {
    console.log(`someFunc: number: ${number}`);
    return;
  }, [number]); //number값 바뀔때마다

  useEffect(() => {
    console.log('someFunction이 변경되었습니다.'); //number바뀔때마다 useEffect 호출
  }, [someFunction]);
```


## 7. useReducer
- 복잡한 상태관리 다룰때 유용함(쉬운건 useState도 충분하겟지만..)
- Reducer, Dispatch, Action으로 이루어져 있음
- Dispatch가 Reducer에게 Action을 하면 Reducer의 State는 Action에 맞게 업데이트 됨
- reducer는 인자로 state와 action을 받는 함수이다.
```javascript
const reducer = (state, action) => {};
```
- reducer - state를 업데이트 하는 역할(은행)
- dispatch - state 업데이틀를 위한 요구
- action - 요구의 내용


#### ☠️ 가끔 캐시 박혀잇다. VSCODE 종료후 다시 실행시키자 ☠️ 