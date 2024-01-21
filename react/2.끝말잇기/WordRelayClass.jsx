const React = require('react');
const { render } = require('react-dom');
const { Component } = React;

class WordRelay extends Component {
    // 1. 바뀌는 부분만 state로 관리
    state = {
        word: 'puretension',
        value: '',
        result: '',
    };
    
    onSubmitForm = (e) => {
        e.preventDefault(); // 새로고침 방지
        if(this.state.word[word.state.length - 1] === this.state.value[0]){
            this.setState({
                result: '딩동댕',
                word: value,
                value: '',
            });
            this.input.focus();
        }else {
            this.setState({
                result: '땡',
                value: '',
            });
            this.input.focus();
        }
    };

    onChangeInput = (e) => {
        this.setState({value: e.target.value});
    };

    input;

    onRefInput = (c) => {
        this.input = c;
    }
    
    render() {
        return (
            <>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
                    <button>입력!</button>
                    </form>
                    <div>{this.state.result}</div>
            </>
        );
    }
    
}

module.exports = WordRelay; // 파일 쪼갤때 필요한 코드2