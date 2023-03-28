import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Event from 'pages/Evento';
import Notification from 'pages/Notificacao';
import Chat from 'pages/Chat';
import Feed from 'pages/Feed';
import Icons from 'components/Icons';
import { View, Text, useState, Image } from 'react-native';
import StackTabs from './stackTabs';
import logo from 'assets/logo.png'
const Tab = createMaterialTopTabNavigator();

export default function TopTabs() {

  // const [scrollPosition, setScrollPostion] = useState(0);

  // const handleScroll = (event) => {
  //   const position = event.nativeEvent.contentOffset.y;
  //   setScrollPostion(position)
  // } 
  return ( 
        <>
          <Tab.Navigator
        screenOptions={{
            tabBarLabelStyle: { fontSize: 15, color: '#FFFF', fontWeight: 'bold', width: "100%", height: '100%', justifyContent: 'center', paddingTop: 10},
            tabBarItemStyle: { width: "100%" },
            tabBarStyle: { backgroundColor: '#6bb314', height: 55, justifyContent: 'center', borderWidth: 0},
            tabBarIndicatorStyle: { backgroundColor: '#000', opacity: .2},
            tabBarIconStyle: { height: 35, width: 35, justifyContent: 'center', alignItems: 'center' },
          }}
        >
            <Tab.Screen
             options={{
               showIcon: true,
               tabBarLabel:() => {return null},
               tabBarIcon: () => <Image source={logo} style={{width: 35, height: 35}}/>,
              }}
             name="Feed" component={Feed} />
              <Tab.Screen name="Eventos" component={StackTabs} />
            <Tab.Screen name="Notificação" component={Notification} />
            <Tab.Screen name="Bate-Papo" component={Chat} />
        </Tab.Navigator>
        </>
  )
}
