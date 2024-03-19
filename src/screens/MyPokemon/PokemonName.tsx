import React, { useState, useEffect } from 'react';
import { View,  FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { Card, Button, Badge,Text } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { stackScreens } from 'navigation/Types';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from 'components/searchBar/SearchBar';
import { usePokemonAPI } from 'utils/ApiUtils';

type propsType = NativeStackScreenProps<stackScreens, "PokemonName">;

const PokemonName = (props: propsType) => {
  const { navigation } = props;
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [nextPage, setNextPage] = useState('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchPokemon = async () => {
    if (loading) return; // Prevent multiple simultaneous requests
    setLoading(true);
    try {
      const response = await fetch(nextPage);
      const data = await response.json();
      setNextPage(data.next); // Update the next page URL
      setPokemonList(prevList => [...prevList, ...data.results]); // Append new results
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon();
  }, []); // Fetch on initial render

  const handleLoadMore = () => {
    if (loading) return;
    fetchPokemon(); // Fetch more Pokemon when scrolled to the bottom
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
        <Button mode='contained-tonal' onPress={() => handleSeeMore(item.url)}>See more</Button>
      </Card.Actions>
    </Card>
  );

  const handleSeeMore = (url: string) => {
    console.warn('jkk', url)
    return
    navigation.navigate('SearchPokemon',{url: url})

  }
  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator size="large" color="#0000ff" />;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 0.1, backgroundColor: 'pink', justifyContent: 'space-around', flexDirection: 'row' }}>
        <Text variant="titleLarge" style={{ color: 'blue', alignSelf: 'center', letterSpacing: 3, fontWeight: 'bold' }}> My Pokemons</Text>
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

});
