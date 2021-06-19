import { LitElement, css, html } from "lit";

export class Pokeball extends LitElement{
    constructor(){
        super();
    }
    static get styles(){
        return css``
    }
    render(){
        return html`<pokeball-comp>
                        <p>This page show pokemons catched in pokeball and show their data</p>
                    </pokeball-comp>`
    }

    connectedCallback(){
        super.connectedCallback();
    }

}

customElements.define("pokeball-page", Pokeball);