import React, { Component } from 'react';
import './index.css';
import Status from '../status';
import Mediums from '../mediums';
import CampaignStats from '../campaignStats';

// This component takes a campaign and gives basic information about the campaign in the form of a row

class Campaign extends Component {
    clickHandler = () => {
        this.props.clickHandler(this.props.campaign.id)
    }
    render() {
        return <div className='Campaign' onClick={this.clickHandler}>

            <div className='CampaignFirst'>
                <img src={this.props.campaign.image} alt={this.props.campaign.imageAlt} className='CampaignImage' />

                <div className='CampaignInfo'>
                    <div className='CampaignName'>{this.props.campaign.name}</div>

                    <div>
                        <span className='CampaignCompanyName'>
                            {`${this.props.campaign.companyName} `}
                        </span>

                        <span className='CampaignDate'>| Started on {this.props.campaign.started.getDate()}/
                {this.props.campaign.started.getMonth() + 1}/
                {this.props.campaign.started.getFullYear()}
                        </span>
                    </div>
                </div>
            </div>

            <div className='CampaignSecond'>
                <CampaignStats filler={'clicks'} advInfo={this.props.campaign.advInfo} />
                <CampaignStats filler={'impressions'} advInfo={this.props.campaign.advInfo} />
                <Status status={this.props.campaign.status} />
                <Mediums advInfo={this.props.campaign.advInfo} />
            </div>

        </div>
    }
}

export default Campaign;