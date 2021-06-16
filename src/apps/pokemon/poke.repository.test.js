import axios from "axios";
import { EVOLUTIONPOKEMON } from "../../../fixtures/evolPok";
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
        expect(EVOLUTION_CHAIN.data.chain.evolves_to[0].species.name).toBe("ivysaur");
    })

    test("should receive a evolution object", async ()=>{
        const pokeAllrepo= new PokeAllRepository();
        pokeAllrepo.getEvolution=jest.fn().mockResolvedValue(EVOLUTIONPOKEMON);
        pokeAllrepo.getId=jest.fn().mockResolvedValue(1);
        const number=  pokeAllrepo.getId("https://pokeapi.co/api/v2/evolution-chain/1/");
        const objEvolution=await pokeAllrepo.getEvolution(EVOLUTION_CHAIN);
        expect(objEvolution.data).not.toBe(EVOLUTIONPOKEMON);
    })

    test("should receive species data", async ()=>{
        const pokeAllrepo= new PokeAllRepository();
        pokeAllrepo.getSpeciesData=jest.fn().mockResolvedValue(SPECIES);
        const result= await pokeAllrepo.getSpeciesData(1);
        expect(result).toBe(SPECIES);
        
    })

    
    
})