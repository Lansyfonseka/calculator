import React, { Component } from 'react'

class TabTitle extends Component{
    render() {
        const { textContent } = this.props;
        const { active } = this.props;
        const { tabSwitch } = this.props;
        if (active)
            return <button className='tab--title tab--title-active' linkName={ textContent.toLowerCase() } onClick={ tabSwitch }>{ textContent }</button>
        else 
            return <button className='tab--title' linkName={ textContent.toLowerCase() } onClick={ tabSwitch }>{ textContent }</button>
    }
}

export default TabTitle;
