import React, { createContext, useState } from 'react'
import * as auth from 'mocks/users'

const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    // const user = {
    //     avatarUrl: "http://localhost:8081/assets/exemplo.jpg",
    //     email: "maicon@gmail.com",
    //     firstName: "Maicon",
    //     id: "93f8c847-4bd4-4b41-91d4-3290fee0d618",
    //     lastName: "Da Costa",
    //     middleName: "Vieira",
    //     password: "1234"
    // }

    async function Login(email){
        const response = await auth.signInUser(email)
        console.log(response.data)
        setUser(response.data)
    }
    
    async function Set(dataValue, creatorId){
        const response = await auth.setUser(dataValue, creatorId)
        console.log(response.data)
        setUser(response.data)
    }

    return (
        <AuthContext.Provider value={{signed: 
        // true,
        !!user, 
        user, Login, Set}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
