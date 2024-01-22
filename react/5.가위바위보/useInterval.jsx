import { useRef, useEffect } from 'react';

// useInterval(() => {
//     console.log('hello')
// } ,  isRunning ? 1000: null);


// 커스텀 훅 만들면 위처럼 사용 가능
function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        
        if(delay !== null){
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

export default useInterval;