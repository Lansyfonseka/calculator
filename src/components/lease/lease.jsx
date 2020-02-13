import React, {Fragment} from 'react'
import Input from '../input/input.jsx'
import Select from '../select/select.jsx'

function Lease(){
    return (
        <Fragment>
            <div className='tab--content-item'>
                <span>Down Payment</span>
                <Input defaultValue='0'/>
            </div>
            <div className='tab--content-item'>
                <span>Trade-In</span>
                <Input defaultValue='0'/>
            </div>
            <div className='tab--content-item'>
                <span>Post Code</span>
                <Input defaultValue='0'/>
            </div>
            <div className='tab--content-item'>
                <span>Terms</span>
                <Select content='24,36,48' defaultContent='36'/>
            </div>
            <div className='tab--content-item'>
                <span>Mileages </span>
                <Select content='10000,12000,15000' defaultContent='12000'/>
            </div>
            <div className='tab--content-item'>
                <span>Credit Score</span>
                <Select content='600,650,700,750,800,850,900' defaultContent='750'/>
            </div>
        </Fragment>
    )
}

export default Lease;
