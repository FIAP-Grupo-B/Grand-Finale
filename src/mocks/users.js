import React from 'react'
import axios from 'axios';

export async function users(){
    return await axios.get('http://10.0.2.2:8080/users')
}

export async function signInUser(email){
    return await axios.get(`http://10.0.2.2:8080/user/${email}`)
}

export default users;