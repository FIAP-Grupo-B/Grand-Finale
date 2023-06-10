import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Desafio from 'pages/Desafio'
import CriarDesafio from 'pages/CriarDesafio'
import { GoalProvider } from 'context/goal'
const Stack = createStackNavigator()

export default function DesafiosStack() {
  return (
    <GoalProvider>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Desafio" component={Desafio}/>
          <Stack.Screen name="CriarDesafio" component={CriarDesafio}/>
        </Stack.Navigator>
    </GoalProvider>
  )
}