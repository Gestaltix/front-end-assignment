import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import Campaign from '../../components/campaign';

class CampaignList extends Component {
    clickHandler = (id) => {
        this.props.history.push(`${id}`)
    }
    render() {
        return <div className='CampaignList'>
            {this.props.campaigns.map(campaign => {
                return <Campaign key={campaign.id} campaign={campaign} clickHandler={this.clickHandler} />
            })}
            <div className='CampaignListButton' >Create a campaign</div>
            <div className='CopyrightStuff'><span className='CompanyName'>&copy; 2018 Nanocorp Ag</span> | Terms of Service | Privacy Policy | Send Feedback</div>
        </div>
    }
}

const mstp = (state) => state

export default connect(mstp)(CampaignList);