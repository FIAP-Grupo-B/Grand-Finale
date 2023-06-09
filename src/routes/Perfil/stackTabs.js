import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { EventProvider } from 'context/events'
import Perfil from 'pages/Perfil'
import EditarPerfil from 'pages/EditarPerfil'
const Stack = createStackNavigator()

export default function PerfilStack() {
  return (
    <EventProvider>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Perfil" component={Perfil}/>
          <Stack.Screen name="EditarPerfil" component={EditarPerfil}/>
        </Stack.Navigator>
    </EventProvider>
  )
}