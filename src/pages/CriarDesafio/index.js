import { View, Text } from 'react-native'
import React, { useState, useRef, useContext } from 'react'
import { StyleSheet,  Dimensions, TouchableOpacity} from 'react-native'
import Input from 'components/Form/Input'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { useNavigation } from '@react-navigation/native'
import AuthContext from 'context/auth'
import GoalContext from 'context/goal';
import Select from 'components/Form/Select';

const {width, height} = Dimensions.get('window')
const form = [
  {
    name: 'type',
    type: Select,
    text: 'Tipo do desafio:',
    options: ['Peso', 'Hidratação'],
    placeholder: 'Tipo',
  },
  {
    name: 'goalValue',
    type: Input,
    text: 'Digite o valor do desafio:',
    placeholder: 'Valor do desafio'
  },
  {
    name: 'achievementDate',
    type: Input,
    text: 'Digite a data de finalização:',
    placeholder: '2023-10-10'
  },
]
export default function CriarDesafio() {
  const navigation = useNavigation()
  const { createWeightGoal, createHydrationGoal } = useContext(GoalContext)
  const { user } = useContext(AuthContext)
  const [formValue, setFormValue] = useState({
    type: '',
    goalValue: '',
    achievementDate: '',
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
              formValue.type === 'Peso' ? createWeightGoal({
                goalValue: formValue.goalValue,
                achievementDate: formValue.achievementDate
              }, user.id)
              : createHydrationGoal({
                goalValue: formValue.goalValue,
                achievementDate: formValue.achievementDate
              }, user.id)
              navigation.navigate('Desafio')
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