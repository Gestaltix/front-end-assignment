import React, { Component } from 'react';
import fbLogo from '../../assets/img/nanos/fb-logo.png';
import googleLogo from '../../assets/img/nanos/googleAds.png';
import instaLogo from '../../assets/img/nanos/instaicon.png';
import './index.css';
import BreakdownStats from '../breakdownStats';

const f = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2
})

class BreakdownRow extends Component {
    render() {
        return <div className='BreakdownRow'>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                <div className='BreakdownRowImage'>
                    {this.props.info.name === 'facebook' ? <img src={fbLogo} alt='Facebook' /> :
                        this.props.info.name === 'google' ? <img src={googleLogo} alt='Google' /> :
                            this.props.info.name === 'instagram' ? <img src={instaLogo} alt='Instagram' /> : null}
                </div>
                <div className='BreakdownRowName'>{this.props.info.name + ' Ads'}</div>
            </div>
            <BreakdownStats info={this.props.info} filler='clicks' />
            <BreakdownStats info={this.props.info} filler='impressions' />
            <BreakdownStats info={this.props.info} currency={true} altFiller='cost/click $' filler='costPerClick' />
            <div className='CampaignDetailsBasicBudget'>
                <div>{f.format(this.props.info.budget)}</div>
                <div>budget left $</div>
            </div>
        </div >
    }
}

export default BreakdownRow;