import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Achiviement from 'components/Achievement'
import medals from './data'
export default function Medalhas() {
  return (
    <View>
      <FlatList 
      data={medals}
      renderItem={({item}) => 
      <Achiviement {...item}/>
    }
      />

    </View>
  )
}