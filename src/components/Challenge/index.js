import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import diet from 'assets/diet.jpg'
import config from 'assets/config.png'


export default function Challenge() {
  return (
    <View style={style.container}>
      <View style={style.containerImage}>
        <Image source={diet} style={style.image} />
      </View>
      <View>
        <Text style={style.title}>Alimentação</Text>
        <Text style={style.subtitle}>3 horas restantes</Text>
      </View>
      <Image source={config} style={style.config}/>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
        marginVertical: 4,
        position: 'relative'
    },
    containerImage: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        margin: 20,
        width: 80,
        height: 80
    },
    title: {
        fontSize: 25,
        fontWeight: '900',
        color: '#000'
    },
    subtitle: {
        color: '#80B524',
        fontWeight: 'bold'
    },
    image: {
        width: 40,
        height: 40,
    },
    config: {
        width: 35,
        height: 35,
        position: 'absolute',
        bottom: 20,
        right: 20
    }
})