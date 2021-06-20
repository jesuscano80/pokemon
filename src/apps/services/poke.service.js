import { PokeAllRepository } from "../repos/poke.repository";

export class PokeService{
    constructor(){
        this.service= new PokeAllRepository();
    }
      async get20Pokemon(){
        const list= await this.service.getAllPokemon();
        return await this.service.getAllPokemonData(list);
    }
    async getAllPokemon(){
      return await this.service.getAllPokemon();
    }

    async getEvolutionChain(param){
        return await this.service.getEvolutionChain(param);
    }

    async getSpeciesData(pokeid){
      return await this.service.getSpeciesData(pokeid);
    }


}