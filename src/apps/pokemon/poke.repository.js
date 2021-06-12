import axios from "axios";

export class PokeAllRepository {
    async getAllPokemon(){
        const pokemonlist= await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
        return pokemonlist;
        
    }
   async getAllPokemonData(pokemonlist){
    const AllPokemon=[];
    for (const pokemon of pokemonlist.data.results){
        AllPokemon.push(await axios.get(pokemon.url));

    }

    return AllPokemon

   }
    
}

