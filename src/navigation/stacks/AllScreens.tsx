import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator ,NativeStackNavigationOptions} from '@react-navigation/native-stack';
import { stackScreens } from 'navigation/Types';
import FirstTimeScreen from 'screens/onboard/FirstTimeScreen';
import HomeScreen from 'screens/Home/HomeScreen';
import BottomTabScreen from 'screens/BottomTabScreens/BottomTabScreen';


const Stack = createNativeStackNavigator<stackScreens>();

const AllScreens = () => {
  return (
    <Stack.Navigator initialRouteName='FirstTimeScreen' 
      screenOptions={{ gestureEnabled: true , animation: 'slide_from_right'}} >
      <Stack.Screen name="FirstTimeScreen" component={FirstTimeScreen} options={{headerShown:false ,gestureEnabled:false}}/>
      <Stack.Screen name="BottomTabScreen" component={ BottomTabScreen} options={{headerShown:false}}/>
     
    </Stack.Navigator>
  )
}

export default AllScreens

const styles = StyleSheet.create({})