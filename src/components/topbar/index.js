import React, { Component } from 'react';
import './index.css';
import logo from '../../assets/img/nanos/logo.png'
import topBarButtons from '../../assets/img/nanos/topBarButtons.png'

class TopBar extends Component {
    render() {
        return <div className='TopBar'>
            <img className='TopBarImages NANOS' src={logo} alt='NANOS' />
            <img className='TopBarImages' src={topBarButtons} alt='These are your ' />
        </div>
    }
}

export default TopBar;