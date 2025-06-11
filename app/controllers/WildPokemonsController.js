import { AppState } from "../AppState.js";
import { wildPokemonsService } from "../services/WildPokemonsService.js";
import { Pop } from "../utils/Pop.js";


export class WildPokemonsController {
  constructor() {
    console.log("🎛️👾WildPokemonsController is ready!");
    this.getWildPokemons();
  }

  async getWildPokemons() {
    try {
      await wildPokemonsService.getWildPokemons();
    } catch (error) {
      Pop.error(error, '🎛️getWildPokemon failed')
      console.error('🎛️getWildPokemons failed', error);
    }
  }

}