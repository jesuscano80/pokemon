import { POST } from "../../../fixtures/posts"
import { PostService } from "./post.service"
import { PostRepository } from "./posts.repository"
jest.mock("./posts.repository")
describe("Post service",()=>{
    beforeEach(()=>{
        PostRepository.mockClear();
    })
    test("should get posts", async ()=>{
        PostRepository.mockImplementation(()=>{
            return {
                getAllPosts: ()=>{
                    return POST
                }
            }
        })
        const service= new PostService();
        const posts = await service.getPosts();
        expect(posts.data.length).toEqual(100);
        expect(PostRepository).toHaveBeenCalledTimes(1);
    })
})