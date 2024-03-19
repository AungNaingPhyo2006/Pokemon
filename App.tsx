import {  StyleSheet} from 'react-native'
import React, { useState } from 'react'
import AllScreens from 'navigation/stacks/AllScreens';
import { NavigationContainer } from '@react-navigation/native';
import useTheme from 'hooks/useTheme';
import { Settings } from 'react-native-fbsdk-next';
import { Provider } from 'react-redux'
import { store } from 'redux/store'
Settings.initializeSDK();
const App = () => {

  const {theme, isDarkTheme} = useTheme();

  return (
    <Provider store={store}>
    <NavigationContainer theme={theme}>
         <AllScreens/>
   </NavigationContainer>
   </Provider>
  )
}

export default App
