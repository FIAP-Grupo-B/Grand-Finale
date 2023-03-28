import Icons from 'components/Icons'
import useUsers from 'hooks/useUsers'
import React from 'react'
import { Text, View, Image, StyleSheet, FlatList, Dimensions } from 'react-native'
import exemplo from 'assets/exemplo.jpg'
import { BackgroundProfile } from 'components/Profile'
import About from 'components/About'
import AuthContext from 'context/auth'

const { width, height } = Dimensions.get('window')

const feed = [
  {
      user: 'Fabio Gomes',
      userName: '@FabioGomes',
      image: require('assets/exemplo.jpg'),
      describe: 'Lorem ipsum dolor sit amet amen',
      like: 10,
      share: 5,
      comment: 2
  },
  {
      user: 'Fabio Gomes',
      userName: '@FabioGomes',
      image: require('assets/exemplo.jpg'),
      describe: 'Lorem ipsum dolor sit amet amen',
      like: 10,
      share: 5,
      comment: 2
  },
  {
      user: 'Fabio Gomes',
      userName: '@FabioGomes',
      image: require('assets/exemplo.jpg'),
      describe: 'Lorem ipsum dolor sit amet amen',
      like: 10,
      share: 5,
      comment: 2
  },
]

export default function PicturesPefil() {
  
  return (
    <View style={style.picture}>
        <View style={style.picturesContent}>
          <FlatList
          ListHeaderComponent={() => (
            <View style={style.perfilView}>
              <BackgroundProfile />
            <View style={style.description}>
              <About />
              <View style={style.picturesSection}>
                <Text style={style.textPictures}>Fotos</Text>
              </View>
            </View>
            </View>
          )}
          data={feed}
          renderItem={({item}) => 
            <View style={style.pictureFeed}>
            <View>
              <Image source={exemplo} style={style.feed} />
              <View style={style.heartIcon}>
                <Icons font='Entypo' name='heart' size={40} color='#FFFF' />
              </View>
              <View style={style.messageIcon}>
                <Icons font='Entypo' name='message' size={40} color='#FFFF' />
              </View>
              <View style={style.shareIcon}>
                <Icons font='FontAwesome5' name='share-alt' size={40} color='#FFFF'/>
              </View>
            </View>
            <View style={style.contentDescriptionFeed}>
              {/* <Text style={style.descriptionFeed}>{users.firstName} <Text>Lorem ipsum dolor sit amet</Text></Text> */}
            </View>
          </View>
          }/>
        </View>
      </View>
  )
}

const style = StyleSheet.create({
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
  feed: {
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
