import Icons from 'components/Icons'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native'
import TopTabs from 'routes/topTabs'

export default function NavBar({children}) {
  return (
    <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#333333'}}>
        <View style={{justifyContent: 'center', alignItems: 'center', width: 70, height: 60}}>
          <Icons font="Fontisto" name="atom" size={40} color="#6bb314"/>
        </View>
        { children }
    </View>
  )
}
