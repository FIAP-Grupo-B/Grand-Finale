import React from 'react'
import axios from 'axios';

export async function users(){
    return await axios.get('http://10.0.2.2:8080/users')
}

export async function signInUser(dataValue){
    return await axios.post(`http://10.0.2.2:8080/user/login`, dataValue)
}

export async function setUser(dataValue, creatorId){
    return await axios.post(`http://10.0.2.2:8080/user/alter/${creatorId}`, dataValue)
}

export default users;