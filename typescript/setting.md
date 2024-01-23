## 기본 지식
- 메인 룰: TS(typescript)는 최종적으로 JS(javascript)로 변환된다. (순전한 TS코드를 돌릴 수 있는 것은 deno이나, 대중화X) 브라우저나 노드는 모두 JS파일을 실행한다.
- TS는 언어이자 컴파일러(tsc)이다. 컴파일러는 TS 코드를 JS로 바꿔준다.
- tsc는 tsconfig.json(tsc --init 시에 생성)에 따라 TS 코드를 JS(tsc 시 생성)로 바꿔준다. 인풋인 TS와 아웃풋인 JS 모두에 영향을 끼치므로 **tsconfig.json** 설정을 반드시 봐야한다.
- 단순히 타입 검사만 하고싶다면 **tsc --noEmit** 하면 된다
-  TS파일을 실행하는 게 아니라, result인 JS를 실행해야 한다.

### package.json, tsconfig.json

1.  **npm init -y**로 Node설치(되있다면 패스)
2. **npm i typescript**로 package.json
3. **npx tsc --init**로 tsconfig.json
4. **tsconfig.json**에서 **allowJs**를 true로 활성화(JS,TS둘다 사용),**strict**도 true로❕❕

#### 이외 부가적인 것들 In tsconfig.json

```
"forceConsistentCasingInFileNames": true
target: "es2016", "ES5" (환경에따라 변경)
npx tsc --noEmit 동작하면 OK(타입 검사 코드)
```