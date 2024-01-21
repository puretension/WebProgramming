// 파일 쪼갤때 필요한 코드1
const React = require('react');
const { Component } = React;

class WordRelay extends React.Component {
    state =  {
        text: 'Hello, webpack!',
    };

    render() {
        return <h1>{this.state.text}</h1>;
    }
}

module.exports = WordRelay; // 파일 쪼갤때 필요한 코드2