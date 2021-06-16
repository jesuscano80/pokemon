import { PokeAllRepository } from "./poke.repository";

export class PokeService{
    constructor(){
        this.service= new PokeAllRepository();
    }
      async get20Pokemon(){
        const list= await this.service.getAllPokemon();
       return await this.service.getAllPokemonData(list);
    }

    async getEvolutionChain(param){
        return this.service.getEvolutionChain(param);
    }

    async getSpeciesData(pokeid){
      return this.service.getSpeciesData(pokeid);
    }


}