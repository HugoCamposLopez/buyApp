import React from 'react'
import { ContainerButton, PushButtonText } from './Styled'

export const Button = ({ marginTop, marginBottom, Text, onPress }) => {
  return (
    <ContainerButton
      marginTop={marginTop}
      marginBottom={marginBottom}
      onPress={onPress}>
      <PushButtonText>{Text}</PushButtonText>
    </ContainerButton>
  )
}
