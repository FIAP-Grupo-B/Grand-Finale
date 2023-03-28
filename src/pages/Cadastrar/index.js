import { View, Text, FlatList, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, useRef } from 'react'
import Select from 'components/Form/Select'
import Input from 'components/Form/Input'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import useUsers from 'hooks/useUsers';
import { useNavigation } from '@react-navigation/native';

const form = [
    {
      name: 'firstName',
      type: Input,
      text: 'Digite o primeiro nome:',
      placeholder: 'Primeiro nome',
    },
    {
      name: 'lastName',
      type: Input,
      text: 'Digita o último nome:',
      placeholder: 'Último nome',
    },
    {
      name: 'email',
      type: Input,
      text: 'Digite o email:',
      placeholder: 'Email',
    },
  ]

  const { width, heigth} = Dimensions.get('window')
export default function Cadastrar() {
  const [formValue, setFormValue] = useState({
    firsName: "",
    lastName: "",
    email: "",
    avatarUrl: "http://localhost:8081/assets/exemplo.jpg",
  })
  const handleSlide = (index) => {
    swiperList.current.scrollToIndex({
      index: index+1,
      animated: true
    })
  }
  const swiperList = useRef(null)
  const { createUser } = useUsers()
  const navigation = useNavigation()

  return (
    <View style={style.container}>
        <SwiperFlatList
        data={form}
        ref={swiperList}
        renderItem={({item, index}) => {
          const last = index == form.length - 1
            return (
              <View style={{width: width, justifyContent: 'center', alignItems: 'center'}}>
                <Input
              texto={item.text}
              placeholder={item.placeholder}
              value={formValue[item.name]}
              onChange={(value) => { setFormValue((prevForm) => ({...prevForm, [item.name]: value}))}}
              />
              <TouchableOpacity onPress={() => {
                  if(last){
                    createUser(formValue)
                    navigation.navigate('Login')
                  }else{
                    handleSlide(index)
                  }
                }}>
                <Text style={style.button}>{last ? 'Finalizar' : 'Próximo'}</Text>
              </TouchableOpacity>
              </View>
            )
          }} />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6bb314'
  },
  button: {
    fontSize: 18,
    color: '#333333',
    marginTop: 25,
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: '#FFFF',
    borderRadius: 7,
    fontWeight: 'bold'
  }
})