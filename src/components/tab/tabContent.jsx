import React, { Component } from 'react'

class TabContent extends Component{

    render(){
        const { children } = this.props;
        const { className } = this.props;
        let classNameItem = 'tab--content ';
        if (className)
            classNameItem += className;
        return (
            <div className={classNameItem}>
                { children }
            </div>
        )
    }
}

export default TabContent;
