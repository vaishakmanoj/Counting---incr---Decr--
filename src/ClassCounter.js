import React, { Component } from "react";

class ClassCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increCount = () => {
        this.setState({
         count : this.state.count + 1 
        })
    }

    render() {
        return (

            <div>
                
                <h1>Count</h1>
                <button onClick={this.increCount}>Increment</button>
                <button> {this.state.count} </button>
            </div>
            
        )
    }
}

export default ClassCounter;