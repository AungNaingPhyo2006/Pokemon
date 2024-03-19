import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from 'screens/Home/Home';
import Account from 'screens/Account/Account';
import BottomTabBar from 'navigation/bottomTabs/customTabs/BottomTabBar';
import { TabScreens } from 'navigation/bottomTabs/customTabs/types';
import MyPokemon from 'screens/MyPokemon/MyPokemon';


const BottomTabScreen = () => {
 
    const Tab = createBottomTabNavigator();
  

  return (
    <Tab.Navigator  tabBar={props => <BottomTabBar {...props} />} initialRouteName='Home' screenOptions={{headerShown:false}}>
        <Tab.Screen name={TabScreens.Home} component={Home} />
        <Tab.Screen name={TabScreens.MyPokemon} component={MyPokemon}/>
        <Tab.Screen name={TabScreens.Account} component={Account}/>
    </Tab.Navigator> 
  )
}

export default BottomTabScreen