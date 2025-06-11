import { Identity } from './Auth/Identity.js';
import { Pokemon } from './models/pokemon.js';
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {Identity} */
  identity = null;

  /**@type {Pokemon[]} */
  wildPokemons = [];
}

export const AppState = createObservableProxy(new ObservableAppState())