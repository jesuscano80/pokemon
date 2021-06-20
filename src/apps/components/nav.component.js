import { Router } from "@vaadin/router";
import { LitElement, css, html } from "lit";

export class NavComponent extends LitElement {
  constructor() {
    super();
    this.allPokemon;
    this.value="";
    this.pokeball;
  }
  static get properties() {
    return {
      datatypes: { type: Object }
    };
  }

  static get styles() {
    return css`
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }
      section {
        max-width: calc(100% - 20px);
        min-width: calc(100% - 20px);
        height: 100vh;
        max-height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
      }
      .logo {
        cursor: pointer;
        width: 100%;
        max-width: 240px;
        min-height: 60px;
        max-height: 60px;
        overflow: hidden;
        margin-top: 20px;
        margin-bottom: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .logo > img {
        height: 100%;
      }
      .formByName {
        width: 100%;
        max-width: 240px;
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
      }
      .formByName > label {
        margin-left: 2px;
        font-size: var(--font-size-s);
        color: var(--color-white);
        margin-bottom: 20px;
      }
      .formByName > div {
        display: flex;
        justify-content: space-between;
        width:100%;
      }
      .formByName > div > input {
        outline: none;
        height: 32px;
        border: none;
        border-radius: var(--radius-m);
        width: 200px;
        background-color: var(--color-white);
        caret-color: var(--color-dark);
        padding: 0 7px;
      }
      .formByName > div > input::placeholder {
        color: var(--color-lightGrey);
      }
      .formByName > div > button {
        border: none;
        min-width: 32px;
        max-width: 32px;
        min-height: 32px;
        max-height: 32px;
        border-radius: 50%;
        background: var(--color-lightGrey);
        display: flex;
        justify-content: center;
        align-items: center;
        transform: scale(1.2);
      }
      .formByName > div > button > img {
        width: calc(100% - 10px);
      }
      .formByPokemonType {
        width: 100%;
        max-width: 240px;
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
      }
      .formByPokemonType > label {
        margin-left: 2px;
        font-size: var(--font-size-s);
        color: var(--color-white);
        margin-bottom: 20px;
      }
      .formByPokemonType > select {
        outline: none;
        height: 32px;
        border: none;
        border-radius: var(--radius-m);
        width: 100%;
        background-color: var(--color-white);
        padding: 0 7px;
        caret-color: var(--color-dark);
        color: var(--color-drakGrey);
        outline: none;
      }
      .formByPokemonType > select::placeholder {
        color: var(--color-lightGrey);
      }
      .choseOneOption {
        background-color: var(--color-lightGrey);
        color: var(--color-white);
      }
      .allTypesOption {
        background-color: var(--color-lightGrey);
        color: var(--color-white);
      }
      .bttns {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 240px;
        margin-bottom: 30px;
      }
      .bttns > p {
        margin-left: 2px;
        font-size: var(--font-size-s);
        color: var(--color-white);
        margin-bottom: 20px;
      }
      .rows {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
      }
      .column {
        width: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .column > p {
        color: var(--color-white);
        font-size: var(--font-size-m);
      }
      .btn {
        background-color: var(--color-lightGrey);
        width: 100%;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: var(--radius-m);
        margin-top: 10px;
        cursor: pointer;
      }
      .nav {
        display: flex;
        flex-direction: column;
      }
      .pointer{
        cursor: pointer;
      }
      .whitefont{
        color: #FFFFFF;
      }
      .nav > li{
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 32px;
        width: 240px;
        margin: 10px;
        font-size: var(--font-size-m);
        border-radius: 7px;
        background-color: var(--color-lightGrey);
      }
      .nav > li > a {
        color: var(--color-white);
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .hidden{
        display: none;
      }
      .press{
        background-color: #FFCC03!important;
      }
      #types{
        overflow:hidden;
        height:0.5em;
      }
      .alert{
        background-color: red!important;
      }


      .bug {
        background: #92bc2c;
        box-shadow: 0 0 20px #92bc2c;
      }
      .dark {
        background: #595761;
        box-shadow: 0 0 20px #595761;
      }
      .dragon {
        background: #0c69c8;
        box-shadow: 0 0 20px #0c69c8;
      }
      .electric {
        background: #f2d94e;
        box-shadow: 0 0 20px #f2d94e;
      }
      .fire {
        background: #fba54c;
        box-shadow: 0 0 20px #fba54c;
      }
      .fairy {
        background: #ee90e6;
        box-shadow: 0 0 20px #ee90e6;
      }
      .fighting {
        background: #d3425f;
        box-shadow: 0 0 20px #d3425f;
      }
      .flying {
        background: #a1bbec;
        box-shadow: 0 0 20px #a1bbec;
      }
      .ghost {
        background: #5f6dbc;
        box-shadow: 0 0 20px #5f6dbc;
      }
      .grass {
        background: #5fbd58;
        box-shadow: 0 0 20px #5fbd58;
      }
      .ground {
        background: #da7c4d;
        box-shadow: 0 0 20px #da7c4d;
      }
      .ice {
        background: #75d0c1;
        box-shadow: 0 0 20px #75d0c1;
      }
      .normal {
        background: #a0a29f;
        box-shadow: 0 0 20px #a0a29f;
      }
      .poison {
        background: #b763cf;
        box-shadow: 0 0 20px #b763cf;
      }
      .psychic {
        background: #fa8581;
        box-shadow: 0 0 20px #fa8581;
      }
      .rock {
        background: #c9bb8a;
        box-shadow: 0 0 20px #c9bb8a;
      }
      .steel {
        background: #5695a3;
        box-shadow: 0 0 20px #5695a3;
      }
      .water {
        background: #539ddf;
        box-shadow: 0 0 20px #539ddf;
      }
    `
  }

