import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login, Register, Main } from '../Screens/index'
import { AppStack } from './AppStack'
const Stack = createNativeStackNavigator()
export const StackNavigator = () => {
  return (
<Stack.Navigator initialRouteName='Main' screenOptions={{ headerShown: false }}>
  <Stack.Screen name='Login' component={Login} />
  <Stack.Screen name='Register' component={Register} />
  <Stack.Screen name='Main' component={Main} />
  <Stack.Screen name='Home' component={AppStack} />
</Stack.Navigator>
  )
}
