import { Router } from "@vaadin/router";
import { LitElement,html, css } from "lit";

export class Page404 extends LitElement{
    constructor(){
        super();
    }
    static get styles(){
        return css`
        :host{
         display: flex;
         flex-direction: column-reverse;
         justify-content: center;
         align-items: center;
         height: 100vh;
        }
        .divimage{
            margin: auto auto;
            width:400px;
            overflow: hidden;
        }
        .divimage > img{
            width:100%;
            height: auto;
        }
        .cursor{
            cursor: pointer;
        }
        `
    }
    render(){
        return html`
                <div class="divimage">
                    <img 
                    src="https://raw.githubusercontent.com/jesuscano80/webcomponent-like-heart/master/404.png">
                    <svg class="cursor" @click=${this.backHome} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="80" height="80" viewBox="0 0 24 24" stroke-width="1.5" stroke="#356abc" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="5" y1="12" x2="11" y2="18" />
                        <line x1="5" y1="12" x2="11" y2="6" />
                    </svg>

                </div>`
    }

    connectedCallback(){
        super.connectedCallback();
    }

    backHome(){
        Router.go("/");
    }
}

customElements.define("page-404", Page404);