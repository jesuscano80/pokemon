import axios from "axios";

export class PokeRepository{
    getPokemonDitto= async ()=>{
        const result= await axios.get("https://pokeapi.co/api/v2/pokemon/1");
        return result;
    }
}


