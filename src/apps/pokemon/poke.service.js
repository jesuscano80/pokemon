import { PokeAllRepository } from "./poke.repository";

export class PokeService{
    constructor(){
        this.service= new PokeAllRepository();
    }
      async get20Pokemon(){
        const list= await this.service.getAllPokemon();
       return await this.service.getAllPokemonData(list);
    }
   
}