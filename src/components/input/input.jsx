import React, { Component } from 'react'

class Input extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.defaultValue
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange({ target } = event) {
        this.setState({value: target.value});
    }

    render(){
        return <input type='text' value={ this.state.value } onChange={ this.handleChange }/>
    }
}

export default Input;
