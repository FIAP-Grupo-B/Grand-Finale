import { View, Text } from 'react-native'
import React from 'react'
import axios from 'axios'

export const UserEvents = async(creatorId) => {
    return await axios.get(`http://10.0.2.2:8080/user/${creatorId}/eventList`)
}

export const CommunityEvents = async() => {
    return await axios.get('http://10.0.2.2:8080/user/allEvent')
}

export const CreateEvent = async(dataValue, creatorId) => {
    return await axios.post(`http://10.0.2.2:8080/user/${creatorId}/createEvent`, dataValue)
}

export default UserEvents;