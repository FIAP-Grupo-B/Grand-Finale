import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const fonts = {
  Entypo,
  FontAwesome5,
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialIcons,
  Octicons,
  FontAwesome5Pro,
  EvilIcons,
  SimpleLineIcons
}
 
export default function Icons({ 
  // position = 'inherit',
 font, name, size, color }) {
  const Icon = fonts[font]
  return (
    <Icon {...{name, size, color}} /> 
    )
}
