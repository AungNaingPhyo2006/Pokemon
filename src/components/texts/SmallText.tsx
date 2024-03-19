import { StyleSheet, Text, TextStyle, View } from 'react-native'
import React from 'react'
import {TextProps } from './types';
import { useTheme } from '@react-navigation/native';
const SmallText = ({style,children}: TextProps) => {
  const {colors} = useTheme();
    return <Text style={[defaultTextStyle, style ,]} adjustsFontSizeToFit>{children}</Text>;
}

const defaultTextStyle: TextStyle = {
    fontSize: 16,
  };

export default SmallText

const styles = StyleSheet.create({})