import React, { useState, useContext, useMemo, useEffect } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import BackgroundEvent from 'components/Profile'
import { Text, View, StyleSheet, Button, FlatList, Image, TouchableOpacity } from 'react-native'
import Search from 'components/Search'
import Icons from 'components/Icons'
import { useNavigation } from '@react-navigation/native'
import exemplo from 'assets/exemplo.jpg'
import EventContext from 'context/events'
import AuthContext from 'context/auth'

export default function Evento() {
  const { events, getUserEvents, getCommunityEvents } = useContext(EventContext)
  const { user } = useContext(AuthContext)
  const [eventList, setEventList] = useState({})
  const eventsLoad = useMemo(() => setEventList(events), [events])

  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      
      <FlatList
            data={eventList}
            ListHeaderComponent={() => (
              <View>
        <BackgroundEvent />
        <View style={style.sectionSelection}>
          <View style={style.mySelection} >
          <TouchableOpacity onPress={() => {
            getUserEvents(user.id)
          }}>
              <Text style={style.communityText}>Meus</Text>
            </TouchableOpacity>
          </View>
          <View style={style.communitySelection}>
            <TouchableOpacity title="Comunidade" color='#333333' 
            onPress={() => {
              getCommunityEvents()
            }}
            >
              <Text style={style.communityText}>Comunidade</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.contentCreateEvents}>
          <TouchableOpacity onPress={() => navigation.navigate('CriarEvento')}>
            <Text style={style.createEvents}>Criar evento +</Text>
          </TouchableOpacity>
        </View>
        <Search />
      </View>
            )}
            renderItem={({item}) =>
                <View style={style.contentEvent}>
                <View style={style.contentProfile}>
                    <Image source={exemplo} style={style.imageProfile} />
                    <View style={style.locationContent}>
                        <Icons font="Ionicons" name="location" size={30} color="#6bb314" />
                        <Text style={style.locationText}>{item.locale}</Text>
                    </View>
                </View>
                <View style={style.contentDescription}>
                    <Text style={style.textDescription}>{item.description}</Text>
                    <View style={{marginTop: 5}}>
                      <Icons font="Ionicons" name="ellipsis-vertical-circle-sharp" size={30} color="#6bb314"/>
                    </View>
                </View>
            </View>
            } />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  sectionSelection: {
    flexDirection: "row",
    backgroundColor: "#FFFFF",
    borderBottomWidth: 2,
    borderColor: "#333333",
    height: 60,
    width: "100%"
  },
  mySelection: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderRightWidth: 2,
    borderColor: "#333333",
  },
  myText: {
    color: "#333333",
    fontSize: 15,
    fontWeight: "bold"
  },
  communitySelection: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  communityText: {
    color: "#333333",
    fontSize: 15,
    fontWeight: "bold",
    backgroundColor: 'transparent'
  },
  contentEvent: {
    width: "100%",
    backgroundColor: '#FFFFF',
    borderBottomWidth: 3,
    borderTopWidth: 3,
    borderColor: '#333333',
    flexDirection: 'row'
},
contentProfile: {
    flexDirection: 'column',
    marginLeft: 10,
    alignItems: 'center'
},
imageProfile: {
    width: 80,
    height: 80,
    borderRadius: 1000,
    borderWidth: 2,
    borderColor: '#333333',
    marginTop: 15
},
locationContent: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
},
locationText: {
    fontSize: 15,
    width: 100,
    color: '#333333',
    textAlign: 'center',
    fontWeight: 'bold'
},
contentDescription: {
    alignItems: 'flex-end',
    paddingBottom: 10
},
textDescription: {
    width: 240,
    paddingHorizontal: 10,
    paddingBottom: '20%',
    marginTop: 15,
    borderWidth: 2,
    borderColor: '#333333',
    borderRadius: 7,
    fontSize: 15,
  },
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
