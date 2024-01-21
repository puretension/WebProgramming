const path = require('path'); // node에서 경로 쉽게 조작하게 해주는 것(암기)

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
                // presets: ['@babel/preset-env', '@babel/preset-react'], // preset: plugin들의 모음
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 5% in KR'], // browserslist
                        },
                        debug: true,
                    }],
                    '@babel/preset-react'   
                ],
                plugins: ['@babel/plugin-proposal-class-properties'],
            },
        }],
    },

  devServer: {
    devMiddleware: { publicPath: '/dist' },
    static: { directory: path.resolve(__dirname) },
    hot: true
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true }),
],

    output: {
        path: path.join(__dirname, 'dist'), // __dirname: 현재 폴더 경로(react_basic/lecture, 편리한 경로설정!),
        filename: 'app.js',
    }, //출력 
};