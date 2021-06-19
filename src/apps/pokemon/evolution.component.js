import { LitElement, css, html } from "lit";
import { PokeService } from "./poke.service";
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
        .title{
            color: #F5FFFA;
            font-size: 5em;
            margin:0;
            padding:0;
            text-align: center;
        }
        .card{
            width:100vw;
            height:100vh;
        }
        .pokemonnames{
            color: #F5FFFA;
            font-size: 2em; 
        }
        .loading{
            display:flex;
            justify-content:center;
            align-items:center;
            height: 100%; 
            cursor: wait; 
        }
        .image{
            
            width:20%;
        }

        .flex{
            display:flex;  
            flex-direction:row;
            align-items: center;
            
        }
        .container{
            display:flex;
            flex-direction: row;
            justify-content: space-between;
            width: 50%;
            margin-left: 10px;
        }
        label{
            color: #F5FFFA;
        }
        .mini{
            font-size: 10px;
            color: #F5FFFA;
        }
        .imageanddata{
            display:flex;
            justify-content: space-evenly;
            align-items: center;
        }
        .right{
            display:flex;
            flex-direction: column;
            align-items: center;
            min-width: 100%;
            max-width:100%;
            justify-content: center;
            height: 50%;

        }
        .div-data{
            display: flex;
            flex-direction: column;
        }
         
        .icon{
            transform: scale(0.8);
        }
        #back{
            cursor: pointer;
        }
        
       
        .spacearound{
            display:flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
        }
        
        progress::-moz-progress-bar{
            background-color: #F5FFFA !important;
            border-radius: 10px;
        }
        progress::-webkit-progress-bar {
            background-color: #F5FFFA !important;
            border-radius: 10px;
        }
        progress {
            appearance: none;
        }
        .icon-tabler-arrow-down:first-of-type{
            display:none;
        }
             

        }`

    }   

        render(){  return this.renderComplete
            ? html `<style>.${this.chosen.data.types[0].type.name}{background:var(--color-${this.chosen.data.types[0].type.name})!important;}
                          .${this.chosen.data.types[0].type.name}p{background:var(--color-${this.chosen.data.types[0].type.name}-p)!important;}
                          progress::-webkit-progress-value{ background-color: var(--color-${this.chosen.data.types[0].type.name}-p)!important;border-radius: 7px;}
                          progress::-moz-progress-value {background-color: var(--color-${this.chosen.data.types[0].type.name}-p)!important;border-radius: 7px;}
                    </style>
        <article class="card ${this.chosen.data.types[0].type.name}" >
        
        <svg id="back" @click=${this.backHome} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="80" height="80" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="5" y1="12" x2="11" y2="18" />
            <line x1="5" y1="12" x2="11" y2="6" />
        </svg>
    <div class="container">
        <div class="left"> 
            <h1 class="title">${this.chosen && this.capitalize(this.chosen?.data.name)}</h1>
            <div class="imageanddata">
                <div class="div-image">
                    <img class="card-image" src=${this.chosen && this.chosen?.data.sprites.front_default} alt="">
                </div>
                <div class="div-data">
                    <label for="exp">experience points</label>
                    <div class="spacearound">
                        <progress id="exp" max="250" value="${this.chosen?.data.base_experience}"></progress>
                        <span class="mini">${this.chosen?.data.base_experience} exp</span>
                    </div>    
                    <label for="hei">height</label>
                    <div class="spacearound">
                        <progress id="hei" max="100" value="${this.chosen?.data.height}"></progress>
                        <span class="mini">${this.chosen?.data.height} m</span>
                    </div>
                    <label for="wei">weight</label> 
                    <div class="spacearound">
                        <progress id="wei" max="3200" value="${this.chosen?.data.weight}"></progress>
                        <span class="mini">${this.chosen?.data.height} kg</span>
                     </div>
                </div>
            </div>
            <div class="divIcon">
                <img class="icon ${this.chosen?.data.types[0].type.name}" title="${this.chosen?.data.types[0].type.name}" alt="Pokemon type ${this.chosen?.data.types[0].type.name}" src="https://duiker101.github.io/pokemon-type-svg-icons/icons/${this.chosen?.data.types[0].type.name}.svg">    
            </div>
        </div>
        <div class="right">
            ${this.evolutions.map((evol)=> html `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down" width="80" height="80" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="18" y1="13" x2="12" y2="19" />
                      <line x1="6" y1="13" x2="12" y2="19" />
            </svg>
            <div class="pokemonnames">${this.capitalize(evol.name)}</div>
                <img class="image" src="https://pokeres.bastionbot.org/images/pokemon/${evol.id}.png">`)}
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