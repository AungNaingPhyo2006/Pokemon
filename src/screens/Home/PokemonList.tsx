import React, {  useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { stackScreens } from 'navigation/Types'
import { usePokemonAPI } from 'utils/ApiUtils'
import { Button, Card, FAB, Text, ActivityIndicator, MD2Colors, Divider} from 'react-native-paper';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';

type propsType = NativeStackScreenProps<stackScreens, "PokemonList">

const PokemonList = (props : propsType) => {
    const {navigation} = props;
    const url = 'https://api.pokemontcg.io/v2/cards'; // URL for cards
    const { cards, isLoading, isError } = usePokemonAPI(url);
    const [visibleCards, setVisibleCards] = useState(cards.slice(0, 10)); 
    const [isFetching, setIsFetching] = useState(false);
   
    if (isLoading) {
        return (
          <View style={styles.loadingContainer}>
              <ActivityIndicator animating={true} color={MD2Colors.red800} size={"large"}/>
              <Text variant="bodyMedium" style={{color: "red", marginTop:12, letterSpacing:6}}>Please wait!</Text>
              <Text variant="bodyMedium" style={{color: "blue", marginVertical:2, letterSpacing:3}}>Data are loading...</Text>
           </View> 
        );
      }
    
      if (isError) {
        return (
          <View style={styles.errorContainer}>
            <Text  variant="bodyMedium" style={{color: "red"}}>Error fetching data</Text>
          </View>
        );
      }

    const handleEndReached = () => {
        if (!isFetching) {
        setIsFetching(true);
        // Simulate loading delay
        setTimeout(() => {
            const nextVisibleCards = cards.slice(0, visibleCards.length + 10); // Show next 10 items
            setVisibleCards(nextVisibleCards);
            setIsFetching(false);
        }, 1000); 
        }
    };

// console.warn('length=>', visibleCards.length)
const PokemonItem = ({item,imageUrl, onPress }:any) => {
    return (
        <Card>
            <Card.Title titleStyle={{fontWeight:'bold', letterSpacing:2}} title={item.name} subtitle={item.supertype} />
            <Card.Cover source={{ uri: imageUrl }} />
            <Card.Actions style={{marginRight:6}}>
             <Button onPress={onPress} mode="contained">Go to Details</Button>
            </Card.Actions>
     </Card>
    );
  };

  const handlePokemonPress = (item: any) => {
    navigation.navigate('PokemonDetails', { item });
  };

  return (
    <SafeAreaView style={{flex:1}}>
    <View style={{flex:1 , backgroundColor:'tomato'}}>
      <View style={{flex:1 , backgroundColor:'cyan'}}>
       <Text variant="titleLarge" style={{alignSelf:'center',marginVertical:12, fontWeight:'bold',letterSpacing:5}}>Pokemon List</Text>
       <Text variant="bodyLarge" style={{alignSelf:'center',letterSpacing:3}}>Total [{visibleCards.length}/{cards.length}]</Text>
        <Divider style={{backgroundColor:"red", marginHorizontal:12}} bold={true}/>
        <FlatList
            ListFooterComponent={isFetching ? <ActivityIndicator animating={true} color={MD2Colors.blue300} size={"large"}/> : null}
            onEndReached={handleEndReached} // Load more data when end of list is reached
            onEndReachedThreshold={0.1} // Load more when 10% from the end
            data={visibleCards}
            keyExtractor={(item: { id: any }) => item.id}
            numColumns={2}
            renderItem={({ item }: any) => (
            <View style={{flex:1,padding:5,marginHorizontal:1,borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                <PokemonItem  item = {item} imageUrl={item.images.small} onPress={() => handlePokemonPress(item)} />                
            </View>
            )}
        />
        
        <FAB
            label="Up"
            style={{  position: 'absolute',
            margin: 16,
            right: 0,
            bottom: 0,}}
            onPress={handleEndReached}
         />
  
      </View>
       
    </View>
    </SafeAreaView>

  )
}

export default PokemonList;

const styles = StyleSheet.create({
    pokemonContainer: { 
         padding: 10,
         borderBottomWidth: 1, 
         borderBottomColor: '#ccc' 
        },
        loadingContainer : { 
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center' , 
            backgroundColor:'pink'
        },
        errorContainer: { 
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center' },
    pokemonItemStyle: { 
        width: 150, 
        height: 150,
        backgroundColor: 'blue'
        },
    imageStyle : { 
        width: '100%', 
        height: '100%' 
    }
})