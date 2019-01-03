import React, { Component } from 'react';
import TopBar from '../../components/topbar';
import SideBar from '../../components/sidebar';
import CampaignList from '../campaignList';

// container for view 1

class View1 extends Component {
    render() {
        return <div>
            <TopBar />
            <div className='Flex'>
                <SideBar />
                <CampaignList history={this.props.history} />
            </div>
        </div>
    }
}

export default View1;