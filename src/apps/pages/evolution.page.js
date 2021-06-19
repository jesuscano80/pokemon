
import { LitElement,css, html } from "lit";

export class EvolutionPage extends LitElement{
    constructor(){
        super();
    }
    static get styles(){
        return css``
    }
    static get properties(){
        return {
            evolutions: {type: Object}
        }
    }
    render(){
        return html`<evolution-comp>
                        <ul>
                        ${this.evolutions?.map((evol)=> html `
                            <li id="name">name: ${evol.name}</li>
                            <li>Evolution image: 
                                <img aria-labelledby="name" class="image" src="https://pokeres.bastionbot.org/images/pokemon/${evol.id}.png">
                            </li>`)}
                        </ul>
                    </evolution-comp>`
    }

    connectedCallback(){
        super.connectedCallback();
        document.addEventListener("sendEvolution", (e)=>{
            this.evolutions=[...e.detail.evolution];
        })
        
    }

}

customElements.define("evolution-page", EvolutionPage);