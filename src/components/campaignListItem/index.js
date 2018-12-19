import React, { Component } from 'react';
import fbLogo from '../../assets/img/nanos/fb-logo.png';
import googleLogo from '../../assets/img/nanos/google.ico';
import instaLogo from '../../assets/img/nanos/instaicon.png';
import './index.css';

class CampaignListItem extends Component {
    render() {
        return <div className='CampaignListItem'>

            <div className='CampaignListItemFirst'>
                <img src={this.props.campaign.image} alt={this.props.campaign.imageAlt} className='CampaignListItemImage' />

                <div className='CampaignListItemInfo'>
                    <div className='CampaignListItemName'>{this.props.campaign.name}</div>

                    <div>

                        <span className='CampaignListItemCompanyName'>
                            {`${this.props.campaign.companyName} `}
                        </span>

                        <span className='CampaignListItemDate'>| Started on {this.props.campaign.started.getDate()}/
                {this.props.campaign.started.getMonth() + 1}/
                {this.props.campaign.started.getFullYear()}
                        </span>

                    </div>
                </div>
            </div>

            <div className='CampaignListItemSecond'>
                <div className='CampaignListItemStats'>
                    <div>
                        <div>{this.props.campaign.clicks}</div>
                        <div>clicks</div>
                    </div>
                    <span>+{this.props.campaign.clickPercentage}%</span>
                </div>

                <div className='CampaignListItemStats'>
                    <div>
                        <div>{this.props.campaign.impressions}</div>
                        <div>impressions</div>
                    </div>
                    <span>+{this.props.campaign.impressionPercentage}%</span>
                </div>

                <div className={this.props.campaign.status === 'Paused' ? 'CampaignListItemStatusPaused' :
                    this.props.campaign.status === 'Published' ? 'CampaignListItemStatusPublished' : 'CampaignListItemStatusReviewing'}>
                    {this.props.campaign.status}
                </div>

                <div className='CampaignListItemMediums'>
                    {this.props.campaign.mediums.includes('facebook') ? <img src={fbLogo} alt='Facebook' /> : null}
                    {this.props.campaign.mediums.includes('google') ? <img src={googleLogo} alt='Google' /> : null}
                    {this.props.campaign.mediums.includes('instagram') ? <img src={instaLogo} alt='Instagram' /> : null}
                </div>
            </div>

        </div>
    }
}

export default CampaignListItem;