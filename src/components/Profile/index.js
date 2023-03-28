import React, { useContext } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import exemplo from 'assets/exemplo.jpg'
import useUsers from 'hooks/useUsers'
import AuthContext from 'context/auth'

const { width, height }= Dimensions.get('window')



export default function BackgroundEvent() {
  const {user} = useContext(AuthContext)
  return (
          <View style={style.description}>
            <View style={style.sectionPicture}>
                <Image source={exemplo} style={style.pictureProfile} />
                <View>
                  <Text style={style.nameEvent}>{user.firstName}</Text>
                  <Text style={style.sportEvent}>Karate | Musculação</Text>
                </View>
                <View style={style.contentIconsEvent}>
                    <View style={style.boxIcon1Event}>
                      <FontAwesome5 name="calendar-alt" size={35} color={'#FFFF'} />
                      <Text style={style.numberCalendarEvent}>16</Text>
                    </View>
                    <View style={style.boxIcon2Event}>
                      <Entypo name="trophy" size={35} color={'#FFFF'} />
                      <Text style={style.numberTrophyEvent}>36</Text>
                    </View>
                    <View style={style.boxIcon3Event}>
                      <FontAwesome5 name="thumbs-up" size={35} color={'#FFFF'} />
                      <Text style={style.numberHandShakeEvent}>9</Text>
                    </View>
                </View>
            </View>
         </View>
  )
}

export function BackgroundProfile() {
  const {user} = useContext(AuthContext)
  return (
    <View style={style.description}>
        <View style={style.backgroundProfileContent}>
            <Image source={exemplo} style={style.backgroundProfile} />
        </View>
        <View>
        <View>
          <Image source={exemplo} style={style.picturePerfil} />
          <View>
            <Text style={style.name}>{user.firstName}</Text>
            <Text style={style.sport}>Musculação | Karate</Text>
          </View>
        </View>
        <View style={style.contentIcons}>
          <View style={style.boxIcon1}>
            <FontAwesome5 name="calendar-alt" size={60} color={'white'} />
            <Text style={style.numberCalendar}>10</Text>
          </View>
          <View style={style.boxIcon2}>
            <Entypo name="trophy" size={60} color={'white'} />
            <Text style={style.numberTrophy}>10</Text>
          </View>
          <View style={style.boxIcon3}>
            <FontAwesome5 name="thumbs-up" size={60} color={'white'} />
            <Text style={style.numberHandShake}>10</Text>
          </View>
        </View>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    description: {
      width: "100%",
      backgroundColor: '#6bb314',
      borderColor: '#FFFF',
      borderBottomWidth: 1,
    },
    sectionPicture: {
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      padding: 15,
    },
    pictureProfile: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderColor: '#FFFF',
        borderWidth: 4,
        marginRight: 15
    },
    nameEvent: {
      fontSize: 25,
      fontWeight: "bold",
      color: "#FFFF",
    },
    sportEvent: {
      fontSize: 15,
      fontWeight: 'bold',
      color: "#FFFF",
    },
    contentIconsEvent: {
      paddingLeft: 20,
    },
    boxIcon1Event: {
        paddingVertical: 10
    },
    boxIcon2Event: {
        paddingVertical: 10
    },
    boxIcon3Event: {
        paddingVertical: 10
    },
    numberCalendarEvent: {
      position: 'absolute',
      width: 35,
      height: 35,
      top: 10,
      justifyContent: 'center',
      alignItems: 'center',
      right: -35,
      fontSize: 15,
      paddingTop: 7,
      fontWeight: 'bold',
      backgroundColor: 'white',
      borderRadius: 1000,
      color: '#6bb314',
      borderWidth: 3,
      textAlign: 'center',
      borderColor: '#6bb314'
    },
    numberTrophyEvent: {
      position: 'absolute',
      top: 10,
      right: -35,
      fontSize: 15,
      width: 35,
      height: 35,
      paddingTop: 7,
      fontWeight: 'bold',
      backgroundColor: 'white',
      borderRadius: 1000,
      color: '#6bb314',
      borderWidth: 3,
      textAlign: 'center',
      borderColor: '#6bb314'
    },
    numberHandShakeEvent: {
      position: 'absolute',
      top: 10,
      right: -35,
      fontSize: 15,
      width: 35,
      height: 35,
      paddingTop: 7,
      fontWeight: 'bold',
      backgroundColor: 'white',
      borderRadius: 1000,
      color: '#6bb314',
      borderWidth: 3,
      textAlign: 'center',
      borderColor: '#6bb314'
    },
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
    },


    
    backgroundProfileContent: {
      borderBottomColor: '#FFFF',
      borderBottomWidth: 4
    },
    perfilView: {
      width: "100%",
      height: "100%"
    },
    backgroundProfile: {
      width: "100%",
      height: 180,
      
    },
    description: {
      position: "relative",
      width: "100%",
      backgroundColor: '#6bb314',
      borderColor: '#333333',
      borderBottomWidth: 1,
    },
    picturePerfil: {
        position: "absolute",
        width: 160,
        height: 160,
        borderRadius: 100,
        top: -70,
        left: 30,
        borderColor: '#FFFF',
        borderWidth: 4
    },
    name: {
      fontSize: 25,
      fontWeight: "bold",
      color: "#FFFF",
      paddingLeft: "55%",
      paddingTop: 25
    },
    sport: {
      fontSize: 15,
      fontWeight: 'bold',
      color: "#FFFF",
      paddingLeft: "55%"
    },
    contentIcons: {
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      marginBottom: 30
    },
    boxIcon1: {
      paddingLeft: '14%',
      paddingTop: 70
    },
    boxIcon2: {
      paddingLeft: '15%'
    },
    boxIcon3: {
      paddingLeft: '15%',
      paddingTop: 70
    },
    numberCalendar: {
      position: 'absolute',
      width: 45,
      height: 45,
      bottom: -14,
      justifyContent: 'center',
      alignItems: 'center',
      right: -10,
      fontSize: 18,
      paddingTop: 7,
      fontWeight: 'bold',
      backgroundColor: 'white',
      borderRadius: 1000,
      color: '#6bb314',
      borderWidth: 3,
      textAlign: 'center',
      borderColor: '#6bb314'
    },
    numberTrophy: {
      position: 'absolute',
      bottom: -18,
      right: -10,
      fontSize: 18,
      width: 45,
      height: 45,
      paddingTop: 7,
      fontWeight: 'bold',
      backgroundColor: 'white',
      borderRadius: 1000,
      color: '#6bb314',
      borderWidth: 3,
      textAlign: 'center',
      borderColor: '#6bb314'
    },
    numberHandShake: {
      position: 'absolute',
      bottom: -14,
      right: -5,
      fontSize: 18,
      width: 45,
      height: 45,
      paddingTop: 7,
      fontWeight: 'bold',
      backgroundColor: 'white',
      borderRadius: 1000,
      color: '#6bb314',
      borderWidth: 3,
      textAlign: 'center',
      borderColor: '#6bb314'
    },
  })
