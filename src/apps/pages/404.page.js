import { Router } from "@vaadin/router";
import { LitElement,html, css } from "lit";

export class page404 extends LitElement{
    constructor(){
        super();
    }
    static get styles(){
        return css``
    }
    render(){
        return html`<p>Este es el 404</p><button type="button" @click="${this.backHome}">Ir al menu</button>`
    }

    connectedCallback(){
        super.connectedCallback();
    }

    backHome(){
        Router.go("/");
    }
}

customElements.define("page-404",page404);