import React, { Component, Fragment } from 'react'

class Select extends Component{
    render(){
        const content = this.props.content.split(',');
        const { defaultContent } = this.props;
        return (
            <select name='Terms'>
                {content.map( (e,i) => e == defaultContent ? <option value={e} selected>{e}</option> : <option value={e}>{e}</option>)}
            </select>
        )
    }
}

export default Select;
