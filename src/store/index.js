import { createStore } from 'redux';
import image1 from '../assets/img/nanos/campaignImage1.png';
import image2 from '../assets/img/nanos/campaignImage2.png';
const uuid = require('uuid/v4')

const reducer = (state = {
    campaigns: [
        {
            name: 'Sonnegstrasse Apartment',
            clicks: 43,
            clickPercentage: 12,
            impressions: 899,
            impressionPercentage: 20,
            status: 'Paused',
            companyName: 'Ursapharm',
            image: image1,
            started: new Date('9 Dec 1989 00:00:00 GMT'),
            mediums: ['google', 'facebook'],
            id: uuid()
        },
        {
            name: 'Sonnegstrasse Apartment',
            clicks: 43,
            clickPercentage: 15,
            impressions: 1215,
            impressionPercentage: 23,
            status: 'Published',
            companyName: 'Ursapharm',
            image: image2,
            started: new Date('27 Jan 2017 00:00:00 GMT'),
            mediums: ['google', 'facebook', 'instagram'],
            id: uuid()
        },
        {
            name: 'Sonnegstrasse Apartment',
            clicks: 43,
            clickPercentage: 35,
            impressions: 2000,
            impressionPercentage: 17,
            status: 'Paused',
            companyName: 'Ursapharm',
            image: image1,
            started: new Date('14 Jan 2009 00:00:00 GMT'),
            mediums: ['google', 'facebook', 'instagram'],
            id: uuid()
        },
        {
            name: 'Sonnegstrasse Apartment',
            clicks: 43,
            clickPercentage: 35,
            impressions: 2000,
            impressionPercentage: 17,
            status: 'Published',
            companyName: 'Ursapharm',
            image: image1,
            started: new Date('14 Jan 2009 00:00:00 GMT'),
            mediums: ['google', 'facebook', 'instagram'],
            id: uuid()
        },
        {
            name: 'Sonnegstrasse Apartment',
            clicks: 43,
            clickPercentage: 35,
            impressions: 2000,
            impressionPercentage: 17,
            status: 'Paused',
            companyName: 'Ursapharm',
            image: image1,
            started: new Date('14 Jan 2009 00:00:00 GMT'),
            mediums: ['google', 'facebook', 'instagram'],
            id: uuid()
        },
        {
            name: 'Sonnegstrasse Apartment',
            clicks: 43,
            clickPercentage: 35,
            impressions: 2000,
            impressionPercentage: 17,
            status: 'Published',
            companyName: 'Ursapharm',
            image: image1,
            started: new Date('14 Jan 2009 00:00:00 GMT'),
            mediums: ['google', 'facebook', 'instagram'],
            id: uuid()
        },
        {
            name: 'Sonnegstrasse Apartment',
            clicks: 43,
            clickPercentage: 35,
            impressions: 2000,
            impressionPercentage: 17,
            status: 'Reviewing',
            companyName: 'Ursapharm',
            image: image1,
            started: new Date('14 Jan 2009 00:00:00 GMT'),
            mediums: ['google', 'facebook', 'instagram'],
            id: uuid()
        },
    ]
}, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default createStore(reducer)