import React, { Component } from 'react';
import Tabs from '../tabs';
import Status from '../status';
import Mediums from '../mediums';
import './index.css';

// This component is the overhead details(tabs, etc) of the CampaignDetails view 

class CampaignOverhead extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabs: ['Overview', 'Targeting', 'Budget', 'Customize Ads']
        }
    }
    render() {
        return <div className='CampaignOverhead'>
            <Tabs tabs={this.state.tabs} />
            <div className='CampaignOverheadRight'>
                <Status status={this.props.campaign.status} />
                <Mediums advInfo={this.props.campaign.advInfo} />
            </div>
        </div>
    }
}

export default CampaignOverhead;