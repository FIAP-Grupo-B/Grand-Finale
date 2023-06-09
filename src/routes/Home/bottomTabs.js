import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import Home from 'pages/Home';
import Perfil from 'pages/Perfil';
import Conquistas from 'pages/Conquistas';
import Explorar from 'pages/Explorar';
import Atividade from 'pages/Atividade';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Tab = createMaterialBottomTabNavigator();


import { Provider as PaperProvider } from 'react-native-paper';
import Icons from 'components/Icons';
import DesafiosStack from '../Desafio/stackTabs';
import PerfilStack from 'routes/Perfil/stackTabs';

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
                  name="Atividade"
                  component={Atividade}
                  options={{tabBarIcon: () => (<Icons font="FontAwesome5" name="running" color='#FFFF' size={26}/>)}}/>
                  <Tab.Screen
                  name="Conquistas"
                  component={Conquistas}
                  options={{tabBarIcon: () => (<Icons font="Ionicons" name="trophy" color='#FFFF' size={26}/>)}}
                  />
                  <Tab.Screen
                  name="PerfilStack"
                  component={PerfilStack}
                  options={{tabBarIcon: () => (<FontAwesome name="user" color='#FFFF' size={26}/>),}} />
              </Tab.Navigator>
        </PaperProvider>
  )
}