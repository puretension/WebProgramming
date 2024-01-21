const path = require('path');
const webpack = require('webpack'); // 이 줄을 추가
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

// 나머지 설정...

module.exports = {
    name: 'word-relay-setting',
    mode: 'development', // 실서비스: production
    devtool: 'eval', // 빠르게 하겠다!
    resolve: {
        extensions: ['.js', '.jsx'] // 확장자를 WebPack이 알아서 찾아준다.
    },
    entry: {
        app: ['./client.jsx'], //client.jsx에서 WordRelay.jsx를 불러오고 있기 때문에 client.jsx만 적어도 된다.
        //확장자 생략 가능 -> resolve 활용
    }, //입력

    module: {
        rules: [{
            test: /\.jsx?/, //js와 jsx파일에 룰을 적용하겠다.
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 5% in KR'], // browserslist
                        },
                        debug: true,
                    }],
                    '@babel/preset-react'   
                ],
                plugins: [
                '@babel/plugin-proposal-class-properties',
                'react-refresh/babel',
            ],
            },
        }],
    },

  plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true }),
    new ReactRefreshWebpackPlugin(),
],

    output: {
        path: path.join(__dirname, 'dist'), // __dirname: 현재 폴더 경로(react_basic/lecture, 편리한 경로설정!),
        filename: 'app.js',
        publicPath: '/dist/',
    }, //출력 

    devServer: {
        static: {
          directory: path.join(__dirname, './'),
        },
        devMiddleware: {
          publicPath: '/dist/',
        },
        hot: true
      },
      
};