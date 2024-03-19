import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { stackScreens } from 'navigation/Types';
type propsType = NativeStackScreenProps<stackScreens, "SearchPokemon">;
const SearchPokemon = (props:propsType) => {
    const {route} = props;
  return (
    <View>
      <Text>{route.params.url}</Text>
    </View>
  )
}

export default SearchPokemon

const styles = StyleSheet.create({})