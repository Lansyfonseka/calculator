import React, { Component } from 'react'
import TabTitle from './tabTitle.jsx'
import TabContent from './tabContent.jsx'
import Loan from '../loan/loan.jsx'
import Lease from '../lease/lease.jsx'

class TabFrame extends Component{
    constructor(props){
        super(props);
        this.state = {
            loan: true,
            lease: false
        }
        this.tabSwitch = this.tabSwitch.bind(this);
    }

    tabSwitch({ target } = event){
        const title = target.getAttribute('linkname');
        if ( title == 'loan'){
            this.setState({loan: true, lease: false});
        }
        else 
            this.setState({loan: false, lease: true});
    }

    render() {
        return (
            <div className='tab--frame'>
                <div className='tab--frame-title'>
                    <TabTitle textContent='Loan' tabSwitch={this.tabSwitch} active={this.state.loan}/>
                    <TabTitle textContent='Lease' tabSwitch={this.tabSwitch} active={this.state.lease}/>
                </div>
                <TabContent className='loan' active={this.state.loan}><Loan /></TabContent>
                <TabContent className='lease'  active={this.state.lease}><Lease /></TabContent>
            </div>
        )
    }
}

export default TabFrame;
