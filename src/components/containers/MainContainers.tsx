import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { colors } from 'constants/Colors'

interface containerProps {
    children : ReactNode;
    style? : StyleProp<ViewStyle>;
}
const MainContainers = ({children,style}: containerProps) => {
  return (
    <View style={[defaultTextStyle,style]}>
       {children}
    </View>
  )
}

const defaultTextStyle: ViewStyle = {
    // flex:1,
    padding:20,
    // backgroundColor:`${colors.accent}`
  };
export default MainContainers

const styles = StyleSheet.create({})