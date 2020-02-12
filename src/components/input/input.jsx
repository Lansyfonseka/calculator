import React, { Component } from 'react'

class Input extends Component{
    render(){
        const { defaultValue } = this.props;
        return <input type='text' value={ defaultValue } />
    }
}

export default Input;
