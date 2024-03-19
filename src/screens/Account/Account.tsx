import { StyleSheet, View ,SafeAreaView, ScrollView, Linking} from 'react-native'
import React, { useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { stackScreens } from 'navigation/Types';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const Account = () => {
  const GithubPress = () => {
    Linking.openURL('https://github.com/AungNaingPhyo2006/Pokemon/tree/main/src');
  };
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={{flex:1}}>
    <View style={{ flex: 0.1, backgroundColor: 'pink', justifyContent: 'center', }}>
      <Text variant="titleLarge" style={{ color: 'blue', alignSelf: 'center', letterSpacing: 3, fontWeight: 'bold' }}>Account</Text>
    </View>
     <View style={{flex:1,backgroundColor:'cyan',paddingHorizontal:2, justifyContent:'center'}}>
          
          <Card  style={{margin:12}}>
            <Card.Content>
              <Text  variant="titleMedium" style={{fontWeight:'bold'}}>React Native Pokemon App</Text>
              <Text variant="bodyMedium" style={{letterSpacing:3}}>Github Link</Text>            
            </Card.Content>
            <Card.Actions>
              <Button mode='contained' onPress={GithubPress}>Continue</Button>
            </Card.Actions>

          </Card>
        
     </View>
   
    </View>
  </SafeAreaView>
  )
}

export default Account

const styles = StyleSheet.create({})