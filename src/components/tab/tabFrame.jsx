import React from 'react'
import TabTitle from './tabTitle.jsx'
import TabContent from './tabContent.jsx'
import Loan from '../loan/loan.jsx'
import Lease from '../lease/lease.jsx'

function TabFrame(){
    return (
        <div className='tab--frame'>
            <div className='tab--frame-title'>
                <TabTitle textContent='Loan'/>
                <TabTitle textContent='Lease'/>
            </div>
            <TabContent className='loan'><Loan /></TabContent>
            <TabContent className='lease'><Lease /></TabContent>
        </div>
    )
}

export default TabFrame;
