import React, { Fragment } from 'react'
import Input from '../input/input.jsx'
import Select from '../select/select.jsx'

function Loan(){
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
                <span>Down Payment</span>
                <Input defaultValue='0'/>
            </div>
            <div className='tab--content-item'>
                <span>Post Code</span>
                <Input defaultValue='POST'/>
            </div>
            <div className='tab--content-item'>
                <span>Terms</span>
                <Select content='12,24,36,48,72,84' defaultContent='12'/>
            </div>
            <div className='tab--content-item'>
                <span>Credit Score</span>
                <Select content='600,650,700,750,800,850,900' defaultContent='750'/>
            </div>
        </Fragment>
    )
}

export default Loan;
