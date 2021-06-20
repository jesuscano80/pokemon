import { Router } from "@vaadin/router";
import { LitElement, html, css } from "lit";
import { PokeService } from "../services/poke.service";



export class PokeComponent extends LitElement{
    
    constructor(){
        super();
        this.service= new PokeService();
        this.pokemonRender=[];
        this.pokemonCopy=[];
        this.renderComplete=false;  
        this.pokeball=[];
        this.pokemonInsidePokeball;
        this.heartvalue=false;
      
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
            display:grid;
            grid-template-columns: repeat(3, 1fr);
        }
        .card{
            margin: 0 auto;
            margin-top: 20px;
            min-height: 330px;
            max-height:330px;
            width:220px;
            border: 1px solid black;
            border-radius:5px;
            box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);                
        }
        .loading{
            display:flex;
            justify-content:center;
            align-items:center;
            height: 100vh; 
            width:160%; 
            cursor: wait; 
        }
        .bannercolor{
            display:flex;
            justify-content:flex-end;
            position:relative;
            align-items:flex-start;
            width:100%;
            height: 120px;
        }
        .card-body{
            text-align: center;
            position: relative;
            top: -50px;
            display:flex;
            flex-direction: column;
            height:calc(100% - 70px);
            cursor: pointer;
            background-color:#808080;
        }
        heart-comp{
            cursor: pointer;
            margin-right:5px;
        }    
        .div-image{
            display:flex;
            justify-content:center;
            border-radius:50px;
            width:100px;
            background-color: white;
            overflow: hidden;
            margin:0 auto;
            position: relative;
            z-index: 5;
        }
        .card-image{
            background: rgba(1,1,1,0.1);
            border-radius:50px;
            padding: 7px;
            position:relative;
            z-index:4;
           
        }
        .hidden{
        display:none;
        }
        .pokemon-name{
            padding: 10px 0;
            font-size:1.5em;
            color:whitesmoke;
            
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
            color: whitesmoke;
        }
        .pokeball{
            cursor: pointer;
            width:20px;
        }
        .bug {
            background: #92BC2C;
            box-shadow: 0 0 20px #92BC2C;
        }

        .dark {
            background: #595761;
            box-shadow: 0 0 20px #595761;
        }

        .dragon {
            background: #0C69C8;
            box-shadow: 0 0 20px #0C69C8;
        }

        .electric {
            background: #F2D94E;
            box-shadow: 0 0 20px #F2D94E;
        }

        .fire {
            background: #FBA54C;
            box-shadow: 0 0 20px #FBA54C;
        }

        .fairy {
            background: #EE90E6;
            box-shadow: 0 0 20px #EE90E6;
        }

        .fighting {
            background: #D3425F;
            box-shadow: 0 0 20px #D3425F;
        }

        .flying {
            background: #A1BBEC;
            box-shadow: 0 0 20px #A1BBEC;
        }

        .ghost {
            background: #5F6DBC;
            box-shadow: 0 0 20px #5F6DBC;
        }

        .grass {
            background: #5FBD58;
            box-shadow: 0 0 20px #5FBD58;
        }

        .ground {
            background: #DA7C4D;
            box-shadow: 0 0 20px #DA7C4D;
        }

        .ice {
            background: #75D0C1;
            box-shadow: 0 0 20px #75D0C1;
        }

        .normal {
            background: #A0A29F;
            box-shadow: 0 0 20px #A0A29F;
        }

        .poison {
            background: #B763CF;
            box-shadow: 0 0 20px #B763CF;
        }

        .psychic {
            background: #FA8581;
            box-shadow: 0 0 20px #FA8581;
        }

        .rock {
            background: #C9BB8A;
            box-shadow: 0 0 20px #C9BB8A;
        }

        .steel {
            background: #5695A3;
            box-shadow: 0 0 20px #5695A3;
        }

        .water {
            background: #539DDF;
            box-shadow: 0 0 20px #539DDF;
        }


        @media screen and (max-width:768px){
            :host{
                    width:100%;
                    display:grid;
                    grid-template-columns: repeat(2, 1fr);
                }
        @media screen and (max-width:768px){
            :host{
                    width:100%;
                    display:grid;
                    grid-template-columns: repeat(1, 1fr);
                }
            
                `
            
    }

    static get properties(){
        return{
        pokemonRender: {type: Object},
        renderComplete: {type: Boolean},
        heartvalue: {type: Boolean}
        }
    }

   

    render()
    {  return this.renderComplete 
            ? html`${this.pokemonRender && this.pokemonRender.map((pokemon)=> html`<style>.type-${pokemon.data.id}{background:var(--color-${pokemon.data.types[0].type.name})!important;z-index:2}</style>
                <article class="card">
                    <div class="bannercolor type-${pokemon.data.id}">
                        <heart-comp class="heart${pokemon.data.id}" @click=${()=>this.toPokeball(pokemon.data.id)}></heart-comp>
                    </div>
                    <div class="card-body" @click=${()=>this.sendTo(pokemon.data.id)}>
                        <div class="div-image">
                            <img class="card-image image-flying-${pokemon.data.id}"
                             src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.data.id}.png">
                        </div>
                            <p class="pokemon-name" id="${pokemon.data.id}" >${this.capitalize(pokemon.data.name)}</p>
                            <div class="divIcon">
                                <img class="icon ${pokemon.data.types[0].type.name}" 
                                title="${pokemon.data.types[0].type.name}" 
                                alt="Pokemon type ${pokemon.data.types[0].type.name}" 
                                src="https://duiker101.github.io/pokemon-type-svg-icons/icons/${pokemon.data.types[0].type.name}.svg">    
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
                </article> `)}`
                : html `<div class="loading">
                            <img  src="https://fontmeme.com/permalink/210614/37897e1b41de8022cdba4116f7b4c608.png"> 
                        </div>` 
    }

    async connectedCallback(){
        super.connectedCallback();
        this.pokemonRender=await this.service.get20Pokemon();
        this.pokemonCopy=this.pokemonRender;
        this.sendTypesToNav();    
        this.renderComplete=true;
    }

    updated(){
        this.changeHeartsInit();
    }

    changeHeartsInit(){
        
        if (localStorage.getItem("pokeInside")){
            const data=JSON.parse(localStorage.getItem("pokeInside"));
            data.forEach((id)=>{
                let ida=id.toString();
                this.shadowRoot.querySelector(`.heart${ida}`).setAttribute("visibility", true);
            })
        }    
    }

    sendTypesToNav(){
        this.dataTypesFiltered=this.pokemonRender.filter((elem,i,a)=>a.findIndex(t=>t.data.types[0].type.name === elem.data.types[0].type.name)===i);
        this.generateAddEvent(this.dataTypesFiltered);
        this.eventGenerator("datatypes",this.dataTypesFiltered, this.pokemonRender);
    }

    getLessPower(){

        this.pokemonRender.sort(function(a, b) {
            if (a.data.base_experince > b.data.base_experience) {
                return 1;
            }
            if (a.data.base_experience < b.data.base_experience) {
                return -1;
            }
            return 0;   
        });
        this.pokemonRender=[...this.pokemonRender];
    }

    getMaxPower(){
        this.pokemonRender.sort(function(a, b) {
            if (a.data.base_experince < b.data.base_experience) {
                return 1;
            }
            if (a.data.base_experience > b.data.base_experience) {
                return -1;
            }
            return 0;
        })
        this.pokemonRender=[...this.pokemonRender];
    }
    getLessHeight(){

        this.pokemonRender.sort(function(a, b) {
            if (a.data.height < b.data.height) {
                return -1;
            }
            if (a.data.height > b.data.height) {
                return 1
            }
            return 0;
        })
        this.pokemonRender=[...this.pokemonRender];
    }

    getMaxHeight(){
        this.pokemonRender.sort(function(a, b) {
            if (a.data.height < b.data.height) {
                return 1;
            }
            if (a.data.height > b.data.height) {
                return -1;
            }
            return 0;
        })
        this.pokemonRender=[...this.pokemonRender];

    }
    getLessWeight(){
        this.pokemonRender.sort(function(a, b) {
            if (a.data.weight < b.data.weight) {
                return -1;
            }
            if (a.data.weight > b.data.weight) {
                return 1
            }
            return 0;
        })
        this.pokemonRender=[...this.pokemonRender];
    }

    getMaxWeight(){
        this.pokemonRender.sort(function(a, b) {
            if (a.data.weight < b.data.weight) {
                return 1;
            }
            if (a.data.weight > b.data.weight) {
                return -1;
            }
            return 0;
        })
        this.pokemonRender=[...this.pokemonRender];

    }
    eventGenerator(param, datasend, allpoke){

        const message = new CustomEvent(param, {
            bubbles: true,
            composed: true,
            detail: {
            msg: param,
            data: datasend,
            all: allpoke,
            }
            })
            this.dispatchEvent(message);

    }
    generateAddEvent(param){

        param.forEach(elem=>{
            const type=elem.data.types[0].type.name;
                document.addEventListener(type, ()=>{    
                this.pokemonRender=[...this.pokemonCopy];
                const filtered=this.pokemonRender.filter((elem)=>elem.data.types[0].type.name==type);
                this.pokemonRender=[...filtered];            
            })             
        })
        document.addEventListener("maxpower", (e) => {
        this.getMaxPower(); 
        });
        document.addEventListener("lesspower", (e) => {
            this.getLessPower(); 
        });
        document.addEventListener("lessheight", (e) => {
            this.getLessHeight(); 
        });
        document.addEventListener("maxheight", (e) => {
            this.getMaxHeight(); 
        });
        document.addEventListener("lessweight", (e) => {
            this.getLessWeight();
        });
        document.addEventListener("maxweight", (e) => {
            this.getMaxWeight(); 
        });
        document.addEventListener("all types", (e)=>{
            this.pokemonRender=[...this.pokemonCopy];
        })
    }
    capitalize= (name)=>{
            return  name[0].toUpperCase() + name.slice(1);
          }

    sendTo(id){
        Router.go(`/info/${id}`)
        this.eventGenerator("hideButtons");
    }

    pushToLocalStorage(id){
        this.pokeball=[];
        if (localStorage.getItem("pokeInside")){
            const data=JSON.parse(localStorage.getItem("pokeInside"));
            data.forEach((elem)=>{
                    this.pokeball.push(elem);      
            })

            if(!this.pokeball.includes(id)){
                this.pokeball.push(id);
                localStorage.setItem("pokeInside", JSON.stringify(this.pokeball));   
              } 
            else{
                const index=this.pokeball.indexOf(id);
                this.pokeball.splice(index,1);
                localStorage.setItem("pokeInside", JSON.stringify(this.pokeball));  
            }
        }
        else{
            this.pokeball.push(id);
            localStorage.setItem("pokeInside", JSON.stringify(this.pokeball));
        }    
    }
  

    toPokeball(id){
        this.pushToLocalStorage(id);
        this.heartvalue=this.checkHeart(id);
        if(this.heartvalue){
            this.shadowRoot.querySelector(`.heart${id}`).setAttribute("visibility", true);
        }
        else{
            this.shadowRoot.querySelector(`.heart${id}`).removeAttribute("visibility");
        }
        return this.pokemonInsidePokeball= this.pokemonRender.filter((elem)=> this.pokeball.includes(elem.data.id));   
    }

    checkHeart(id){
        let control=false;
        if (localStorage.getItem("pokeInside")){
            const data=JSON.parse(localStorage.getItem("pokeInside"));
            data.forEach((elem)=>{
                if (elem==id){
                    control=true;
                }
            })
        }
        else{
            control=true;
        }
        return control;
    }
}

window.customElements.define("poke-comp",PokeComponent)