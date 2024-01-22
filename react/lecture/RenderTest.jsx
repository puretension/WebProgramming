import React, {PureComponent} from 'react';

class RenderTest extends Component {
    state = {
        counter : 0,
        string: 'hello',
        number: 1,
        boolean: true, 
        object: {a: 'A', b: 'B', c: 'C'},
        array: [1,2,3]
    };

    onClick = () => {
        const obj = this.state.array[0].inside;
        obj.push(4);
        this.setState({
            object: {...this.state.object},
        });
    };


    // // import시에 PureComponent로 import하면 shouldComponentUpdate를 안써도 된다.
    // // (state가 바뀌었는지 안바뀌었는지 알아서 판단, but array, object는 판단 못함)
    // shouldComponentUpdate(nextProps, nextState, nextContext){
    //     if(this.state.counter !== nextState.counter){
    //         return true;
    //     }
    //     return false;  
    // }

    // onClick = () => {

    //     //setState만 호출해도 렌더링 됨 -> shouldComponentUpdate가 true로 되어있기 때문
    //     this.setState({
    //         // counter: this.state.counter + 1,
    //     });
    // };

    render () {
        console.log('렌더링', this.state);
        return (
            <div>
                <button onClick={this.onClick}>클릭</button>
            </div>
        )
    }
}

export default RenderTest;