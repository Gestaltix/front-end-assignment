import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import CampaignListItem from '../../components/campaignListItem';

class CampaignList extends Component {
    render() {
        return <div className='CampaignList'>
            {this.props.campaigns.map(campaign => {
                return <CampaignListItem campaign={campaign} />
            })}
            <div className='CampaignListButton' >Create a campaign</div>
            <div className='CopyrightStuff'><span className='CompanyName'>&copy; 2018 Nanocorp Ag</span> | Terms of Service | Privacy Policy | Send Feedback</div>
        </div>
    }
}

const mstp = (state) => state

export default connect(mstp)(CampaignList);