  render() {
    return html`
      <section>

        <div class="logo">
          <img @click=${this.goHome} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/320px-International_Pok%C3%A9mon_logo.svg.png"/>
        </div>

        <form id="elselect" onSubmit="return false;" class="formByPokemonType">
          <label>Search by Pokemon type</label>
          <select class="pointer" @change="${(e) => this.eventGenerator(e.target.value, e, "cleanallbuttons")}">
          <option class="choseOneOption" selected>choose one</option>
          <option class="allTypesOption">all types</option>
            ${this.datatypes?.map(
              (e) =>
                html` 
                  <option type="button"
                    class="optioncolor ${e.data.types[0].type.name}"
                    >
                    ${e.data.types[0].type.name}
                  </option>`
            )}
          </select>
        </form>

        <form onSubmit="return false;" class="formByName">
          <label for="byname">Search by name</label>
          <div>
            <input id="byname" list="types" @change="${e => this.value = e.target.value}" size="5" type="text" .value=${this.value} placeholder="e.g. Pikachu" minlength="2" autofocus autocomplete="off">
            <datalist class="datalist" id="">
                ${this.allPokemon?.map(
                  (e) => html`<option>${e.data.name}</option>`
                )}
            </datalist>
            <button class="pointer">
              <img id="but" @click=${this.checkInput} src="https://raw.githubusercontent.com/jesuscano80/webcomponent-like-heart/master/go.png">
            </button>
          </div>
        </form>
      
        <div class="bttns">

          <p>Filter by features</p>

          <div class="rows">

            <div class="column">
              <p>exp</p>
              <div class="btn" @click="${(e) => this.eventGenerator("maxpower", e, "0")}">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-top" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffcc03" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M9 20v-8h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v8a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /></svg>
              </div>
              <div class="btn" @click="${(e) => this.eventGenerator("lesspower",e, 1)}">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffcc03" fill="none" stroke-linecap="round" stroke-linejoin="round" > <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path   d="M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-8a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1z" /> </svg>              
              </div>
            </div>

            <div class="column">
              <p>height</p>
              <div class="btn" @click="${(e) => this.eventGenerator("maxheight", e, 2)}">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-top" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffcc03" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M9 20v-8h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v8a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /></svg>
              </div>
              <div class="btn" @click="${(e) => this.eventGenerator("lessheight",e, 3)}">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffcc03" fill="none" stroke-linecap="round" stroke-linejoin="round" > <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path   d="M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-8a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1z" /> </svg>              
              </div>
            </div>

            <div class="column">
              <p>weight</p>
              <div class="btn" @click="${(e) => this.eventGenerator("maxweight", e, 4)}">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-top" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffcc03" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M9 20v-8h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v8a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /></svg>
              </div>
              <div class="btn" @click="${(e) => this.eventGenerator("lessweight",e, 5)}">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffcc03" fill="none" stroke-linecap="round" stroke-linejoin="round" > <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path   d="M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-8a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1z" /> </svg>              
              </div>
            </div>

          </div>

        </div>

        <nav class="nav">
          <li class="press pointer" id="btnfinder" @click=${this.goHome}><a>Pokemon Finder</a></li>
          <li class="pointer" id="btnfavourite" @click=${this.toPokeball}><a>My Favourite Pokemon</a></li>
        </nav>
      </section>
    `;
  }
  connectedCallback() {
    super.connectedCallback();
    this.initEvents();
    
  }
 
