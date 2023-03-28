import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet } from 'react-native'
import React from 'react';
import Home from 'pages/Home';
import Perfil from 'pages/Perfil';
import Conquistas from 'pages/Conquistas';
import Explorar from 'pages/Explorar';
import Nutricao from 'pages/Nutricao';


const Tab = createMaterialBottomTabNavigator();


import { Provider as PaperProvider } from 'react-native-paper';
import Icons from 'components/Icons';

const theme = { colors: {  primary: '#3498db',accent: '#f1c40f',},};


export default function BottomTabs() {
  return (
        <PaperProvider theme={theme}>
              <Tab.Navigator
                activeColor="#f0edf6"
                inactiveColor="#3e2465"
                barStyle={{ backgroundColor: '#6bb314', height: 50, justifyContent: 'flex-end' }}
                tabStyle={{ backgroundColor: 'transparent' }}
                labeled={false}
              >
                  <Tab.Screen
                  name="HomeScreen"
                  component={Home}
                  options={{tabBarIcon: () => (<Icons font="FontAwesome5" name="home" color='#FFFF' size={26}/>)}}/>
                  <Tab.Screen
                  name="Explorar"
                  component={Explorar}
                  options={{tabBarIcon: () => (<Icons font="FontAwesome5" name="search" color='#FFFF' size={26}/>),}}
                  />
                  <Tab.Screen
                  name="Nutricao"
                  component={Nutricao}
                  options={{tabBarIcon: () => (<Icons font="Ionicons" name="nutrition" color='#FFFF' size={26}/>)}}/>
                  <Tab.Screen
                  name="Conquistas"
                  component={Conquistas}
                  options={{tabBarIcon: () => (<Icons font="Ionicons" name="trophy" color='#FFFF' size={26}/>)}}/>
                  <Tab.Screen
                  name="Perfil"
                  component={Perfil}
                  options={{tabBarIcon: () => (<Icons font="FontAwesome" name="user" color='#FFFF' size={26}/>),}} />
              </Tab.Navigator>
        </PaperProvider>
  )
}