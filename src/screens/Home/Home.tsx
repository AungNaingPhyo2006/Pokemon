import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator ,NativeStackNavigationOptions} from '@react-navigation/native-stack';
import { stackScreens } from 'navigation/Types';
import FirstTimeScreen from 'screens/onboard/FirstTimeScreen';
import BottomTabScreen from 'screens/BottomTabScreens/BottomTabScreen';
import PokemonList from './PokemonList';
import PokemonDetails from './PokemonDetails';



const Home = () => {
const Stack = createNativeStackNavigator<stackScreens>();
  return (
    <Stack.Navigator initialRouteName='PokemonList' 
    screenOptions={{ gestureEnabled: true , animation: 'slide_from_right'}} >
    <Stack.Screen name="PokemonList" component={PokemonList} options={{headerShown:false ,gestureEnabled:false}}/>
    <Stack.Screen name="PokemonDetails" component={PokemonDetails} options={{headerShown:false}}/>     
  </Stack.Navigator>
  )
}

export default Home