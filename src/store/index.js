import { createStore } from 'redux';
import image1 from '../assets/img/nanos/campaignImage1.png';
import image2 from '../assets/img/nanos/campaignImage2.png';

const reducer = (state = {
    campaigns: [
        {
            name: 'Sonnegstrasse Apartment',
            daysLeft: 20,
            advInfo: [
                {
                    name: 'facebook',
                    clicks: 23,
                    clicksPercentage: -2,
                    impressions: 250,
                    impressionsPercentage: 7,
                    costPerClick: .35,
                    costPerClickPercentage: -2,
                    budget: 30,
                },
                {
                    name: 'google',
                    clicks: 23,
                    clicksPercentage: -5,
                    impressions: 250,
                    impressionsPercentage: 7,
                    costPerClick: .32,
                    costPerClickPercentage: -2,
                    budget: 30,
                },
                {
                    name: 'instagram',
                    clicks: 23,
                    clicksPercentage: 3,
                    impressions: 250,
                    impressionsPercentage: 7,
                    costPerClick: .30,
                    costPerClickPercentage: -2,
                    budget: 30,
                },
            ],
            status: 'Paused',
            companyName: 'Ursapharm',
            image: image1,
            alt: 'lorem ipsum',
            started: new Date('9 Dec 1989 00:00:00 GMT'),
            id: 1
        },
        {
            name: 'Sonnegstrasse Apartment',
            budget: 30,
            daysLeft: 20,
            advInfo: [
                {
                    name: 'facebook',
                    clicks: 23,
                    clicksPercentage: -2,
                    impressions: 250,
                    impressionsPercentage: 7,
                    costPerClick: .30,
                    costPerClickPercentage: -2,
                    budget: 30,
                },
                {
                    name: 'google',
                    clicks: 23,
                    clicksPercentage: -5,
                    impressions: 250,
                    impressionsPercentage: 7,
                    costPerClick: .30,
                    costPerClickPercentage: -2,
                    budget: 30,
                },
                {
                    name: 'instagram',
                    clicks: 23,
                    clicksPercentage: 3,
                    impressions: 250,
                    impressionsPercentage: 7,
                    costPerClick: .30,
                    costPerClickPercentage: -2,
                    budget: 30,
                },
            ],
            status: 'Published',
            companyName: 'Ursapharm',
            image: image2,
            alt: 'lorem ipsum',
            started: new Date('27 Jan 2017 00:00:00 GMT'),
            mediums: ['google', 'facebook', 'instagram'],
            id: 2
        },
        {
            name: 'Sonnegstrasse Apartment',
            budget: 30,
            daysLeft: 20,
            advInfo: [
                {
                    name: 'facebook',
                    clicks: 23,
                    clicksPercentage: -2,
                    impressions: 250,
                    impressionsPercentage: 7,
                    costPerClick: .30,
                    costPerClickPercentage: -2,
                    budget: 30,
                },
                {
                    name: 'google',
                    clicks: 23,
                    clicksPercentage: -5,
                    impressions: 250,
                    impressionsPercentage: 7,
                    costPerClick: .30,
                    costPerClickPercentage: -2,
                    budget: 30,
                },
                {
                    name: 'instagram',
                    clicks: 23,
                    clicksPercentage: 3,
                    impressions: 250,
                    impressionsPercentage: 7,
                    costPerClick: .30,
                    costPerClickPercentage: -2,
                    budget: 30,
                },
            ],
            status: 'Paused',
            companyName: 'Ursapharm',
            image: image1,
            alt: 'lorem ipsum',
            started: new Date('14 Jan 2009 00:00:00 GMT'),
            mediums: ['google', 'facebook', 'instagram'],
            id: 3
        },
        {
            name: 'Sonnegstrasse Apartment',
            budget: 30,
            daysLeft: 20,
            advInfo: [
                {
                    name: 'facebook',
                    clicks: 23,
                    clicksPercentage: -2,
                    impressions: 250,
                    impressionsPercentage: 7,
                    costPerClick: .30,
                    costPerClickPercentage: -2,
                    budget: 30,
                },
                {
                    name: 'google',
                    clicks: 23,
                    clicksPercentage: -5,
                    impressions: 250,
                    impressionsPercentage: 7,
                    costPerClick: .30,
                    costPerClickPercentage: -2,
                    budget: 30,
                },
                {
                    name: 'instagram',
                    clicks: 23,
                    clicksPercentage: 3,
                    impressions: 250,
                    impressionsPercentage: 7,
                    costPerClick: .30,
                    costPerClickPercentage: -2,
                    budget: 30,
                },
            ],
            status: 'Published',
            companyName: 'Ursapharm',
            image: image1,
            alt: 'lorem ipsum',
            started: new Date('14 Jan 2009 00:00:00 GMT'),
            mediums: ['google', 'facebook', 'instagram'],
            id: 4
        },
        {
            name: 'Sonnegstrasse Apartment',
            budget: 30,
            daysLeft: 20,
            advInfo: [
                {
                    name: 'facebook',
                    clicks: 23,
                    clicksPercentage: -2,
                    impressions: 250,
                    impressionsPercentage: 7,
                    costPerClick: .30,
                    costPerClickPercentage: -2,
                    budget: 30,
                },
                {
                    name: 'google',
                    clicks: 23,
                    clicksPercentage: -5,
                    impressions: 250,
                    impressionsPercentage: 7,
                    costPerClick: .30,
                    costPerClickPercentage: -2,
                    budget: 30,
                },
                {
                    name: 'instagram',
                    clicks: 23,
                    clicksPercentage: 3,
                    impressions: 250,
                    impressionsPercentage: 7,
                    costPerClick: .30,
                    costPerClickPercentage: -2,
                    budget: 30,
                },
            ],
            status: 'Paused',
            companyName: 'Ursapharm',
            image: image1,
            alt: 'lorem ipsum',
            started: new Date('14 Jan 2009 00:00:00 GMT'),
            mediums: ['google', 'facebook', 'instagram'],
            id: 5
        },
        {
            name: 'Sonnegstrasse Apartment',
            budget: 30,
            daysLeft: 20,
            advInfo: [
                {
                    name: 'facebook',
                    clicks: 23,
                    clicksPercentage: -2,
                    impressions: 250,
                    impressionsPercentage: 7,
                    costPerClick: .30,
                    costPerClickPercentage: -2,
                    budget: 30,
                },
                {
                    name: 'google',
                    clicks: 23,
                    clicksPercentage: -5,
                    impressions: 250,
                    impressionsPercentage: 7,
                    costPerClick: .30,
                    costPerClickPercentage: -2,
                    budget: 30,
                },
                {
                    name: 'instagram',
                    clicks: 23,
                    clicksPercentage: 3,
                    impressions: 250,
                    impressionsPercentage: 7,
                    costPerClick: .30,
                    costPerClickPercentage: -2,
                    budget: 30,
                },
            ],
            status: 'Published',
            companyName: 'Ursapharm',
            image: image1,
            alt: 'lorem ipsum',
            started: new Date('14 Jan 2009 00:00:00 GMT'),
            mediums: ['google', 'facebook', 'instagram'],
            id: 6
        },
        {
            name: 'Sonnegstrasse Apartment',
            budget: 30,
            daysLeft: 20,
            advInfo: [
                {
                    name: 'facebook',
                    clicks: 23,
                    clicksPercentage: -2,
                    impressions: 250,
                    impressionsPercentage: 7,
                    costPerClick: .30,
                    costPerClickPercentage: -2,
                    budget: 30,
                },
                {
                    name: 'google',
                    clicks: 23,
                    clicksPercentage: -5,
                    impressions: 250,
                    impressionsPercentage: 7,
                    costPerClick: .30,
                    costPerClickPercentage: -2,
                    budget: 30,
                },
                {
                    name: 'instagram',
                    clicks: 23,
                    clicksPercentage: 3,
                    impressions: 250,
                    impressionsPercentage: 7,
                    costPerClick: .30,
                    costPerClickPercentage: -2,
                    budget: 30,
                },
            ],
            status: 'Reviewing',
            companyName: 'Ursapharm',
            image: image1,
            alt: 'lorem ipsum',
            started: new Date('14 Jan 2009 00:00:00 GMT'),
            mediums: ['google', 'facebook', 'instagram'],
            id: 7
        },
    ]
}, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default createStore(reducer)