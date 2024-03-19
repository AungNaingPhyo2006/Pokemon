// usePokemonAPI.js
import useSWR from 'swr';
import axios from 'axios';

const fetcher = async (url : any) => {
  const response = await axios.get(url);
  return response.data;
};

export function usePokemonAPI(url:any) {
    const { data, error, mutate } = useSWR(url, fetcher);
  
    return {
      cards: data ? data.data : [],
      isLoading: !error && !data,
      isError: error,
      mutate: mutate,
    };
  }

//   https://api.pokemontcg.io/v2/sets/<id>
//https://api.pokemontcg.io/v2/types
// https://api.pokemontcg.io/v2/rarities