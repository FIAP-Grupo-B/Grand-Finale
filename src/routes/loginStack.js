import React, { useContext} from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Login from 'pages/Login'
import Cadastrar from 'pages/Cadastrar'
import BottomTabs from './bottomTabs'

import AuthContext from 'context/auth'


const Stack = createStackNavigator()

export default function LoginStack() {
  const {signed} = useContext(AuthContext)
  return (
        <NavigationContainer>
              <Stack.Navigator screenOptions={{
                  headerShown: false
                }}>
                  {
                    signed ? <Stack.Screen name="Home" component={BottomTabs} /> :
                    (
                      <>
                        <Stack.Screen name="Login" component={Login}/>
                        <Stack.Screen name="Cadastrar" component={Cadastrar}/>
                      </>
                    )
                  }
              </Stack.Navigator>
        </NavigationContainer>
  )
}