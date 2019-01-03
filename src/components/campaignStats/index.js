import React, { Component } from 'react';
import './index.css';

const f = new Intl.NumberFormat('en-US', {
    minimumIntegerDigits: 2,
    maximumSignificantDigits: 2,
})

// This is a simple way to make the common format of several campaign statistics in the assignment

class CampaignStats extends Component {
    render() {
        const array = this.props.advInfo.map(info => info[this.props.filler])
        const value = array.reduce((r, n) => r + n)
        const avgValue = value / array.length
        const percentage = this.props.advInfo.map(info => info[this.props.filler + 'Percentage']).reduce((r, n) => r + n)
        console.log('array: ', array, 'Avg Value', avgValue)
        return <div className={percentage > 0 ? 'CampaignStats CampaignStatsUp' : 'CampaignStats'}>
            <div>
                <div>{this.props.money ? f.format(this.props.avg ? avgValue : value) : this.props.avg ? avgValue : value}</div>
                <div>{!this.props.altFiller ? this.props.filler : this.props.altFiller}</div>
            </div>
            <span>{percentage > 0 ?
                `+${percentage}%` :
                `${percentage}%`}</span>
        </div>
    }
}

export default CampaignStats;