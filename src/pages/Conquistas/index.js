import React from 'react'
import { Text, SafeAreaView, StatusBar } from 'react-native'
import ConquistasTopTabs from 'routes/Conquistas/topTabs'

export default function Conquistas() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar/>
        <ConquistasTopTabs />
    </SafeAreaView>
  )
}
