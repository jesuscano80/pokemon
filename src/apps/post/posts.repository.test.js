import axios from "axios";
import { POST } from "../../../fixtures/posts";
import { PostRepository } from "./posts.repository"
jest.mock("axios");

describe("Posts repository", ()=>{
    beforeEach(()=>{
        axios.mockClear();
    })
    test("should get all posts",async ()=>{
        axios.get =jest.fn().mockResolvedValue(POST)

        const repository = new PostRepository();
        const result= await repository.getAllPosts();
        expect(result.data.length).toEqual(100);
    })
})