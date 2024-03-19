import { GestureResponderEvent, Image, ImageProps, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import SmallText from 'components/texts/SmallText';
import { useNavigation, useTheme } from '@react-navigation/native';
import CaretLeft from 'assets/images/phosphor-icons/PNGs/Regular/caret-left.png'
import { moderateScale, moderateVerticalScale, scale} from 'react-native-size-matters'

interface ButtonProps {
    children : ReactNode;
    style? : StyleProp<ViewStyle>;
    textStyle? :  StyleProp<TextStyle>;
    // onPress : ((event: GestureResponderEvent)=> void) | undefined
    // logo : ImageProps
}
const Header = (props: ButtonProps) => {
    const {colors} = useTheme();
    const navigation = useNavigation()
    const goBack = () => {
       navigation.goBack()
    }
  return (
    <TouchableOpacity onPress={goBack} style={[styles.btnStyle,props.style]}>
      <Image source={CaretLeft} style={styles.logo} tintColor={colors.text}/>
      {props.children ?  
      <SmallText style={[{color:colors.text, fontSize:16}, props.textStyle]}>{props.children}</SmallText>
      : (<></>)}
      </TouchableOpacity>
  )
}

export default Header

const styles = StyleSheet.create({
    btnStyle : {
        // backgroundColor:colors.secondary,
        width: '100%',
        height: moderateScale(70),
        marginHorizontal:scale(5),
        flexDirection:'row',
        alignItems:'center',
    },
    logo: {
        width: 25,
        height: 25,
        marginRight: 10,
        // marginHorizontal:20,
        resizeMode:'contain'
      },
})