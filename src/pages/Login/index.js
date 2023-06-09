import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, {useState, useContext} from 'react'
import Input from 'components/Form/Input'
import useUsers from 'hooks/useUsers'
import { useNavigation } from '@react-navigation/native'
import AuthContext from 'context/auth'
import Icons from 'components/Icons'


export default function Login() {
  const { Login } = useContext(AuthContext)
  const navigation = useNavigation()
  const [error, setError] = useState('')
  const [login, setLogin] = useState({
    email: '',
    password: '',
  })
  return (
    <View style={{backgroundColor: '#6bb314', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <Text style={style.textType}>Faça login</Text>
        <TextInput
        placeholder="E-mail"
        onChangeText={(value) => { setLogin((prevForm) => ({...prevForm, email: value})) }}
        value={login.email}
        style={style.input}
        />
        <TextInput
        placeholder='Senha'
        onChangeText={(value) => { setLogin((prevForm) => ({...prevForm, password: value}))}}
        value={login.password}
        style={style.input}
        />
      <Text style={{color: 'red', fontWeight: 'bold'}}>{error}</Text>
      <TouchableOpacity onPress={() => {
        if(login.email == ''){
          setError('Campo obrigatório')
        }else{
          Login(login)
        }
      }}>
        <Text style={style.button}>Entrar</Text>
      </TouchableOpacity>
      <View style={{marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{ fontSize: 18, color: 'white'}}>Não possui cadastro?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastrar')}>
        <Text style={{color: 'blue', fontSize: 18, marginTop: 10}}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  button: {
    fontSize: 18,
    color: '#333333',
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: '#FFFF',
    borderRadius: 7,
    fontWeight: 'bold'
  },
  textType: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFF',
    borderBottomWidth: 2,
    borderBottomColor: '#FFFF',
    paddingBottom: 5,
    marginBottom: 10
  },
  input: {
    margin: 5,
    backgroundColor: '#FFFF',
    color: '#333333',
    fontWeight: 'bold',
    fontSize: 15,
    borderRadius: 7,
    width: 200,
    paddingLeft: 10
  }
})