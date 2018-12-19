import React, { Component } from 'react';
import TopBar from '../../components/topbar';
import SideBar from '../../components/sidebar';
import CampaignList from '../campaignList';
import './index.css';

class View1 extends Component {
    render() {
        return <div>
            <TopBar />
            <div className='View1'>
                <SideBar />
                <CampaignList />
            </div>
        </div>
    }
}

export default View1;