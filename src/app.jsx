import React, { Fragment } from 'react'
import TabFrame from './components/tab/tabFrame.jsx';
import InfoCard from './components/infoCard/infoCard.jsx';

function Main(){
    return (
        <Fragment>
            <TabFrame/>
            <InfoCard/>
        </Fragment>
    )
}

export default Main;
