# webpack 빌드 방법(createReactApp X)

## 1. 폴더(디렉토리)생성후 npm init

## 2. 필수 패키지 설치

```
npm i react react-dom
npm i -D webpack webpack-cli
```

## 3.webpack.config.js, client.jsx

webpack.config.js로 lecture 폴더내에 파일명 생성후
```
module.exports = {
};
```
 만적어주고


client.jsx파일생성후 
```
const React = require('react');
const ReactDom = require('react-dom’);
```
로 불러오고

## 4. index.html 파일 생성
index.html에는
```
<html>
<head>
    <meta charse="UTF-8" />
    <title>끝말잇기</title>
</head>
<body>
<div id="root"></div>  <!-- 결과 <div id="root"<button>Like</button></div> -->
<script src="./dist/app.js"></script>
</body>
</html>
```

## 5. npm i -D @babel
```
npm i -D @babel/core preset-env preset-react
npm i -D babel-loader
```
### 설명 
```
npm i -D @babel/core      -> 기본적인 바벨, 최신문법 
npm i -D @babel/preset-env     -> 각 env에 맞게 
npm i -D @babel/preset-react     -> jsx지원 
npm i -D @babel/plugin-proposal-class-properties
npm i -D babel-loader -> 바벨과 webpack연결

```

결과적으로 package.json 모습
```
{
  "name": "gugudan",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "puretension",
  "license": "MIT",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@babel/core": "^7.23.7",
    "@babel/plugin-proposal-class-properties": "^7.18.6",
    "@babel/preset-env": "^7.23.8",
    "@babel/preset-react": "^7.23.3",
    "babel-loader": "8.0.0",
    "webpack": "^5.89.0",
    "webpack-cli": "^5.1.4"
  }
}
```

## 6. npx webpack, npx webpack serve => 서버확인

```
npm run dev
npx webpack
npx webpack serve
```

### Chrome에서 http://localhost:8080/index.html