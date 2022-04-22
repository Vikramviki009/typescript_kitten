import React, { Component } from 'react';

// type CounterProps = {
//     message: string
// };

// type CounterState = {
//     count: number
// }

class ClassDemo extends Component{
    constructor(props){
        super(props);

        this.state={
            count: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    // static getDerivedStateFromProps(props){
    //     console.log(`I am props ${props}`);
    //     return props
    // }

    componentDidMount(){
        console.log(this.props.message)
    };

    componentDidUpdate(){
        console.log('I am updated')
    };

    handleClick = () => {
        this.setState((prevState) => ({ count: prevState.count+1}))
    }

    componentWillUnmount(){
        console.log("I am unmounted")
    }
    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>+1</button>
            </div>
        )
    }
}

export default ClassDemo;