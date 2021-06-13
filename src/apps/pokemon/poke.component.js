import { LitElement, html, css } from "lit";
import { PokeAllRepository } from "./poke.repository";
import { PokeService } from "./poke.service";



export class PokeComponent extends LitElement{
    
    constructor(){
        super();
        this.service= new PokeService();
      
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
            box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);                
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
        .div-image{
            display:flex;
            justify-content:center;
            border-radius:50px;
            width:96px;
            background-color: white;
            overflow: hidden;
            margin:0 auto;
        }
        .card-image{
            background: rgba(1,1,1,0.1);
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
        todos: {type: Object}
        }
    }

    render()
    {  
        return html`${this.todos && this.todos.map((pokemon)=> html`<style>.type-${pokemon.data.id}{background:var(--color-${pokemon.data.types[0].type.name})!important;}</style>
        <article class="card">
            <div class="bannercolor type-${pokemon.data.id}"><heart-comp></heart-comp></div>
            <div class="card-body">
                <div class="div-image">
                    <img class="card-image" src=${pokemon.data.sprites.front_default} alt="">
                </div>
                    <p class="pokemon-name" id="${pokemon.data.id}" @click=${()=>this.evolution(pokemon.data.id)}>${this.capitalize(pokemon.data.name)}</p><span></span>
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
        </article>`)}` 
    }

    async connectedCallback(){
        super.connectedCallback();
        this.todos=await this.service.get20Pokemon();
        document.addEventListener("lesspower", (e) => {
            console.log(e.detail.msg);
            this.getLessPower(); 
            
            });
    
        document.addEventListener("maxpower", (e) => {
        console.log(e.detail.msg);
        this.getMaxPower(); 
        });
     

        this.capitalize= (name)=>{
            return  name[0].toUpperCase() + name.slice(1);
          }
        
    }
  

getLessPower(){
        
    this.todos.sort(function(a, b) {
        if (a.data.base_experince > b.data.base_experience) {
            return 1;
        }
        if (a.data.base_experience < b.data.base_experience) {
            return -1;
        }
        return 0;
    });
    this.todos=[...this.todos];
}

getMaxPower(){
    this.todos.sort(function(a, b) {
        if (a.data.base_experince < b.data.base_experience) {
            return 1;
        }
        if (a.data.base_experience > b.data.base_experience) {
            return -1;
        }
        return 0;
    })
    this.todos=[...this.todos];
}

}

window.customElements.define("poke-comp",PokeComponent)