import React, { Component } from 'react';
import './index.css';

// This component is like CampaignStats, but with different styling

const f = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2
})

class BreakdownStats extends Component {
    render() {
        const percentage = this.props.info[this.props.filler + 'Percentage']
        return <div className={percentage > 0 ? 'BreakdownStats BreakdownStatsUp' : 'BreakdownStats'}>
            <div>
                <div>{this.props.currency ? f.format(this.props.info[this.props.filler]) : this.props.info[this.props.filler]}</div>
                <div>{!this.props.altFiller ? this.props.filler : this.props.altFiller}</div>
            </div>
            <span>{percentage > 0 ?
                `+${percentage}%` :
                `${percentage}%`}</span>
        </div>
    }
}

export default BreakdownStats;