import axios from "axios";

export class PostRepository{
    async getAllPosts(){
        const allPosts = await axios.get("https://jsonplaceholder.typicode.com/posts");
        return allPosts;
    }
}