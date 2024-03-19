import { StyleSheet, View ,SafeAreaView, ScrollView} from 'react-native'
import React, { useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { stackScreens } from 'navigation/Types';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import Header from 'components/header/Header';

type propsType = NativeStackScreenProps<stackScreens, "SearchPokemon">;
const SearchPokemon = (props:propsType) => {
    const {route} = props;
    const abilities = route.params.abilities || [];
    const moves = route.params.moves || [] ;
    const species = route.params.species || [] ;
    const stats = route.params.stats || [] ;
    const types = route.params.types || [] ; 
    

    const allAbilities = abilities.map((ability: { ability: { name: any; }; is_hidden: any; slot: any; }) => {
      return `Name: ${ability.ability.name}\nIs Hidden: ${ability.is_hidden ? 'Yes' : 'No'}\nSlot: ${ability.slot}`;
    }).join('\n\n');

    const allMoves = moves.map(move => move.move.name).join(',  ');
    const statNames = stats.map(stat => stat.stat.name).join(',  ');
    const typeNames = types.map(type => type.type.name);
   
  useEffect(() => {
    return () => {
      // Clear route.params here
      props.navigation.setParams({
        abilities: undefined,
        moves: undefined,
        species: undefined,
        stats: undefined,
        types: undefined,
      });
    };
  }, []);


  
    return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1}}>
      <View style={styles.container}>
         <Header>
         Pokemon Abilities
        </Header>
      </View>
       <ScrollView style={styles.scrollViewStyle}>
            
            <Card  style={{margin:2}}>
              <Card.Content>
                <Text  variant="titleMedium" style={{fontWeight:'bold'}}>Abilites</Text>
                <Text variant="bodyMedium" style={{letterSpacing:3}}>{allAbilities}</Text>            
              </Card.Content>
            </Card>

            <Card style={{margin:2}}>
              <Card.Content>
                <Text  variant="titleMedium" style={{fontWeight:'bold'}}>Moves</Text>
                <Text variant="bodyMedium" style={{letterSpacing:3 ,}}>{allMoves}</Text>
              </Card.Content>
            </Card>
         

            <Card  style={{margin:2}} >
              <Card.Content>
               <Text  variant="titleMedium" style={{fontWeight:'bold'}}>Species</Text>
                <Text variant="bodyMedium" style={{letterSpacing:3}}>{species.name}</Text>
              </Card.Content>
            </Card>
            
            <Card  style={{margin:2}} >
              <Card.Content>
               <Text  variant="titleMedium" style={{fontWeight:'bold'}}>Stats</Text>
                <Text variant="bodyMedium" style={{letterSpacing:3}}>{statNames}</Text>
              </Card.Content>
            </Card>

            <Card  style={{margin:2}} >
              <Card.Content>
               <Text  variant="titleMedium" style={{fontWeight:'bold'}}>Type</Text>
                <Text variant="bodyMedium" style={{letterSpacing:3}}>{typeNames}</Text>
              </Card.Content>
            </Card>
          
       </ScrollView>
     
      </View>
    </SafeAreaView>
  )
}

export default SearchPokemon

const styles = StyleSheet.create({
  container: { flex: 0.1, backgroundColor: 'pink', justifyContent: 'center', },
 titleStyle: { color: 'blue', alignSelf: 'center', letterSpacing: 3, fontWeight: 'bold' },
 scrollViewStyle: {flex:1,backgroundColor:'cyan',paddingHorizontal:12 }

})