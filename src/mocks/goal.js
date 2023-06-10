import React from 'react'
import axios from 'axios';

export async function weightGoal(dataValue, creatorId){
    console.log('Peso', dataValue)
    return await axios.post(`http://10.0.2.2:8080/${creatorId}/create_weight_goal`, dataValue)
}

export async function hydrationGoal(dataValue, creatorId){
    console.log('Hidratação', dataValue)
    return await axios.post(`http://10.0.2.2:8080/${creatorId}/create_hydration_goal`, dataValue)
}

export async function getHydration(creatorId){
    return await axios.get(`http://localhost:8080/${creatorId}/my_hydration_goal`)
}

export async function getWeight(creatorId){
    return await axios.get(`http://localhost:8080/${creatorId}/my_weight_goal`)
}

export default weightGoal;