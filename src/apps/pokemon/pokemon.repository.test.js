import axios from "axios";
import { POKEMON } from "../../../fixtures/pokemon";
import { PokeRepository } from "./pokemon.repository";
jest.mock("axios");
describe("Pokemon test", ()=>{
    beforeEach(()=>{
        axios.mockClear();
        axios.get=jest.fn().mockResolvedValue(POKEMON);
        
    })
    test("should be Ditto name",async ()=>{
        const repository= new PokeRepository();
        const result=await repository.getPokemonDitto();
        const name=result.data.name;
        expect(name).toBe("ditto");
    })
    test("should be Ditto weight",async ()=>{
        const repository= new PokeRepository();
        const result=await repository.getPokemonDitto();
        const weight=result.data.weight;
        expect(weight).toBe(40);
    })
})