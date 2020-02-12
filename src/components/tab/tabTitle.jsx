import React from 'react'

function TabTitle(props){
    return (
        <button className='tab--title' linkName={ props.textContent.toLowerCase() }>{ props.textContent }</button>
    )
}

export default TabTitle;
