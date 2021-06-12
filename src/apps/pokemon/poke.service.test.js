import { POKEMON20} from "../../../fixtures/first20Pokemon"
import { POKEMONLISTBASIC } from "../../../fixtures/Pokemon20ListBasic"
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
})