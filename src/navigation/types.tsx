import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
//   import type { StackScreenProps } from '@react-navigation/stack';
//   import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';


export type stackScreens ={
  Home:undefined,
  FirstTimeScreen: undefined;
  BottomTabScreen : undefined;
  PokemonList : undefined;
  PokemonDetails: {item : any};
  PokemonName : undefined;
  SearchPokemon : {url : any};
}

