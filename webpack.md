# webpack 빌드 방법(createReactApp X)

## 1. 폴더(디렉토리)생성후 npm init
- 새 프로젝트 디렉토리 생성 후, 해당 디렉토리에서 npm init 실행하여 package.json 파일 생성.

## 2. 필수 패키지 설치
- React 및 ReactDOM 설치
```
npm i react react-dom
```

- Webpack 관련 패키지 설치
```
npm i -D webpack webpack-cli
```

## 3. webpack.config.js 및 client.jsx 파일 설정

- webpack.config.js 파일 생성 후 기본 구조 작성:
```
module.exports = {
  // Webpack 구성 옵션
};
```

- client.jsx 파일 생성 및 React 모듈 불러오기
```
const React = require('react');
const ReactDOM = require('react-dom');
// React 컴포넌트 및 렌더링 로직

```
## 4. index.html 파일 생성
- index.html 파일 생성 후 기본 HTML 구조 작성:
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

## 5. Babel 관련 패키지 설치
- Babel 기본 설정 및 React 지원을 위한 패키지 설치
```
npm i -D @babel/core @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties babel-loader

npm install @pmmmwh/react-refresh-webpack-plugin

npm i -D webpack-dev-server
```
## 6. Webpack 빌드 및 개발 서버 실행
- Webpack 빌드 실행
```
npx webpack
```
- Webpack 개발 서버 실행 (옵션):
```
npx webpack serve
```

```
npm i -D @babel/core      -> 기본적인 바벨, 최신문법 
npm i -D @babel/preset-env     -> 각 env에 맞게 
npm i -D @babel/preset-react     -> jsx지원 
npm i -D @babel/plugin-proposal-class-properties
npm i -D babel-loader -> 바벨과 webpack연결
npm install @pmmmwh/react-refresh-webpack-plugin -> 자동 빌드
npm i -D webpack-dev-server -> 개발용 서버

```


## 6. npx webpack, npx webpack serve => 서버확인

```
npm run dev
npx webpack
npx webpack serve
```

### Chrome에서 http://localhost:8080/index.html


### 추가 설정
- package.json에 스크립트 추가 (옵션):
```
"scripts": {
  "dev": "webpack serve",
  "build": "webpack"
}
```


### package.json

```
{
  "name": "wordrelay",
  "version": "1.0.0",
  "description": "",
  "main": "webpack.config.js",
  "scripts": {
    "dev": "webpack serve",
    "build": "webpack"
  },
  "author": "puretension",
  "license": "MIT",
  "dependencies": {
    "@pmmmwh/react-refresh-webpack-plugin": "^0.5.11",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@babel/core": "^7.23.7",
    "@babel/plugin-proposal-class-properties": "^7.18.6",
    "@babel/preset-env": "^7.23.8",
    "@babel/preset-react": "^7.23.3",
    "babel-loader": "^9.1.3",
    "preset-react": "^1.0.0",
    "webpack": "^5.89.0",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^4.15.1"
  }
}
```

```
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'word-relay-dev',
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    app: './client',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {browsers: ['last 2 chrome versions']},
            debug: true,
          }],
          '@babel/preset-react',
        ],
        plugins: ['react-refresh/babel'],
      },
      exclude: path.join(__dirname, 'node_modules'),
    }],
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist',
  },
  devServer: {
    devMiddleware: { publicPath: '/dist' },
    static: { directory: path.resolve(__dirname) },
    hot: true
  }
};
```

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