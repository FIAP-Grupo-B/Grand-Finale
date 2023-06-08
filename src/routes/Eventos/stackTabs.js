import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Evento from 'pages/Evento'
import CriarEvento from 'pages/CriarEvento'
import { EventProvider } from 'context/events'
const Stack = createStackNavigator()

export default function EventosStack() {
  return (
    <EventProvider>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Evento" component={Evento}/>
          <Stack.Screen name="CriarEvento" component={CriarEvento}/>
        </Stack.Navigator>
    </EventProvider>
  )
}