import { LitElement,css, html } from "lit";

export class PostPage extends LitElement{
    constructor(){
        super();
         }
    static get style(){
        return css `
                :host {
                    background: red;
                }
                *{
                    box-sizing:border-box;
                    padding:0;
                    margin:0;
                    }
                section {
                    display: flex;
                    flex-direction: column;
                };
                `
    }
    render(){
        return html`
        <section>
            <poke-comp></poke-comp>
        </section>
        `; 
    }
    connectedCallback() {
       super.connectedCallback() ;
    }
}
window.customElements.define("post-page", PostPage);