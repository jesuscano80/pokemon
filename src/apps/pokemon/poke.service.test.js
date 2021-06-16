import { EVOLUTION_CHAIN } from "../../../fixtures/evolution";
import { POKEMON20} from "../../../fixtures/first20Pokemon"
import { POKEMONLISTBASIC } from "../../../fixtures/Pokemon20ListBasic"
import { SPECIES } from "../../../fixtures/species";
import { PokeAllRepository } from "./poke.repository"
import { PokeService } from "./poke.service";
jest.mock("./poke.repository");
       
describe("Test Pokemon service", ()=>{
    beforeEach(()=>{
        PokeAllRepository.mockClear();
    })
    test("should get 20 pokemon",async()=>{
        PokeAllRepository.mockImplementation(()=>{
            return{
                getAllPokemonData:()=>{
                    return POKEMON20 },
                getAllPokemon:()=>{
                    return POKEMONLISTBASIC
                }
                
            }
        })
        const service= new PokeService();
        const result= await service.get20Pokemon();
        expect(result).toBe(POKEMON20);
    })

    test("should receive the evolution chain",async()=>{
        PokeAllRepository.mockImplementation(()=>{
            return{
                getEvolutionChain:()=>{
                    return EVOLUTION_CHAIN
                }
            }
        })
        const service= new PokeService();
        const result= await service.getEvolutionChain(1);
        expect(result).toBe(EVOLUTION_CHAIN);
    })

    test("should receive the species data", async ()=>{
        PokeAllRepository.mockImplementation(()=>{
            return {
                getSpeciesData:()=>{
                    return SPECIES
                }
            }
        })
        const service= new PokeService();
        const result= await service.getSpeciesData(1);
        expect(result).toBe(SPECIES);
    })
})