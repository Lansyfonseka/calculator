import React, { Component } from 'react'
import Input from '../input/input.jsx'

class InfoCard extends Component{
    render() {
        return (
            <div className='info'>
                <div className='msrp'>
                    <span>MSRP</span>
                    <Input defaultValue={ '0' } handleChange={this.handleChange} disabled={true}/>
                </div>
                <div className='monthly_payment'>
                    <span>Monthly payment</span>
                    <Input defaultValue={ '0' } handleChange={this.handleChange} disabled={true}/>
                </div>
                <div className='car'>
                    <span>Audi</span>
                </div>
                <div className='dealer'>
                    <span className='dealer--name'>
                        <a href="https://www.toyotapaloalto.com/">www.toyotapaloalto.com</a>
                    </span>
                    <span className='dealer--phone'>
                        <a href="tel:855-977-2913">(855) 977-2913</a>
                    </span>
                    <span  className='dealer--rating'></span>
                </div>
            </div>
        )
    }
}

export default InfoCard;
