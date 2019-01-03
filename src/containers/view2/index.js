import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopBar from '../../components/topbar';
import SideBar from '../../components/sidebar';
import CampaignDetails from '../campaignDetails';

// container for view 2

class View2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            campaign: null
        }
    }
    componentDidMount = () => {
        console.log(this.props)
        const campaign = this.props.campaigns.find(c => c.id === parseInt(this.props.match.params.id))
        if (campaign) { this.setState({ campaign: campaign }) }
    }
    render() {
        return this.state.campaign ?
            <div>
                <TopBar />
                <div className='Flex'>
                    <SideBar />
                    <CampaignDetails campaign={this.state.campaign} />
                </div>
            </div>
            :
            <div>Your Campaign Couldn't Be Found</div>
    }
}

const mstp = (state) => state;
export default connect(mstp)(View2);