import { Pokemon } from "../models/pokemon.js";
import { pokeApi } from "../utils/Axios.js";


class WildPokemonsService {


  async getWildPokemons() {
    const res = await pokeApi.get('pokemon');
    console.log('🦮got pokemon!', res.data);
    
  }
}

export const wildPokemonsService = new WildPokemonsService();