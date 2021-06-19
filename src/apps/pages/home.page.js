import { LitElement, css, html } from "lit";

export class HomePage extends LitElement{
    constructor(){
        super(); 
        this.lightDomReady=false;  
    }
    static get styles(){
        return css``
    }
    static get properties(){
        return {
            lightDomReady: {type: Boolean},
            allPokemon: {type: Object}
        }
    }

    render(){
        return html`<poke-comp> 
            <!-- INSIDE POKE-COMP IS LIGHTDOM, IT DOESNT DISPLAY ONLY FOR SEO -->
        
                        ${this.allPokemon?.map((pokemon)=> html`
                            <ul >
                                <li>
                                    <img name="imagen" src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.data.id}.png" aria-labelledby="description1"/>
                                    <p id="description1" name="description">${pokemon.data.name} image</p>
                                    <p id="description">${pokemon.data.name} data:</p>
                                    <ul>
                                        <li>experince points: ${pokemon.data.base_experience} pts</li>
                                        <li>height: ${pokemon.data.height} m</li>
                                        <li>weight: ${pokemon.data.weigth} kg</li>
                                    </ul>
                                </li>

                            </ul>
                        `)}
            
            <!--  -->
        </poke-comp>`
    }
    connectedCallback(){
        super.connectedCallback();
        document.addEventListener("datatypes", (e)=>{
          this.allPokemon=[...e.detail.all];
          this.lightDomReady=true;
        })
    }
}
window.customElements.define("home-page", HomePage);