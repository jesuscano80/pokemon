import { PokeAllRepository } from "../pokemon/poke.repository";
import { PokeService } from "../pokemon/poke.service";

export class HomePage extends HTMLElement{
    constructor(){
        super();
        this.service= new PokeService();
        
    }
    async connectedCallback() {
     
        // const poke= new PokeAllRepository()
        // this.todos = await poke.getAllPokemonData(await poke.getAllPokemon());
        this.todos=await this.service.get20Pokemon();
        
        const capitalize= (name)=>{
          return  name[0].toUpperCase() + name.slice(1);
        }
        this.innerHTML = `
        <style>
        :host{
            width:100%
            display:flex;
            justify-content:center;
            align-items:center;
        }
        
        .card{
            max-height:330px;
            max-width:200px;
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
        .exp, .hei, .wei{
            font-size:0.8em;
        }
        </style>
         ${this.todos && this.todos.map((pokemon)=> `<style>.type-${pokemon.data.id}{background:var(--color-${pokemon.data.types[0].type.name});}</style>
        <article class="card">
        <div class="bannercolor type-${pokemon.data.id}"><heart-comp></heart-comp></div>
        <div class="card-body">
            <div class="div-image">
                <img class="card-image" src=${pokemon.data.sprites.front_default} alt="">
            </div>
            <p class="pokemon-name">${capitalize(pokemon.data.name)}</p><span></span>
            <p>${pokemon.data.types[0].type.name}</p>
            <hr>
            <div class="card-bottom-tittle">
                <div class="exp">exp</div>
                <div class="hei">height</div>
                <div class="wei">weight</div>
                <div class="exp"><b>${pokemon.data.base_experience}pts</b></div>
                <div class="hei"><b>${pokemon.data.height}</b></div>
                <div class="wei"><b>${pokemon.data.weight}kg</b></div>
            </div> 
        </div>
        </article><br>`).join("")}
        `
    }
}
window.customElements.define("home-page", HomePage);