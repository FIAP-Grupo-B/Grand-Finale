import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import BackgroundEvent from 'components/Profile'
import { useNavigation } from '@react-navigation/native'
import Challenge from 'components/Challenge'

export default function Desafio() {

  const navigation = useNavigation()
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <BackgroundEvent />
        <View style={style.contentCreateEvents}>
          <TouchableOpacity onPress={() => navigation.navigate('CriarDesafio')}>
            <Text style={style.createEvents}>Criar desafio +</Text>
          </TouchableOpacity>
        </View>
          <Challenge />
          <Challenge />
          <Challenge />
          <Challenge />
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  createEvents: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 'auto',
    paddingVertical: 10,
    color: '#FFFFFF'
  },
  contentCreateEvents: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1D1D1D',
    borderWidth: 1,
    borderColor: '#333333'
  }
})

