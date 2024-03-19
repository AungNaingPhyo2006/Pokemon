import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import LottieView from 'lottie-react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { stackScreens } from 'navigation/Types'
import Pokemon from 'assets/Animations/AnimationPokemon.json'
import { Button } from 'react-native-paper';


type propsType = NativeStackScreenProps<stackScreens, "FirstTimeScreen">

const FirstTimeScreen = (props : propsType) => {
    const {navigation} = props;

    const handleAnimationFinished = () => {
      navigation.navigate('BottomTabScreen')
    };

    const lottieRef = useRef<LottieView | null>(null);
       useEffect(()=>{
         lottieRef.current?.play();
         return () => {
           lottieRef.current?.reset();
         }
       },[])

      

       return (      
        <View style={styles.mainContainer}>
          <View style={styles.subContainer}>
               <View style={styles.animationContainer}>
                      <LottieView
                      source={Pokemon}
                      ref={lottieRef}
                      autoPlay
                      loop
                      speed={1}
                      onAnimationFinish={handleAnimationFinished}
                      style={{
                        width:'100%', 
                        height:'100%',
                      }}
                    />
             </View>
             <Text style={styles.txtStyle}>Pokemon</Text>
              <Button mode="contained" onPress={handleAnimationFinished}>
                 Press me
              </Button>
          </View>
        </View>
       );
     
     
};

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    backgroundColor:'tomato'
  },
  subContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center', 
  },
  animationContainer: {
    width:200,
    height:200, 
    backgroundColor:'skyblue',
    borderRadius:100 ,
    overflow:'hidden'
  },
  txtStyle:{
    marginVertical:12,
    color:'#FFFFFF',
    fontSize:18,
    fontWeight:'bold',
    letterSpacing:2,
  }
  
});

export default FirstTimeScreen;