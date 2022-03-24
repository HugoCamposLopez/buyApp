import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Login, Register, Main } from '../Screens/index'
const Drawer = createDrawerNavigator()
export const AppStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="Register" component={Register} />
    </Drawer.Navigator>
  )
}
