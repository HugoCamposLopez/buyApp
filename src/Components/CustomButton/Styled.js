import styled from 'styled-components'

export const ContainerButton = styled.TouchableOpacity`
  width: 65%;
  height: 50px;
  background-color: white;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${props => props.marginBottom || '0'}
  margin-top: ${props => props.marginTop || '0'}
  border: 3px solid gray;
`
export const PushButtonText = styled.Text`
  color: black;
  font-size: 30px;
  font-family: 'Anton-Regular';
  text-align: center;
  top: -8px;
`
