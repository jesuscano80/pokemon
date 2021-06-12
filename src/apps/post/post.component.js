import { PostService } from "./post.service";
import {html, LitElement, css} from "lit";
export class PostComponent extends LitElement{

    constructor(){
        super();
        this.service= new PostService();
    }
    static get properties(){
        return {
        hello: {type: String},
        posts: { type: Object}
        }
    }
    static get styles(){
        return css`p{ color: var(--color-poc, orange)} ::slotted(p){
            color: brown}:host{display:block;border:1px sol
                id black;}`
    }
    render(){
        this.disabled=true;
        this.value="string";
        return html`<p> ${this.hello}</p>
        <slot></slot>
        <p part="hello">PART</p>
        <div id="posts">
            <ul>${this.posts && this.posts.data.map((post)=> html`<li>${post.title}</li>`)}</ul>
        </div>
        <input type="text" .value="${this.value}">
        <button @click="${this.clickme}" ?disabled="${this.disabled}">click</button>
        ` 
    }
    clickme(e){
        console.log(e);
    }

    async connectedCallback(){
        super.connectedCallback();
        this.hello=this.getAttribute("name") ||"mundo";
        this.posts=await this.service.getPosts();
        
    }
}

window.customElements.define("genk-posts", PostComponent);