import { View, Text } from 'react-native'
import React, { useState, useRef, useContext } from 'react'
import { StyleSheet,  Dimensions, TouchableOpacity} from 'react-native'
import Input from 'components/Form/Input'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { useNavigation } from '@react-navigation/native'
import EventContext from 'context/events'
import AuthContext from 'context/auth'

const {width, height} = Dimensions.get('window')
const form = [
  {
    name: 'email',
    type: Input,
    text: 'Digite o email:',
    placeholder: 'Email',
  },
  {
    name: 'password',
    type: Input,
    text: 'Digite sua senha:',
    placeholder: 'Senha',
  },
  {
    name: 'name',
    type: Input,
    text: 'Digita nome:',
    placeholder: 'Primeiro nome',
  },
  {
    name: 'lastName',
    type: Input,
    text: 'Digita o sobrenome:',
    placeholder: 'Sobrenome',
  },
  {
    name: 'locale',
    type: Input,
    text: 'Digite a localização:',
    placeholder: 'Localização'
  },
  {
    name: 'description',
    type: Input,
    text: 'Digite a descrição:',
    placeholder: 'Descrição'
  },
]
export default function EditarPerfil() {
  const navigation = useNavigation() 
  const { Set } = useContext(AuthContext)
  const { user } = useContext(AuthContext)
  const [formValue, setFormValue] = useState({
    email: user.email,
    password: user.password,
    name: user.name,
    lastName: user.lastName,
    avatarUrl: user.avatarUrl,
    locale: user.locale,
    description: user.description,
  })
  const swiperList = useRef(null)

  const handleSlide = (index) => {
    swiperList.current.scrollToIndex({
      index: index+1,
      animated: true
    })
  }
  return (
    <View style={style.container}>
      <SwiperFlatList
      data={form}
      ref={swiperList}
      showPagination={true}
      renderItem={({item, index}) => {
        const List = item.type
        const last = index == form.length - 1
        return (
          <View style={{width: width, justifyContent: 'center', alignItems: 'center'}}>
            <List
          texto={item.text}
          options={item.options}
          placeholder={item.placeholder}
          value={formValue[item.name]}
          onChange={(value) => { setFormValue((prevForm) => ({...prevForm, [item.name]: value}))}}
          />
          <TouchableOpacity onPress={() => {
            if(last){
              Set(formValue, user.id)
              navigation.navigate('Perfil')
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
  selecType: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 20
  },
  textType: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    borderBottomWidth: 2,
    borderBottomColor: '#6bb314',
    paddingBottom: 10,
    width: '50%'
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