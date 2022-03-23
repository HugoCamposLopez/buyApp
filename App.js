import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'

const App = () => {
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 30 }}> Hola mundo</Text>
      <Ionicon name='alarm' size={50} />
    </SafeAreaView>
  )
}

export default App