  datalistDontShowAll(){
    const search = this.shadowRoot.querySelector('#byname');
    const datalist = this.shadowRoot.querySelector('.datalist');
    search.addEventListener("click", (e) => {datalist.setAttribute("id", "" )});
    search.addEventListener("keyup", (e) => {
      (e.target.value.length > 1 ) ? datalist.setAttribute("id", "types")
                                   : datalist.setAttribute("id", "");
    });
}
 
  initEvents(){
    document.addEventListener("datatypes", (e) => {
      this.datatypes = e.detail.data;
      this.allPokemon = e.detail.all;
      this.datalistDontShowAll();
    });
    document.addEventListener("hideButtons",(e)=>{
      this.hideButtons();
    });
    document.addEventListener("showButtons",(e)=>{
      this.showButtons();
    });
    document.addEventListener("changebtnfavourite", (e)=>{
      this.btnFinderPressedStyle();
      this.showButtons();
      this.disableAllSelectedButton("cleanallbuttons");
    })
  }

  changeSelectedButton(number){
    if(number){
      const featuresDomSelected=[...this.shadowRoot.querySelectorAll(".btn")];
      const svgArrowsDomSelected=[...this.shadowRoot.querySelectorAll("svg")];
      featuresDomSelected.forEach((elem,i)=>{
        if(i==number){
          elem.classList.add("press")
        }
        else{
          elem.classList.remove("press");
        }
      })
      svgArrowsDomSelected.forEach((elem,i)=>{
        if(i==number){
          elem.setAttribute("stroke","#356abc")
        }
        else{
          elem.setAttribute("stroke","#FFCC03");
        }
      })
    }
  }

  disableAllSelectedButton(param){
    
    if(param=="cleanallbuttons"){
      const featuresDomSelected=[...this.shadowRoot.querySelectorAll(".btn")];
      const svgArrowsDomSelected=[...this.shadowRoot.querySelectorAll("svg")];
      featuresDomSelected.forEach((elem,i)=>{
      elem.classList.remove("press")
      })
      svgArrowsDomSelected.forEach((elem)=>{
        elem.setAttribute("stroke","#FFCC03")
      })
    }
  }
  
  eventGenerator(param, param2, param3) {
    const message = new CustomEvent(param, {
      bubbles: true,
      composed: true,
      detail: {
        msg: param,
        data: param2,
      },
    });
    this.dispatchEvent(message);
    this.changeSelectedButton(param3);
  }
  
  
  checkInput(){
      this.value=this.value.toLowerCase();
    const found = this.allPokemon.find(element => element.data.name == this.value);
    if (found!=undefined){
        const id=found.data.id;
        Router.go(`/info/${id}`);
        this.hideButtons();
    }
    else{
        setTimeout(()=>{this.shadowRoot.querySelector("input").value="";},1200);
        this.shadowRoot.querySelector("input").value="I didn´t find it";
    }
    
  }
  goHome(){
      Router.go("/");
      this.showButtons();
      this.btnFinderPressedStyle()
  }
  btnFinderPressedStyle(){
    this.shadowRoot.querySelector("#btnfavourite").classList.remove("press");
    this.shadowRoot.querySelector("#btnfinder").classList.add("press");
  }

  btnFavouritePressedStyle(){
    this.shadowRoot.querySelector("#btnfavourite").classList.add("press");
    this.shadowRoot.querySelector("#btnfinder").classList.remove("press");
  }

  hideButtons(){
    const container=this.shadowRoot.querySelector(".bttns");
    const select=this.shadowRoot.querySelector("#elselect");
    select.classList.add("hidden");
    container.classList.add("hidden");
  }

  showButtons(){
    const container=this.shadowRoot.querySelector(".bttns");
    const select=this.shadowRoot.querySelector("#elselect");
    select.classList.remove("hidden");
    container.classList.remove("hidden");
  }

  toPokeball(){
    
    if(localStorage.getItem("pokeInside")){
      if (JSON.parse(localStorage.getItem("pokeInside")).length) {
        Router.go("/pokeball");
        this.disableAllSelectedButton("cleanallbuttons");
        this.hideButtons();
        this.btnFavouritePressedStyle();
      }
    }
    else{
       setTimeout(()=>{
         const buttonfavourite=this.shadowRoot.querySelector("#btnfavourite")
         buttonfavourite.classList.remove("alert");
         buttonfavourite.classList.add("whitefont");
         buttonfavourite.innerHTML="Favourite Pokemon"
       }, 2000)
       const alertbutton=this.shadowRoot.querySelector("#btnfavourite")
       alertbutton.classList.add("alert");
       alertbutton.innerHTML="not found";
    }  
  }
  
}

customElements.define("nav-component", NavComponent);