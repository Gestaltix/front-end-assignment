import React, { Component } from 'react';
import CampaignOverhead from '../../components/campaignOverhead';
import CampaignStats from '../../components/campaignStats';
import './index.css'
import BreakdownRow from '../../components/breakdownRow';

// This Container takes a campaign, and makes a page showing its details. I'd like to clean the code here a little more.

const f = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2
})

class CampaignDetails extends Component {
    render() {
        const budget = this.props.campaign.advInfo.map(info => info.budget).reduce((r, n) => r + n)
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return <div className='CampaignDetails'>
            <CampaignOverhead campaign={this.props.campaign} />
            <div className='CampaignDetailsInfo'>
                <h1 className='CampaignDetailsName'>{this.props.campaign.name}</h1>
                <p>
                    <span className='CampaignDetailsUnderName'>
                        Started on <span className='CampaignDetailsDate'>
                            {months[this.props.campaign.started.getMonth()]} {this.props.campaign.started.getDate()}, {this.props.campaign.started.getFullYear()}
                        </span>
                    </span>
                </p>
            </div>
            <div className='CampaignDetailsBasic'>
                <img className='CampaignDetailsImg' src={this.props.campaign.image} alt={this.props.campaign.alt} />
                <div>
                    <div className='YourCustomers'>Your Customers</div>
                    <div className='CampaignDetailsBasicInfo'>
                        <CampaignStats filler={'clicks'} advInfo={this.props.campaign.advInfo} />
                        <CampaignStats filler={'impressions'} advInfo={this.props.campaign.advInfo} />
                        <CampaignStats filler={'costPerClick'} avg={true} altFiller={'avg CPC'} advInfo={this.props.campaign.advInfo} />
                        <div className='CampaignDetailsBasicBudget'>
                            <div>{f.format(budget)}</div>
                            <div>budget left $</div>
                            <div>{this.props.campaign.daysLeft}</div>
                            <div>days left</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='CampiagnDetailsBreakdown'>Breakdown</div>
            {this.props.campaign.advInfo.map(info => <BreakdownRow info={info} />)}
            <div className='CopyrightStuff'><span className='CompanyName'>&copy; 2018 Nanocorp Ag</span> | Terms of Service | Privacy Policy | Send Feedback</div>
        </div >
    }
}

export default CampaignDetails;