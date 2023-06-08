import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { EventProvider } from 'context/events'
import Desafio from 'pages/Desafio'
import CriarDesafio from 'pages/CriarDesafio'
const Stack = createStackNavigator()

export default function DesafiosStack() {
  return (
    <EventProvider>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Desafio" component={Desafio}/>
          <Stack.Screen name="CriarDesafio" component={CriarDesafio}/>
        </Stack.Navigator>
    </EventProvider>
  )
}