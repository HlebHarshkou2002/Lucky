import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0,}


    }

    decrement = () => {
        this.setState(prevState => ({
            count: prevState.count - 1,
        }))
    }

    increment = () => {
        this.setState(prevState => ({
            count: prevState.count + 1,
        }))
    }

    render() {
        return(
            <div>
                <button onClick={this.decrement}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}

export default Counter;