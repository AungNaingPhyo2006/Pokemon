import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { stackScreens } from 'navigation/Types';
import PokemonName from './PokemonName';
import SearchPokemon from './SearchPokemon';

const MyPokemon = () => {
  const Stack = createNativeStackNavigator<stackScreens>();
  return (
    <Stack.Navigator initialRouteName='PokemonName' 
    screenOptions={{ gestureEnabled: true , animation: 'slide_from_right'}} >
    <Stack.Screen name="PokemonName" component={PokemonName} options={{headerShown:false ,gestureEnabled:false}}/>
    <Stack.Screen name="SearchPokemon" component={SearchPokemon} options={{headerShown:false}}/>     
  </Stack.Navigator>
  )
}

export default MyPokemon

const styles = StyleSheet.create({})