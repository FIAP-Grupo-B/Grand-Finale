import React from 'react'
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native'
import exemplo from 'assets/exemplo.jpg'
import Icons from 'components/Icons'

import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const {width, height} = Dimensions.get('window')

export default function Publications() {
  return (
    <View style={style.containerPublication}>
      <View style={style.headerPublication}>
        <View style={style.profileBox}>
          <Image source={exemplo} style={style.profileImage} />
        </View>
        <View style={style.profileData}>
          <Text style={style.profileName}>User <Text>Username</Text></Text>
          <Text style={{color: '#FFFF',}}>#hashtag1  #hashtag2 #hashtag3</Text>
        </View>
      </View>
      <View style={style.publicationBox}>
        <View style={style.imagePublicationBox}>
          <Image source={exemplo} style={style.imagePublication} />
          <View style={style.heartIcon}>
            <Icons font='Entypo'
             name='heart' size={30} color='#FFFF' />
          </View>
          <View style={style.messageIcon}>
            <Icons font='Entypo'
             name='message' size={30} color='#FFFF'/>
          </View>
          <View style={style.shareIcon}>
            <Icons font='FontAwesome5'
             name='share-alt' size={30} color='#FFFF'/>
          </View>
        </View>
        <View style={style.containerDescription}>
        <Text style={style.descriptionPublication}>@FabioGomes: <Text style={{fontWeight: 'normal'}}>Lorem ipsum dolor sit amet amen Lorem ipsum dolor sit amet amen Lorem ipsum dolor sit amet amen Lorem ipsum dolor sit amet amen</Text></Text>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  containerPublication:{
    marginVertical: 3,
    backgroundColor: '#FFFF',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderBottomColor: '#333333',
    borderBottomWidth: .5
  },
  headerPublication: {
    flexDirection: 'row',
    marginVertical: 15,
    alignItems: 'center',
  },
  profileBox: {
    borderRadius: 1000,
    borderWidth: 3,
    width: 50,
    height: 50,
    borderColor: '#6bb314',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 1000
  },
  profileData: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  profileName: {
    color: '#333333',
    fontSize: 20,
    fontWeight: 'bold'
  },
  publicationBox: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  imagePublicationBox: {
    position: 'relative',
    width: width,
    height: height / 3.2,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  imagePublication: {
    width: '100%',
    height: '100%'
  },
  containerDescription: {
    margin: 15,
    marginBottom: 30
  },
  descriptionPublication: {
    color: '#333333',
    fontWeight: 'bold'
  },
  heartIcon: {
    position: 'absolute',
    bottom: 95,
    right: 10,
  },
  messageIcon: {
    position: 'absolute',
    bottom: 55,
    right: 10
  },
  shareIcon: {
    position: 'absolute',
    bottom: 15,
    right: 10,
  },
})
