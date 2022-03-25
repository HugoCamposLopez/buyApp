import React from 'react'
import { PushButton, PushButtonText } from './Styled'

export const Button = (props) => {
  return (
    <PushButton>
      <PushButtonText>{props.Text}</PushButtonText>
    </PushButton>
  )
}
