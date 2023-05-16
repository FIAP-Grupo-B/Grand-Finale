import React from 'react'
import { Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import DesafiosStack from '../Desafio/stackTabs';
import Medalhas from 'pages/Medalhas';
const Tab = createMaterialTopTabNavigator();

const { width } = Dimensions.get('window')
export default function ConquistasTopTabs() {
  return ( 
        <>
          <Tab.Navigator
        screenOptions={{
            tabBarLabelStyle: { fontSize: 15, color: '#FFFF', fontWeight: 'bold', paddingTop: 10, justifyContent: 'center', alignItems: 'center'},
            tabBarStyle: { backgroundColor: '#6bb314', width: width ,height: 55, justifyContent: 'center', borderWidth: 0},
            tabBarIndicatorStyle: { backgroundColor: '#1D1D1D', opacity: .5},
          }}
        >
            <Tab.Screen name="Medalhas" component={Medalhas} />
            <Tab.Screen name="Desafios" component={DesafiosStack} />
        </Tab.Navigator>
        </>
  )
}
