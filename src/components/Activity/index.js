import { View, Text, ImageBackground, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import exemploDarken from 'assets/exemploDarken.jpg'
import arrowLeft from 'assets/arrowLeft.png'

const { width, height } = Dimensions.get('window')

export default function Activity({ name }) {
  return (
    <View style={style.containerActivity}>
      <ImageBackground source={exemploDarken} resizeMode='cover' style={style.background}>
            <Image source={arrowLeft} style={style.arrow}/>
            <Text style={style.textActivity}>{ name }</Text>
      </ImageBackground>
    </View>
  )
}

const style = StyleSheet.create({
    containerActivity: {
    },
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        height: 140,
        borderTopWidth: 1,
        borderTopColorColor: '#000',
    },
    arrow: {
        width: 20,
        height: 20
    },
    textActivity: {
        fontSize: 20,
        fontWeight: '900',
        color: '#FFFFFF',
        paddingHorizontal: 20
    }
})