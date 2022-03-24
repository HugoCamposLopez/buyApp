import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Item, Home, Categorie } from '../Screens/index'
const Drawer = createDrawerNavigator()
export const AppStack = () => {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Item" component={Item} />
      <Drawer.Screen name="Categorie" component={Categorie} />
    </Drawer.Navigator>
  )
}
