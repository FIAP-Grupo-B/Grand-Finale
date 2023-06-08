import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import Icons from 'components/Icons'
import Progress from 'components/Progress'

export default function Achiviement({ name, disable, list}) {
    const [hide, setHide] = useState(true)
    // star, star-o, start-half-empty
    let questsComplete = list.filter(function(el) {
        return el.complete
    })

  return (
      <View style={{opacity: disable ? .8 : 1}}>
          <View style={style.container}>
            <View style={style.starBox}>
                <Icons  font="FontAwesome" name="star-half-empty" color="#6bb314" size={30}/>
            </View>
            <View style={{justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                <Text style={style.textDescription}>{ name }</Text>
                <Progress porcent={Math.ceil(questsComplete.length / list.length * 100)} />
            </View>
            <TouchableOpacity style={{position: 'absolute', right: 15}} onPress={() => setHide(() => !hide)}>
                <Icons  font="Entypo" name={hide ? 'eye' : 'eye-with-line'} color="#6bb314" size={25}/>
            </TouchableOpacity>
          </View>
          <View style={{backgroundColor: '#D9D9D9', display: `${hide ? 'none' : 'flex'}`}}>
                <FlatList
                data={list}
                renderItem={({item}) => 
                <View style={style.contentList}>
                    <View style={item.complete ? style.complete : style.incomplete}></View>
                    <Text style={style.textList}>{ item.description}</Text>
                </View>
            }
                />
          </View>
      </View>
  )
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#1D1D1D',
        flexDirection: 'row',
    },
    starBox: {
        backgroundColor: '#CCCCCC',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 50,
        width: 50,
        margin: 15
    },
    textDescription: {
        fontSize: 18,
        fontWeight: '900',
        color: '#FFFFFF',
        width: '95%',
        marginVertical: 8
    },
    contentList: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: .3,
        borderColor: '#000'
    },
    complete: {
        width: 10,
        height: 10,
        borderRadius: 999,
        backgroundColor: '#6bb314',
        margin: 15
    },
    incomplete: {
        width: 10,
        height: 10,
        borderRadius: 999,
        backgroundColor: '#DB143D',
        margin: 15
    },
    textList: {
        fontSize: 16,
        color: '#000',
        fontWeight: '600'
    }
})