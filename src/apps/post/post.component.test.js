import { PostRepository } from "./posts.repository"
import { POST} from "./../../../fixtures/posts"
import { PostComponent } from "./post.component";
jest.mock("./posts.repository");
describe("Post component",()=>{
    beforeEach(()=>{
        PostRepository.mockClear();      
    })

    test("should show all post", async ()=>{
        PostRepository.mockImplementation(()=>{
            return {
                getAllPosts : ()=> POST
            }
        })
        const component = new PostComponent();
        await component.connectedCallback();
        const posts= component.shadowRoot.querySelector("#posts")
        expect(posts).not.toBe(null);
    })
})