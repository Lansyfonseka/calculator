import React, { Component } from 'react'

class TabContent extends Component{
    render(){
        const { children } = this.props;
        const { className } = this.props;
        const { active } = this.props;
        let classNameItem = 'tab--content ';
        if (active)
            classNameItem += 'active ';
            
        if (className)
            classNameItem += className;

        return (<div className={ classNameItem }>{ children }</div>)
    }
}

export default TabContent;
