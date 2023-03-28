import React from 'react'
import { Text, Image, View, StyleSheet, FlatList } from 'react-native'
import exemplo from 'assets/exemplo.jpg'
import Icons from 'components/Icons'
import Search from 'components/Search'

export default function EventList({ event }) {
  return (
            <FlatList
            data={event}
            ListHeaderComponent={<Search />}
            renderItem={({item}) =>
                <View style={style.contentEvent}>
                <View style={style.contentProfile}>
                    <Image source={exemplo} style={style.imageProfile} />
                    <View style={style.locationContent}>
                        <Icons font="Ionicons" name="location" size={30} color="#6bb314" />
                        <Text style={style.locationText}>São Paulo, São Paulo</Text>
                    </View>
                </View>
                <View style={style.contentDescription}>
                    <Text style={style.textDescription}>Grupo para pratica de karate ao ar livre</Text>
                    <Icons font="Ionicons" name="ellipsis-vertical-circle-sharp" size={30} color="#6bb314" />
                </View>
            </View>
            } />
  )
}

const style = StyleSheet.create({
    contentEvent: {
        width: "100%",
        backgroundColor: '#333333',
        borderBottomWidth: 3,
        borderTopWidth: 3,
        borderColor: '#FFFF',
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
        borderColor: '#FFFF',
        marginTop: 15
    },
    locationContent: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15
    },
    locationText: {
        fontSize: 18,
        width: 100,
        color: '#FFFF'
    },
    contentDescription: {
        alignItems: 'flex-end',
    },
    textDescription: {
        width: 240,
        backgroundColor: '#FFFF',
        paddingHorizontal: 10,
        paddingBottom: '20%',
        marginTop: 15,
        borderRadius: 7,
        fontSize: 15,
    }

})