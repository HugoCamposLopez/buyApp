import { useNavigation } from '@react-navigation/native'
import { Container } from './StyledScreens'
import { Button } from '../index.js'
import React from 'react'
import { ImageBackground, Image } from 'react-native'

export const Main = () => {
  const navigation = useNavigation()
  return (
    <Container>
      <ImageBackground
        source={require('../assets/Background.png')}
        resizeMode={'cover'}
        style={{ width: '100%', height: '100%' }}>
        <Image
          source={require('../assets/buyNoLine.png')}
          style={{ width: 400, height: 350, alignSelf: 'center' }}
        />
        <Button
          Text={'Iniciar sesión'}
          marginTop={'40%'}
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          Text={'Registrarse'}
          marginTop={'5%'}
          onPress={() => navigation.navigate('Register')}
        />
      </ImageBackground>
    </Container>
  )
}
