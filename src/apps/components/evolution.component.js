import { LitElement, css, html } from "lit";
import { PokeService } from "../services/poke.service";
import { router } from "../../router"
import { Router } from "@vaadin/router";

 

export class EvolutionComp extends LitElement{
    constructor(){
        super();
        this.service= new PokeService
        this.evolutions=null;
        this.allPokemon;
        this.chosen;
        this.renderComplete=false;
    }

    static get properties(){
        return {
            renderComplete: {type: Boolean}
        }
    }
  

    static get styles(){
        return css`
            article{
                display: flex;
                flex-direction: column;
                min-height: 100%;
            }
            .top {
                width: calc(100% - 40px);
                height: 32px;
                margin: 5px auto;
                border: none;
                background-color: var(--color-lightGrey);
                color: var(--color-white);
                border-radius: var(--radius-m);
                cursor: pointer;
            }
            .content {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: calc(100vh - 70px);
            }
            .evltns {
                display: flex;
                align-items: center;
                margin: 30px auto;
            }
            .evl {
                display: flex;
                flex-direction: column-reverse;
                align-items: center;
                margin: 0 25px;
            }
            .evl > p {
                font-size: 28px;
                color: var(--color-white);
                margin-block-start: 0;
                margin-block-end: 0;
                margin: 20px 0 0 0;
            }
            .evl > .img {
                width: 120px;
                padding: 35px;
                border-radius: 10000px;
            }
            .evl > .img > img {
                width: 100%;
                height: auto;
            }
            .evltns > .arrow {
                transform: translateY(-25px);
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .evltns > .arrow > svg {
                min-width: 70px;
                max-width: 70px;
                height: 80px;
            }
            .evltns > .arrow:last-of-type {
                display: none;
            }
            .target {
                background: var(--color-lightGrey);
                border-radius: var(--radius-m);
                margin: 0 auto;
                align-items: center;
                display: flex;
                height: 210px;
                max-width: calc(100% - 40px);
            }
            .target > .img {
                max-width: 150px;
                min-width: 150px;
                height: 150px;
                margin: 30px 50px 30px 30px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .target > .img > img {
                width: 100%;
                height: auto;
            }
            .target > .progress {
                height: 150px;
                min-width: 280px;
                max-width: 280px;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            .row {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 10px 0;
            }
            .row > label {
                color: var(--color-white);
                font-size: var(--font-size-l);
            }
            
            .target > .divIcon {
                min-width: 120px;
                max-width: 120px;
                height: 120px;
                margin: 30px 30px 30px 50px;
                border-radius: 10000px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .divIcon > .icon {
                width: 75px;
                height: auto;
            }
            .loading{
            display:flex;
            justify-content:center;
            align-items:center;
            height: 100vh; 
            width:100%; 
            cursor: wait; 
            }
            progress{
                appearance: none;
            }
            ::-webkit-progress-bar  {
                color: white;
                background-color: white;
                border-radius: 7px;
            }
            ::-moz-progress-bar{
                border-radius: 7px;
                color: white;
                background-color: white;
            }
            
            .bubble{
                background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, rgba(211, 211, 211, 0.8) 100%);

            }
        }`

    }   

