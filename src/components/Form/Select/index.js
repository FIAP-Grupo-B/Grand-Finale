import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import Icons from 'components/Icons'

export default function Select({texto, options, placeholder, value, onChange}) {
    const handleOnChange = (value) => {
        onChange(value)
    }
  return (
    <>
      <Text style={style.textType}>{texto}</Text>
        <SelectDropdown
        data={options}
        onSelect={(selectedItem, index) => {{
            selectedItem
            handleOnChange(selectedItem)
        }}}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem
        }}
        rowTextForSelection={(item, index) => {
          return item
        }}
        defaultButtonText={placeholder}
        buttonStyle={{backgroundColor: '#333333', width: 200, height: 45, borderRadius: 7, marginTop: 15}}
        buttonTextStyle={{color: '#FFFF'}}
        renderDropdownIcon={() => <Icons font='Entypo' name='chevron-down' size={20} color='#FFFF' />}
        />
    </>
  )
}

const style = StyleSheet.create({
    textType: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#FFFF',
      borderBottomWidth: 2,
      borderBottomColor: '#FFFF',
      paddingBottom: 10,
    },
  })