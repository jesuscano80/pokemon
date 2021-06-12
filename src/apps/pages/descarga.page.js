import "../pokemon/pokemon.service"
import { PokemonService } from "../pokemon/pokemon.service";


export class DescargaComp extends HTMLElement{
    constructor(){
        super();
        this.service=new PokemonService();
        
         }
    async connectedCallback(){
        const result= await this.service.getPokemonDitto();
        const name=result.data.name;
        const nameCapitalized=name[0].toUpperCase() + name.slice(1);
        const type=result.data.types[0].type.name;
        const image=result.data.sprites.front_default;
        const exp=result.data.base_experience;
        const height=result.data.height;
        const weight=result.data.weight;
        console.log(nameCapitalized);
            this.innerHTML= `
            <style>
            .card{
                max-height:330px;
                max-width:200px;
                border: 1px solid black;
                box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);                
            }
            .bannercolor{
                display:flex;
                justify-content:flex-end;
                align-items:flex-start;
                width:100%;
                height: 120px;
                background: rgb(53,50,106);
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
            <article class="card">
            <div class="bannercolor"><heart-comp></heart-comp></div>
            <div class="card-body">
                <div class="div-image">
                    <img class="card-image" src="${image}" alt="">
                </div>
                <p class="pokemon-name">${nameCapitalized}</p><span></span>
                <p>${type}</p>
                <hr>
                <div class="card-bottom-tittle">
                    <div class="exp">exp</div>
                    <div class="hei">height</div>
                    <div class="wei">weight</div>
                    <div class="exp"><b>${exp}pts</b></div>
                    <div class="hei"><b>${height}</b></div>
                    <div class="wei"><b>${weight}kg</b></div>
                </div> 
            </div>
            </article>
           `
        
    }
}

window.customElements.define("descarga-comp", DescargaComp)