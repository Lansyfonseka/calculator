import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Tab from './components/tab/tab.jsx';

import './index.scss';

const frameTabs = <div className='tab_frame'>
    <Tab content='Loan'/>
    <Tab content='Lease'/>
</div>;

ReactDOM.render(frameTabs, document.querySelector('#root'));
