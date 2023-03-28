import React, { useContext } from 'react'
import Storys from 'components/Storys'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Publications from 'components/Publications'
import AuthContext from 'context/auth'


export default function Feed() {
  return (
    <>
        <SafeAreaView style={{backgroundColor: '#FFFF'}}>
          <ScrollView>
          <Storys />
            <Publications />
            <Publications />
            <Publications />
            <Publications />
          </ScrollView>
        </SafeAreaView>
    </>
  )
}


