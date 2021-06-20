import axios from "axios";
import { EVOLUTION_CHAIN } from "../../../fixtures/evolution";
import { POKEMON20 } from "../../../fixtures/first20Pokemon";
import { POKEMONLISTBASIC } from "../../../fixtures/Pokemon20ListBasic";
import { PokeAllRepository } from "./poke.repository";
import { SPECIES} from "../../../fixtures/species"
jest.mock("axios");


describe("test pokerepositoryAll",()=>{
    beforeEach(()=>{
        axios.mockClear();
    })
    test("should receive 20 first Pokemon list basic",async()=>{
        axios.get=jest.fn().mockResolvedValue(POKEMONLISTBASIC);
        const pokeAllRepo= new PokeAllRepository();
        const pokemon=await pokeAllRepo.getAllPokemon();
        expect(pokemon.data.results.length).toBe(POKEMONLISTBASIC.data.results.length);
    })

    test("should receive 20 first Pokemon list data advanced", async()=>{
       
        axios.get=jest.fn().mockResolvedValue(POKEMON20);
        const pokeAllrepo= new PokeAllRepository();
        const pokemonData= await pokeAllrepo.getAllPokemonData(POKEMONLISTBASIC);
        expect(pokemonData.length).toBe(POKEMON20.length);
    })

    test("should receive evolution chain", async()=>{
       
        axios.get=jest.fn().mockResolvedValue(EVOLUTION_CHAIN);
        const pokeAllrepo= new PokeAllRepository();
        const pokemonData= await pokeAllrepo.getEvolutionChain(1);
        expect(pokemonData.data.chain.evolves_to[0].species.name).toBe(EVOLUTION_CHAIN.data.chain.evolves_to[0].species.name);
    })
    
    test("should receive evolution chain", async()=>{
       
        axios.get=jest.fn().mockResolvedValue(EVOLUTION_CHAIN);
        const pokeAllrepo= new PokeAllRepository();
        const pokemonData= await pokeAllrepo.getEvolutionChain(0);
        expect(pokemonData.data.chain.species.name).toBe("bulbasaur");
    })
    test("should receive evolution chain", async()=>{
       
        axios.get=jest.fn().mockResolvedValue(EVOLUTION_CHAIN);
        const pokeAllrepo= new PokeAllRepository();
        const pokemonData= await pokeAllrepo.getEvolutionChain(0);
        expect(pokemonData).toBe(EVOLUTION_CHAIN);
    })
    test("should receive species data", async ()=>{
       axios.get=jest.fn().mockResolvedValue(SPECIES);
        const pokeAllrepo= new PokeAllRepository();
        const result= await pokeAllrepo.getSpeciesData(1);
        expect(result).toBe(SPECIES);
        
    })

    
    
})