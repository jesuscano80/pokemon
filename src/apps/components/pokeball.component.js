import { Router } from "@vaadin/router";
import { LitElement, css, html } from "lit";
import { PokeService } from "../services/poke.service";

export class Pokeball extends LitElement{
    
    constructor(){
        super();
        this.renderComplete=false;
        this.pokemonsInPokeball=[];
        this.service= new PokeService();
        this.allPokemon;
        
    }

    static get properties(){
        return{
            renderComplete: {type: Boolean}
        }
    }

    static get styles(){
        return css`
                  * {
            box-sizing: border-box;
            margin:0;
            padding: 0;
        }
        :host{
            width:100%;
            display: flex;
            flex-direction: column;
        }
        .btn {
            width: calc(100% - 40px);
            height: 32px;
            margin: 5px auto;
            border: none;
            background-color: var(--color-lightGrey);
            color: var(--color-white);
            border-radius: var(--radius-m);
            cursor: pointer;
        }
        section {
            display: grid;
            grid-template-columns: repeat(3 , 1fr);
        }
        .card{
            margin: 0 auto;
            margin-top: 20px;
            min-height: 330px;
            max-height:330px;
            width:220px;
            border: 1px solid black;
            border-radius:5px;
            box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
        }
        .loading{
            display:flex;
            justify-content:center;
            align-items:center;
            height: 100vh; 
            width: 100%; 
            cursor: wait; 
        }
        .bannercolor{
            display:flex;
            justify-content:flex-end;
            align-items:flex-start;
            width:100%;
            height: 120px;
            background: linear-gradient(90deg, rgba(53,50,106,1) 0%, rgba(65,65,201,1) 6%, rgba(0,212,255,1) 100%);
        }
        .card-body{
            text-align: center;
            position: relative;
            top: -50px;
            display:flex;
            flex-direction: column;
            height:calc(100% - 70px);
        }
        heart-comp{
            cursor: pointer;
        }    
        .div-image{
            display:flex;
            justify-content:center;
            border-radius:50px;
            width:100px;
            background-color: white;
            overflow: hidden;
            margin:0 auto;
        }
        .card-image{
            background: rgba(1,1,1,0.1);
            border-radius:50px;
            padding: 7px;
           
        }
        .hidden{
        display:none;
        }
        
        .pokemon-name{
            padding: 10px 0;
            font-size:1.5em;
        }
        .card-bottom-tittle{
            display:grid;
            grid-template-columns: repeat(3, 1fr);
        }
        .card-bottom-data{
            display:flex;
            justify-content:space-around;
            align-items:center;
        }
        .divIcon {
            height:50px;
            width: 50px;
            margin: 0 auto;
        }
        .icon{
            height: 100%;
            border-radius:50%;
        }
        .card-bottom-tittle {
            padding:10px;
            margin-top: auto;
            border-top: 1px solid black;
        }
        .exp, .hei, .wei{
            font-size:0.8em;
        }
         ` 
    }

    render(){
        return this.pokemonsInPokeball?.length>0 ? html `<button class="btn" @click=${this.emptyPokeball}>Empty Favourites</button><section>${this.pokemonsInPokeball.map((pokemon)=> html`<style>.type-${pokemon.data.id}{background:var(--color-${pokemon.data.types[0].type.name})!important;}</style>
           
            <article class="card">
                <div class="bannercolor type-${pokemon.data.id}">
                    <heart-comp visibility=""></heart-comp>
                </div>
                <div class="card-body">
                    <div class="div-image">
                        <img class="card-image image-flying-${pokemon.data.id}" src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.data.id}.png">
                    </div>
                    <p class="pokemon-name" id="${pokemon.data.id}" >${this.capitalize(pokemon.data.name)}</p>
                    <div class="divIcon">
                        <img class="icon ${pokemon.data.types[0].type.name}" title="${pokemon.data.types[0].type.name}" alt="Pokemon type ${pokemon.data.types[0].type.name}" src="https://duiker101.github.io/pokemon-type-svg-icons/icons/${pokemon.data.types[0].type.name}.svg">    
                    </div>
                    <div class="card-bottom-tittle">
                        <div class="exp">exp</div>
                        <div class="hei">height</div>
                        <div class="wei">weight</div>
                        <div class="exp"><b>${pokemon.data.base_experience}pts</b></div>
                        <div class="hei"><b>${pokemon.data.height}m</b></div>
                        <div class="wei"><b>${pokemon.data.weight}kg</b></div>
                    </div> 
                </div>
            </article>
        
        `)}</section>`                       
                          : html `<div class="loading">
                          <img  src="https://fontmeme.com/permalink/210614/37897e1b41de8022cdba4116f7b4c608.png"> 
                      </div>`
    }                              


  async connectedCallback(){
        super.connectedCallback();
        const storedPokemon=JSON.parse(localStorage.getItem("pokeInside"));
        this.allPokemon= await this.service.get20Pokemon();
        this.pokemonsInPokeball= this.allPokemon.filter((elem)=> storedPokemon.includes(elem.data.id));
        this.renderComplete=true; 
    }
    capitalize= (name)=>{
        return  name[0].toUpperCase() + name.slice(1);
      }
    emptyPokeball(){
        localStorage.removeItem("pokeInside");
        Router.go("/");
        this.eventGenerator("changebtnfavourite")
    }
    eventGenerator(param) {
        const message = new CustomEvent(param, {
          bubbles: true,
          composed: true,
          detail: {
            msg: param
          },
        });
        this.dispatchEvent(message);
       
      }
}

window.customElements.define("pokeball-comp", Pokeball);