        render(){  return this.renderComplete
            ? html `
                <style>.${this.chosen.data.types[0].type.name}{background:var(--color-${this.chosen.data.types[0].type.name})!important;}
                    .${this.chosen.data.types[0].type.name}p{background:var(--color-${this.chosen.data.types[0].type.name}-p)!important;}
                    progress::-webkit-progress-value{ background-color: var(--color-${this.chosen.data.types[0].type.name}-p)!important;border-radius: 7px;}
                    progress::-moz-progress-value {background-color: var(--color-${this.chosen.data.types[0].type.name}-p)!important;border-radius: 7px;}
                </style>
                <article class="card ${this.chosen.data.types[0].type.name}">
                    <button class="top" @click=${this.backHome}>
                        Back Home
                    </button>
                    <div class="content">
                        <div class="evltns">
                            ${this.evolutions.map((evol)=> html `
                            <div class="evl">
                                <p>${this.capitalize(evol.name)}</p>
                                <div class="img ${evol.name}" >
                                    <img class="image" src="https://pokeres.bastionbot.org/images/pokemon/${evol.id}.png">
                                </div>
                            </div>
                            <div class="arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="9 6 15 12 9 18" /></svg>
                            </div>
                            `)}
                        </div>
                        <div class="target">
                            <div class="img">
                                <img src=${this.chosen && this.chosen?.data.sprites.front_default} alt="image">
                            </div>
                            <div class="progress">
                                <div class="row">
                                    <label for="exp">Exp</label>
                                    <progress id="exp" max="250" value="${this.chosen?.data.base_experience}"></progress>
                                </div>
                                <div class="row">
                                    <label for="hei">Height</label>
                                    <progress id="hei" max="100" value="${this.chosen?.data.height}"></progress>
                                </div>
                                <div class="row">
                                    <label for="wei">Weight</label> 
                                    <progress id="wei" max="3200" value="${this.chosen?.data.weight}"></progress>
                                </div>
                            </div>
                            <div class="divIcon ${this.chosen?.data.types[0].type.name}">
                                <img class="icon" title="${this.chosen?.data.types[0].type.name}" alt="Pokemon type ${this.chosen?.data.types[0].type.name}" src="https://duiker101.github.io/pokemon-type-svg-icons/icons/${this.chosen?.data.types[0].type.name}.svg">    
                            </div>
                        </div>
                    </div>
                </article>
    `
        : html`<div class="loading">
           <img  src="https://fontmeme.com/permalink/210614/37897e1b41de8022cdba4116f7b4c608.png"> 
            </div>
          `
        
        
          }

    async connectedCallback(){
        super.connectedCallback();
        await this.getdataAPI();
        this.renderComplete=true;
    }
    updated(){
        this.chooseBubble();     

    }

    async getdataAPI(){
        this.id= router.location.params.id;
        this.allPokemon=await this.service.get20Pokemon();
        this.chosen = this.allPokemon.find((elem)=> elem.data.id == this.id);
        const speciesData=await this.service.getSpeciesData(this.id);
        const idEvolution=this.getId(speciesData.data.evolution_chain.url);
        const chain= await this.service.getEvolutionChain(idEvolution);
        const data=await this.getEvolution(chain);
        this.evolutions=data;
        this.eventGenerator("sendEvolution", this.evolutions);
    }
    chooseBubble(){
        const query=`.${this.chosen.data.name}`; 
        this.shadowRoot.querySelector(query).classList.add("bubble");    
    }

    async getEvolution(evolutionChain){
        var objEvol=[];
        if (evolutionChain.data.chain.species.name){
            const name1=evolutionChain.data.chain.species.name;
            
              objEvol.push({id:this.getId(evolutionChain.data.chain.species.url), name: `${name1}`})
            
        }
        if(evolutionChain.data.chain.evolves_to[0].species.name){
            const name2=evolutionChain.data.chain.evolves_to[0].species.name;
            objEvol.push({id:this.getId(evolutionChain.data.chain.evolves_to[0].species.url), name:`${name2}`})
 
            if (evolutionChain.data.chain.evolves_to.length==2){
                const name3= evolutionChain.data.chain.evolves_to[1].species.name;
                objEvol.push({id:this.getId(evolutionChain.data.chain.evolves_to[1].species.url) , name:`${name3}`})
            }
            
        else{
                try{
                    const name4=evolutionChain.data.chain.evolves_to[0].evolves_to[0].species.name;
                 objEvol.push({id:this.getId(evolutionChain.data.chain.evolves_to[0].evolves_to[0].species.url), name:`${name4}`})
                }
                catch{
                    
                }
                    
            }    
        }
        this.evolutions=objEvol;
        return objEvol;

    }
    capitalize(name1){
        return  name1[0].toUpperCase() + name1.slice(1);
      }  
   
 
     getId(url){
         const sentence=url.split("/")
         const toArray=[...sentence];
         return toArray[toArray.length-2];
     }
     backHome(){
         Router.go("/");
         this.eventGenerator("showButtons"); 
     }

     eventGenerator(param, param2) {
        const message = new CustomEvent(param, {
          bubbles: true,
          composed: true,
          detail: {
            msg: param,
            evolution: param2
          },
        });
        this.dispatchEvent(message);
      }
 
}

window.customElements.define("evolution-comp", EvolutionComp);