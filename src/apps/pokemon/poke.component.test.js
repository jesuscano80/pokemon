import { PokeComponent } from "./poke.component";
import { PokeAllRepository } from "./poke.repository"
import { PokeService } from "./poke.service";
import { POKEMON20 } from "../../../fixtures/first20Pokemon";
jest.mock("./poke.repository");
jest.mock("./poke.service");
describe("Testing Pokemon component",()=>{
    beforeEach(()=>{
        PokeAllRepository.mockClear();
    })
    test("should check component is showing info",async()=>{
        PokeAllRepository.mockImplementation(()=>{
            return {
                getAllPokemonData:()=>{
                    return POKEMON20
                }
            }
        })
        const component = new PokeComponent();
        await component.connectedCallback();
        const infoLoaded=component.shadowRoot.textContent;
        expect(infoLoaded).not.toBeNull();
    })
})