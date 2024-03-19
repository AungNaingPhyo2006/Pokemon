import { Platform,GestureResponderEvent, Image, ImageProps, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle, ImageStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { colors } from 'constants/Colors';
import SmallText from 'components/texts/SmallText';
interface ButtonProps {
    children : ReactNode;
    style? : StyleProp<ViewStyle>;
    textStyle? :  StyleProp<TextStyle>;
    logoStyle? : StyleProp<ImageStyle>;
    onPress : ((event: GestureResponderEvent)=> void) | undefined
    logo : ImageProps
}
const ImageBtn = (props: ButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.btnStyle,props.style]}>
      <Image source={props.logo} style={[styles.logo,props.logoStyle]} />
      <SmallText style={[{color:colors.secondary}, props.textStyle]}>{props.children}</SmallText>
    </TouchableOpacity>
  )
}

export default ImageBtn

const styles = StyleSheet.create({
    btnStyle : {
        backgroundColor:colors.secondary,
        width: '100%',
        height: 50,
        // padding:15,
        borderRadius:10,
        flexDirection:'row',
        // justifyContent:'center',
        alignItems:'center',
        // elevation:9,
        ...Platform.select({
          ios: {
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.8,
            shadowRadius: 4,
          },
          android: {
            elevation: 9,
          },
        }),
    },
    logo: {
        width: 30,
        height: 30,
        marginRight: 10,
        marginHorizontal:20,
        resizeMode:'contain'
      },
})