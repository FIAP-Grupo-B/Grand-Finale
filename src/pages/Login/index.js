import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState, useContext} from 'react'
import Input from 'components/Form/Input'
import useUsers from 'hooks/useUsers'
import { useNavigation } from '@react-navigation/native'
import AuthContext from 'context/auth'


export default function Login() {
  const { signed, user, Login } = useContext(AuthContext)
  const navigation = useNavigation()
  const [error, setError] = useState('')
  const [login, setLogin] = useState({
    email: ''
  })
  const credentials = {
    name: 'email',
    text: 'Digite o email:',
    placeholder: 'Email',
  }
  return (
    <View style={{backgroundColor: '#6bb314', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <Input 
      texto={credentials.text}
      placeholder={credentials.placeholder}
      value={login[credentials.name]}
      onChange={(value) => { setLogin((prevForm) => ({...prevForm, [credentials.name]: value}))}} />
      <Text style={{color: 'red'}}>{error}</Text>
      <TouchableOpacity onPress={() => {
        if(login.email == ''){
          setError('Campo obrigatório')
        }else{
          Login(login.email)
          // navigation.navigate('Home')
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
    marginTop: 25,
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: '#FFFF',
    borderRadius: 7,
    fontWeight: 'bold'
  }
})