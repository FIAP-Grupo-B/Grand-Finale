import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function Input({texto, placeholder, value, onChange}) {
  const handleChangeText = (text) => {
    onChange(text)
  }
  return (
    <>
      <View style={style.selecType}>
        <Text style={style.textType}>{texto}</Text>
        <TextInput
        value={value}
        onChangeText={handleChangeText}
        placeholder={placeholder}
        style={style.input}
        />
      </View>
    </>
  )
}

const style = StyleSheet.create({
    textType: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#FFFF',
      borderBottomWidth: 2,
      borderBottomColor: '#FFFF',
      paddingBottom: 10,
    },
    input: {
      margin: 10,
      padding: 10,
      backgroundColor: '#FFFF',
      color: '#333333',
      fontWeight: 'bold',
      fontSize: 15,
      borderRadius: 7
    }
  })