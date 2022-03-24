import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

export const Main = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text style={{ color: 'black' }}>Estoy en Main</Text>
      <Button title='Ir a Home' onPress={() => navigation.navigate('Home')}>
      </Button>
      <Button title='Ir a Login' onPress={() => navigation.navigate('Login')}>
      </Button>
      <Button title='Ir a Register' onPress={() => navigation.navigate('Register')}>
      </Button>
    </View>
  )
}
