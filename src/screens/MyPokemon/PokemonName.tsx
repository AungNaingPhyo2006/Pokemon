import React, { useState, useEffect } from 'react';
import { View,  FlatList, ActivityIndicator, StyleSheet, Alert } from 'react-native';
import { Card, Button, Badge,Text, MD2Colors } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { stackScreens } from 'navigation/Types';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from 'components/searchBar/SearchBar';
import { usePokemonAPI } from 'utils/ApiUtils';
import axios from 'axios';

type propsType = NativeStackScreenProps<stackScreens, "PokemonName">;

const PokemonName = (props: propsType) => {
  const { navigation } = props;
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [nextPage, setNextPage] = useState('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [waitMe, setWaitMe] = useState('See More');


  const fetchPokemon = async () => {
    if (loading) return; 
    setLoading(true);
    try {
      const response = await fetch(nextPage);
      const data = await response.json();
      setNextPage(data.next); // Update the next page URL
      setPokemonList(prevList => [...prevList, ...data.results]); 
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon();
  }, []); 

  const handleLoadMore = () => {
    if (loading) return;
    fetchPokemon(); 
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = pokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPokemonList(filtered);
    setLoading(false);
  };


  const renderItem = ({ item }: any) => (
    <Card style={{ marginVertical: 3, padding: 5, marginHorizontal: 12 }}>
      <Card.Title titleStyle={{ letterSpacing: 3, fontWeight: 'bold' }} title={`Name: ${item.name}`} />
      <Card.Actions>
        <Button mode='contained-tonal' onPress={() => handleSeeMore(item.url)}>{waitMe}</Button>
      </Card.Actions>
    </Card>
  );

 

  const handleSeeMore = async (url: string) => {
    setWaitMe('Please wait!')

    try {
      const response = await axios.get(url);
      const abilities = response.data.abilities;
      const moves = response.data.moves;
      const species = response.data.species;
      const stats = response.data.stats;
      const types = response.data.types;
      setWaitMe('See More')
      navigation.navigate('SearchPokemon', { abilities,moves,species, stats, types});
  
    } catch (error : any) {
      Alert.alert('Error fetching Pokemon:', error);
    }
  }
  
  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator size="large" color="#0000ff" />;
  };
// <=================Return Start Here======================>
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.subContainer}>
        <Text variant="titleLarge" style={styles.titleStyle}> My Pokemons</Text>
      </View>

      <View style={{ flex: 1, backgroundColor: 'cyan' }}>
        <SearchBar value={searchQuery} onChangeText={handleSearch} />
        <FlatList
          data={filteredPokemonList}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.1}
        //   ListFooterComponent={renderFooter}
        />
        {loading && <Text style={{ color: 'skyblue' }}>Loading...</Text>}
      </View>
    </SafeAreaView>
  );
};

export default PokemonName;

const styles = StyleSheet.create({
 subContainer: { flex: 0.1, backgroundColor: 'pink', justifyContent: 'space-around', flexDirection: 'row' },
 titleStyle: { color: 'blue', alignSelf: 'center', letterSpacing: 3, fontWeight: 'bold' },
});
