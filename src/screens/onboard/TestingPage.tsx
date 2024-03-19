import { Animated, StyleSheet, Text, View,Image ,Easing, ImageBackground, StyleProp, ViewStyle} from 'react-native'
import React, { useEffect, useRef } from 'react'
import City from 'assets/SplashImages/City.png'
import HighWay from 'assets/SplashImages/Highway.png'
import Car from 'assets/SplashImages/Car.png'
import Phone from 'assets/SplashImages/Phone.png'
import RouteLine from 'assets/SplashImages/Route.png'
import PointMark from 'assets/SplashImages/PointMark.png'
import StartPoint from 'assets/SplashImages/PointOne.png'
import RoutePoint from 'assets/SplashImages/RoutePoint.png'
import MainContainers from 'components/containers/MainContainers';
import EvLogo from 'assets/SplashImages/EvIcon.png'
import HeaderText from 'components/texts/HeaderText'
import { colors } from 'constants/Colors'
import City1 from 'assets/SplashImages/CityRevert.png'
import RegularText from 'components/texts/RegularText'
const TestingPage = () => {
    // <====Move to Multiple Position====>

    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000, // Adjust the duration of the animation
          useNativeDriver: false,
        }).start();
      }, [animatedValue]);

      const translateY = animatedValue.interpolate({
        inputRange: [0, 0.33, 0.66, 1],
        outputRange: [0, -150, -150, -300], // Adjust the distances along the Y-axis
      });
    
      const translateXMain = animatedValue.interpolate({
        inputRange: [0, 0.33, 0.66, 1],
        outputRange: [0, 150, -150, 0], // Adjust the distances along the X-axis
      });

    // <=====Move to Multiple Position end====>
    const translateXCity = new Animated.Value(0);

  useEffect(() => {
    const moveRight = Animated.timing(translateXCity, {
      toValue: -100, // Adjust this value based on how much you want the background to move
      duration: 1500, // Adjust the duration of each step
      useNativeDriver: false,
      easing: Easing.linear,
      isInteraction: false,
    });

    const moveLeft = Animated.timing(translateXCity, {
      toValue: 0, // Move back to the original position
      duration: 1500, // Adjust the duration of each step
      useNativeDriver: false,
      easing:Easing.linear,
      isInteraction: false,
    });

    const sequenceAnimation = Animated.sequence([moveRight, moveLeft]);

    Animated.loop(sequenceAnimation).start();
  }, []);

  return (
    <MainContainers style={{flex:1 ,padding:0}}>  
       <View style={{marginTop: 200,zIndex:1}}>
        <View style={{width:'100%', height:150,position:'absolute',top:-150}}>
         <Image source={EvLogo} style={styles.imgStyle}/>
         <HeaderText style={styles.headerTxt}>Kool Ev</HeaderText>
         <RegularText style={styles.regularTxt}>Charging Finder</RegularText>
        </View>
             <View style={{width:'100%', height:150,position:'absolute',top:150,flexDirection:'row'}}>
               <Animated.Image
                  source={City}
                 style={[styles.background, { transform: [{ translateX:translateXCity }] }]}
                 />
             </View>
             <View style={{width:'100%',position:'absolute',top:110}}>
                  <Animated.View
                    style={[
                        styles.object,
                     {
                        transform: [
                        { translateY },
                        { translateX:translateXMain},
                        ],
                     },
                    ]}
                />
             </View>
            <ImageBackground source={HighWay} style={styles.backgroundImage}>
            <Image
            source={Phone}
             style={styles.phoneImage}
             />

             <Image
            source={PointMark}
             style={styles.pointImage}
             />

            <Image
            source={RoutePoint}
             style={styles.routePointImage1}
             />

            <Image
            source={RoutePoint}
             style={styles.routePointImage2}
             />
            <Image
            source={RouteLine}
             style={styles.routeImage}
             />
            <Image
            source={Car}
             style={styles.carImage}
             />
            </ImageBackground>
       </View>
    </MainContainers>
  );

}

export default TestingPage

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    // flex: 1,
    width:'100%',height:200,
    position: 'relative',
    overflow: 'hidden',
  },
  background: {
    // width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  imageContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    marginTop:300,
    width: '100%',
    height: '65%',
    resizeMode: 'contain', // You can adjust the resizeMode as needed
  },
  carImage: {
    width: 100, 
    height: 100,
    position:'absolute' ,
    left:40,
    top:110
  },
  phoneImage: {
    position:'absolute' ,
    left:130,
    top:-150
  },
  routeImage: {
    position:'absolute' ,
    left:140,
    top:-90
  },
  pointImage: {
    position:'absolute' ,
    left:240,
    top:-126
  },
  routePointImage1 : {
    width:10,height:10,borderRadius:50,
    position:'absolute' ,
    left:244,
    top:-97
  },
  routePointImage2 : {
    position:'absolute' ,
    left:135,
    top:120
  },
  imgStyle : {
    width:100, 
    height:150 ,
    resizeMode:'contain', 
    alignSelf:'center' ,
    marginTop:10
  } ,
  headerTxt : {
    alignSelf:'center', 
    color:colors.primary, 
    fontWeight:'700', 
    lineHeight:48
  },
  regularTxt : {
    alignSelf:'center', 
    color:colors.primary, 
    fontWeight:'400', 
  },
  object: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  } 
});