import { GestureResponderEvent, Platform, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import SmallText from 'components/texts/SmallText';
import { useTheme } from '@react-navigation/native';

interface ButtonProps {
    children : ReactNode;
    style? : StyleProp<ViewStyle>;
    textStyle? :  StyleProp<TextStyle>;
    onPress : ((event: GestureResponderEvent)=> void) | undefined
}
const RegularBtn = (props: ButtonProps) => {
  const {colors} = useTheme();
  const shadowStyle = Platform.OS === 'ios'
  ? {
      shadowColor:  colors.background,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    }
  : {
      elevation: 5,
    };


  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.btnStyle ,props.style ,{...shadowStyle}]}>
      <SmallText style={[{color:colors.text}, props.textStyle ,]}>{props.children}</SmallText>
    </TouchableOpacity>
  )
}

export default RegularBtn

const styles = StyleSheet.create({
    btnStyle : {
        width: '100%',
        height: 50,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    }
})