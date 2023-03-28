import React from 'react';
import { View, Image } from 'react-native';
import { Text, StyleSheet, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import useUsers from 'hooks/useUsers';
import { BackgroundProfile } from 'components/Profile'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

// Imagem exemplo:
import exemplo from 'assets/exemplo.jpg'
import About from 'components/About';
import PicturesPefil from 'components/PicturesPerfil';

// Imagem padrão:
// import backgroundPerfil from 'assets/bike.jpg';
// import imagePerfil from 'assets/perfil.jpg';
// import feed1 from 'assets/feed1.jpg'
// import feed2 from 'assets/feed2.jpg'
// import feed3 from 'assets/feed3.jpg'

const { width, height} = Dimensions.get('window')
export default function Perfil() {
  return (
        <SafeAreaView>
          <PicturesPefil />
        </SafeAreaView>
  )
}

const style = StyleSheet.create({
  perfilView: {
    width: "100%",
    height: "100%"
  },
  background: {
    width: "100%",
    height: 180,
  },
  description: {
    position: "relative",
    width: "100%",
    backgroundColor: '#6bb314',
    borderColor: '#FFFF',
    borderTopWidth: 4,
    borderBottomWidth: 4,
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
