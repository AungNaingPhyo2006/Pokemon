import { StyleSheet,  View } from 'react-native'
import React from 'react'
import { stackScreens } from 'navigation/Types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Avatar, Button, Card, Text } from 'react-native-paper';
import Header from 'components/header/Header';

type propsType = NativeStackScreenProps<stackScreens, "PokemonDetails">

const PokemonDetails = (prop : propsType) => {
    const {route, navigation} = prop;

    const renderAttacks = (attacks: any) => {
        if (attacks.length > 0) {
          const firstAttack = attacks[0]; // Get the first attack
          return (
            <View >
              <Text style={styles.txtStyle}>Attack: {firstAttack.name}</Text>
              <Text style={styles.txtStyle}>Cost: {firstAttack.cost.join(', ')}</Text>
              <Text style={styles.txtStyle}>Converted Energy Cost: {firstAttack.convertedEnergyCost}</Text>
              <Text style={styles.txtStyle}>Damage: {firstAttack.damage}</Text>
            </View>
          );
        } else {
          return (
            <View style={{ marginBottom: 10 }}>
              <Text>No Attacks</Text>
            </View>
          );
        }
      };
      

    
  return (
    <View style={{flex:1,backgroundColor:'skyblue'}}>
        <Header>
             Pokemon Details
        </Header>
     <View style={{flex:1,justifyContent:'center', marginHorizontal:12}}>
      <Card>
        <Card.Title titleStyle={{letterSpacing:3, fontWeight:'bold', color:'red'}} title={route.params.item.name} subtitleStyle={{color:'cyan'}} subtitle={route.params.item.supertype} />
        <Card.Content>
        <Text variant="bodyMedium" style={styles.txtStyle1}>Hp : {route.params.item.hp}</Text>
        <Text variant="bodyMedium" style={styles.txtStyle1}>Subtypes:{route.params.item.subtypes}</Text>
        {route.params.item.attacks ? renderAttacks(route.params.item.attacks) : 'No Attacks'}
        <Text variant="bodyMedium" style={styles.txtStyle1}>Weaknesses:{route.params.item.weaknesses[0].type}</Text>

        </Card.Content>
        <Card.Cover source={{ uri:route.params.item.images.small}} resizeMode='contain'/>
        <Card.Actions>
        <Button onPress={()=> navigation.goBack()}>Cancel</Button>
        <Button onPress={()=> navigation.goBack()}>Ok</Button>
        </Card.Actions>
     </Card>
    </View>


    </View>
  )
}

export default PokemonDetails

const styles = StyleSheet.create({
    txtStyle:{marginVertical:2 ,letterSpacing:2},
    txtStyle1:{marginVertical:2 ,letterSpacing:2}
})