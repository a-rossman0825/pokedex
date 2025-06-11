import { WildPokemonsController } from "./controllers/WildPokemonsController.js"


class App {

wildPokemonsController = new WildPokemonsController();

}

window['app'] = new App()


