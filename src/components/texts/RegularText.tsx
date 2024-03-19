import { StyleSheet, Text, TextStyle, View } from 'react-native'
import React from 'react'
import {TextProps } from './types';
// import { colors } from 'constants/Colors';
import { useTheme } from '@react-navigation/native';

const RegularText = ({style,children}: TextProps) => {
   const {colors} = useTheme();
    return <Text style={[defaultTextStyle, style, { color: colors.text }]} 
    adjustsFontSizeToFit minimumFontScale={0.5}>
      {children}
    </Text>;
}

const defaultTextStyle: TextStyle = {
    fontSize: 18,
    // color:`${colors.accent}`
  };

export default RegularText

const styles = StyleSheet.create({})