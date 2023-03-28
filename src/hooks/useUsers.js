import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useUsers() {
    const [users, setUsers] = useState({})

    useEffect(() => {
        console.log(users)
    },[users])

    function createUser(newUser){
        axios.post('http://10.0.2.2:8080/user/create', newUser)
        .then((res) => console.log(res))
        .catch(error => console.log(error))
    }
    async function loginUser(data){
        try{
            const response = await axios.get(`http://10.0.2.2:8080/user/${data.email}`)
            if(response.status === 200){
                await setUsers(() => {
                    const resData = response.data
                    return resData
                })
            }
        }catch{
            console.log(error)
        }
    }
    return {
        createUser,
        loginUser,
        users
    }
}