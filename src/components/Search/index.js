import Icons from 'components/Icons'
import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

export default function Search() {
  return (
    <View style={style.sectionSearch}>
        <TextInput style={style.inputSearch} placeholder="Digite o esporte ou local" />
        <Icons style={style.iconSearch} font="FontAwesome5" name="search" size={30} color="#333333" />
    </View>
  )
}

const style = StyleSheet.create({
    sectionSearch: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        alignItems: "center",
        borderColor: '#333333',
        borderTopWidth: 2,
        borderBottomWidth: 2,
    },
    inputSearch: {
        height: 40,
        marginLeft: 15,
        width: "80%",
        margin: 20,
        borderColor: '#333333',
        borderWidth: 2,
        borderRadius: 7
    },
})