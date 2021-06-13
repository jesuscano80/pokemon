import axios from "axios";
const url="https://pokeapi.co/api/v2/"
export class PokeAllRepository {
    async getAllPokemon(){
        const pokemonlist= await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=50")
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
    const evolutionChain=await axios.get(`${url}evolution-chain/${pokeid}`);
    return evolutionChain;
   }
    
   async getEvolution(evolutionChain){
       const objEvol={};
       if (evolutionChain.data.chain.species.name){
           const name1=evolutionChain.data.chain.species.name;
             objEvol ={[getID(evolutionChain.chain.species.url)]: `${name1}`}
           
       }
       if(evolutionChain.data.chain.evolves_to[0].species.name){
           const name2=evolutionChain.data.chain.evolves_to[0].species.name;
           objEvol ={[getID(evolutionChain.chain.evolves_to[0].species.url)]: `${name2}`}

           if (evolutionChain.data.chain.evolves_to.length==2){
               const name3= evolutionChain.data.chain.evolves_to[1].species.name;
           objEvol ={[getID(evolutionChain.chain.evolves_to[1].species.url)]: `${name3}`}

           }
           else{
            const name4=evolutionChain.data.chain.evolves_to[0].evolves_to[0].species.name;
           objEvol ={[getID(evolutionChain.chain.evolves_to[0].evolves_to[0].species.url)]: `${name4}`}

           }
        
       }
   
       console.log(objEvol);
       return objEvol;
   }


    getId(url){
        const sentence=url.split("/")
        const toArray=[...sentence];
        return toArray[toArray.length-2];
    }

}