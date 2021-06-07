import { POKEMON } from "../../../fixtures/pokemon";
import { PokeRepository } from "./pokemon.repository"
import { PokemonService } from "./pokemon.service";
jest.mock("./pokemon.repository");
describe("Testing pokemon service", ()=>{
    beforeEach(()=>{
        PokeRepository.mockClear();
    })
    test("should get Pokemon Ditto data",()=>{
        PokeRepository.mockImplementation(()=>{
            return {getPokemonDitto: ()=>{
                return POKEMON
                }
            }
        })
        const service= new PokemonService();
        const result= service.getPokemonDitto();
        const name=result.data.name;
        expect(name).toBe("ditto");

    })
})