import axios from "axios";
import { POKEMON20 } from "../../../fixtures/first20Pokemon";
import { POKEMONLISTBASIC } from "../../../fixtures/Pokemon20ListBasic";
import { PokeAllRepository } from "./poke.repository";
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

})