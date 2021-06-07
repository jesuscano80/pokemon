import { PokeRepository } from "./pokemon.repository";

export class PokemonService {
    constructor(){
        this.service= new PokeRepository();
    }
    getPokemonDitto(){
        return this.service.getPokemonDitto();
    }
}