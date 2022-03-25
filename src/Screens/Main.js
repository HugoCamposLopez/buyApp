import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Container } from './StyledScreens'
import { Button } from '../index.js'
import React from 'react'

export const Main = () => {
  const navigation = useNavigation()
  return (
    <Container>
      <Button Text={'Iniciar sesión'}/>
      <Button Text={'Registrarse'}/>
    </Container>
  )
}
