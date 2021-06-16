import axios from "axios";

export class PokeAllRepository {
    async getAllPokemon(){
        const pokemonlist= await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100")
        return pokemonlist;
        
    }
   async getAllPokemonData(pokemonlist){
    const AllPokemon=[];
    for (const pokemon of pokemonlist.data.results){
        AllPokemon.push(await axios.get(pokemon.url));
    }

    return AllPokemon
   }



   async getEvolutionChain(pokeid){
    const url="https://pokeapi.co/api/v2/";
    const evolutionChain=await axios.get(`${url}evolution-chain/${pokeid}`);
    return evolutionChain;
   }

   async getSpeciesData(pokeid){
       const url ="https://pokeapi.co/api/v2/";
       const species=await axios.get(`${url}pokemon-species/${pokeid}`);
       return species;
   }
    
   

}