import { View, Text } from 'react-native'
import React from 'react'
import axios from 'axios'

export const UserEvents = async(creatorId) => {
    return await axios.get(`http://10.0.2.2:8080/event/myevents/${creatorId}`)
}

export const CommunityEvents = async() => {
    return await axios.get(`http://10.0.2.2:8080/event/allevents`)
}

export const CreateEvent = async(dataValue, creatorId) => {
    return await axios.post(`http://10.0.2.2:8080/event/create/${creatorId}`, dataValue)
}

export default UserEvents;