import { LitElement, css, html } from "lit";
import { PokeComponent } from "./poke.component";

export class NavComponent extends LitElement{
    constructor(){
        super();
    }

    static get styles(){
        return css`*{
                    box-sizing:border-box;
                    padding:0;
                    margin:0;
                    }
                    form{
                    
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    }
                    input{
                        outline: none;
                        border: 5px solid #356abc;
                        height: 36.5px;
                        border-radius: 8px 0 0 8px;
                        width: 100%;
                        background-color: #F5FFFA;
                        
                    }
                    button{
                        outline: none;
                        border: 5px solid #F5FFFA;
                        border-left: none;
                        height: 36.5px;
                        width: 36.5px;
                        border-radius: 0 8px 8px 0;
                        background-color: #ffcc03;

                    }
                    section{
                    justify-content: space-between;
                    max-width: 100%;
                    min-width: 100%;
                    height: 100vh;
                    max-height: 100%;
                    display: flex;
                    flex-direction: column;
                    padding: 20px;
                    }
                    .img {
                        height:120px;
                        margin:0 auto;
                        border-radius: 50%;
                        overflow:hidden;
                        box-shadow: 0 0 10px 3px #F5FFFA;
                    }
                    img {
                        height:100%;
                        transform:scale(1.2);
                    }
                    svg {
                        color: red;
                    }
                    .logo{
                        margin-left:10px;
                        width:10%;
                        height:10%;
                    }
                  
        `
    }


    render(){
        return html`<section>
                        <div class="logo">
                            <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/320px-International_Pok%C3%A9mon_logo.svg.png">
                        </div> 
                            <form>
                          <input list="types" type="text">
                            <datalist id="types">
                                <option value="pikachu"></option>
                                <option value="squirtel"></option>
                            </datalist>
                            <button type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="44" height="44" viewBox="0 0 24 24" stroke-width="2" stroke="#356abc" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <circle cx="10" cy="10" r="7"/>
                                <line x1="21" y1="21" x2="15" y2="15"/>
                                </svg>
                            </button>
                        </form>
                        <li @click="${this.lessPower}">less power</li>
                        <li @click="${this.maxPower}">max power</li>


                        <div class="img">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/768px-Pok%C3%A9_Ball_icon.svg.png">
                        </div>
                    </section>` 
    }
    connectedCallback(){
        super.connectedCallback();
    }

    lessPower(){
        const message = new CustomEvent("lesspower", {
            bubbles: true,
            composed: true,
            detail: {
            msg: 'Evento lesspower'
            }
            })
            this.dispatchEvent(message);
            
    }

    maxPower(){
        const message = new CustomEvent("maxpower", {
            bubbles: true,
            composed: true,
            detail: {
            msg: 'Evento maxpower'
            }
            })
            this.dispatchEvent(message);
            
    }
}

customElements.define("nav-component", NavComponent)