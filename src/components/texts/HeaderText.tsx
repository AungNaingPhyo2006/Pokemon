import { StyleSheet, Text, TextStyle, View } from 'react-native'
import React, { ReactNode } from 'react'
import { colors } from 'constants/Colors';
import {TextProps } from './types';

const HeaderText = ({style,children}: TextProps) => {
    return <Text style={[defaultTextStyle, style]}>{children}</Text>;
}

const defaultTextStyle: TextStyle = {
    fontSize: 30,
    color:`${colors.accent}`
  };

export default HeaderText

const styles = StyleSheet.create({})