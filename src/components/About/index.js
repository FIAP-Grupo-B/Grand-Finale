import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Icons from 'components/Icons'
import useUsers from 'hooks/useUsers'
import exemplo from 'assets/exemplo.jpg'

const { width, height} = Dimensions.get('window')

export default function About() {
  const {users} = useUsers()
  return (
    <View style={style.about}>
    <View style={style.aboutSection}>
        <Text style={style.textAbout}>Sobre</Text>
    </View>
    <View>
        <View style={style.location}>
        <View style={{ flexDirection: 'row', alignItems: 'center'}} >
            <View style={style.iconHome}>
                <Icons font='Entypo' name='home' size={50} color={'#FFFF'} />
            </View>
            <View style={style.inputLocation}>
            <Text style={style.textLocation}>Mora em <Text style={style.bold}>São Paulo</Text></Text>
            </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', paddingTop: 20}}>
            <View style={style.IconComment}>
                <Icons font='FontAwesome5' name='comment-dots' size={50} color={'#FFFF'} />
            </View>
            <View style={style.inputComment}>
            <Text style={style.textComment}>Olá esse é meu perfil</Text>
            </View>
        </View>
        </View>
    </View>
    </View>
  )
}

const style = StyleSheet.create({
    about: {
      backgroundColor: '#333333',
      color: '#FFFF'
    },
    aboutSection: {
      width: "100%",
      borderBottomWidth: 3,
      borderColor: '#6bb314',
      height: 45,
      justifyContent: 'center'
    },
    textAbout: {
      paddingLeft: 10,
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FFFF'
    },
    location: {
      paddingTop: 15,
    },
    iconHome: {
      paddingHorizontal: 15,
    },
    IconComment: {
      paddingHorizontal: 15,
    },
    inputLocation: {
      width: "70%",
      height: 40,
      borderRadius: 15,
      backgroundColor: '#FFFF',
      justifyContent: 'center',
    },
    textLocation: {
      paddingLeft: "5%",
      fontSize: 18,
      color: '#000'
    },
    inputComment: {
      width: "70%",
      borderRadius: 15,
      backgroundColor: '#FFFF',
      justifyContent: 'flex-start',
      marginBottom: 30
    },
    textComment: {
      padding: "5%",
      fontSize: 18,
      lineHeight: 22,
      color: '#000'
    },
    picture: {
      backgroundColor: '#333333',
      color: '#FFFF'
    }, 
    picturesSection: {
      width: "100%",
      borderTopWidth: 3,
      borderBottomWidth: 3,
      borderColor: '#6bb314',
      height: 45,
      justifyContent: 'center'
    },
    textPictures: {
      paddingLeft: 10,
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FFFF'
    },
    picturesContent: {
      backgroundColor: '#6bb314'
    },
    feed1: {
      width: "100%",
      height: height / 2,
      marginBottom: 10,
    },
    feed2: {
      width: "100%",
      height: height / 2,
      marginBottom: 10,
    },
    feed3: {
      width: "100%",
      height: height / 2,
      marginBottom: 10,
    },
    heartIcon: {
      position: 'absolute',
      bottom: 125,
      right: 10,
    },
    messageIcon: {
      position: 'absolute',
      bottom: 75,
      right: 10
    },
    shareIcon: {
      position: 'absolute',
      bottom: 25,
      right: 10,
    },
    descriptionFeed: {
      fontSize: 18,
      color: '#FFFF',
      fontWeight: 'bold',
      lineHeight: 22,
      paddingLeft: 15
  
    },
    pictureFeed: {
      backgroundColor: '#333333',
      paddingBottom: 30,
      marginVertical: 5
    }
  })