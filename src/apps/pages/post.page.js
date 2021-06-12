export class PostPage extends HTMLElement{
    constructor(){
        super();
         }
    connectedCallback() {
        this.innerHTML = `<style>poke-comp{display:grid;grid-template-columns: repeat(5, 1fr);gap:1em;};</style><poke-comp></poke-comp>`;
    }
}
window.customElements.define("post-page", PostPage);