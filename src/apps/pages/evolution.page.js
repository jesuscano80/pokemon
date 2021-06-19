
import { LitElement,css, html } from "lit";

export class EvolutionPage extends LitElement{
    constructor(){
        super();
    }
    static get styles(){
        return css``
    }
    render(){
        return html`<evolution-comp></evolution-comp>`
    }

    connectedCallback(){
        super.connectedCallback();
    }

}

customElements.define("evolution-page", EvolutionPage);