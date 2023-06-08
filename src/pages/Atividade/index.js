import Activity from 'components/Activity'
import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

export default function Atividade() {

  const activies = ['Corrida', 'Esporte', 'Academia', 'Yoga', 'Bicicleta', 'Natação']

  return (
    <View>
        <FlatList
          data={activies}
          ListHeaderComponent={
            <View style={style.header}>
              <Text style={style.headerText}>Suas atividades</Text>
            </View>
          }
          renderItem={({item}) => <Activity name={item} />}
        />
    </View>
  )
}

const style = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#000'
  },
  headerText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#80B524',
    paddingVertical: 20
  }
})