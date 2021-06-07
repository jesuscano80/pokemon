import { PostRepository } from "./posts.repository";

export class PostService {
    constructor(){
        this.repository= new PostRepository();
    }
    async getPosts(){
        return await this.repository.getAllPosts();
    }
}