import React, { createContext, useState } from 'react'
import * as auth from 'mocks/users'

const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    async function Login(email){
        const response = await auth.signInUser(email)
        setUser(response.data)
    }
    
    return (
        <AuthContext.Provider value={{signed: !!user, user, Login}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
