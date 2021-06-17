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
      form {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
      input {
        outline: none;
        border: 5px solid #356abc;
        height: 36.5px;
        border-radius: 8px 0 0 8px;
        width: 100%;
        background-color: #f5fffa;
        caret-color: #356abc;
        text-indent: 5px;
      }
      select{
        outline: none;
        border: 5px solid #356abc;
        height: 36.5px;
        border-radius: 8px 0 0 8px;
        width: 100%;
        background-color: #f5fffa;
        color:#696969;
        text-indent: 5px;
      }
      label{
        color: #f5fffa;
        margin-bottom: 5px;
      }
      
      section {
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
        height: 120px;
        margin: 0 auto;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: 0 0 10px 3px #f5fffa;
        cursor: pointer;
      }
      img {
        height: 100%;
        transform: scale(1.2);
      }
      .logo {
        margin-left: 10px;
        width: 10%;
        height: 10%;
        cursor: pointer;
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

      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1em;
      }

      .grid2{
        
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 1em;
      }

      .tipos {
        padding: 3px;
        text-align: center;
        cursor: pointer;
        background-color: #808080;
        border-radius: 5px;
      }

      #types{
          overflow:hidden;
          height:0.5em;
      }
      .features{
      padding: 6px;
        text-align: center;
      }    
      .hidden{
        visibility: hidden;
      }
      #but{
        padding-left: 10px;
        cursor: pointer;
      }
      #but:hover{
        transform: scale(1.5);
      }
      .multicolor{
        background: #808080;
        color: white;
      }
      .press{
        background-color: #FFCC03;
        
      }
     
    `
  }

  render() {
    return html`<section>
      <div class="logo">
        <img 
          @click=${this.goHome}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/320px-International_Pok%C3%A9mon_logo.svg.png"
        />
      </div>
  
      <form onSubmit="return false;">
        <label for="byname">Search by name
          
              <input id="byname" list="types" @change="${e => this.value = e.target.value}" size="5" type="text" .value=${this.value} placeholder="e.g. Pikachu" minlength="2" autofocus autocomplete="off">

                    
              <datalist class="datalist" id="">
              ${this.allPokemon?.map(
                  (e) => html`<option>${e.data.name}</option>`
                  )}
              </datalist>
        </label>
 
        <img id="but" @click=${this.checkInput} src="https://fontmeme.com/permalink/210615/1525a15545dc148e015d7c55a56971b3.png">
        </form>
        <form id="elselect" onSubmit="return false;">
         <label>Search by Pokemon type
          <select @change="${(e) => this.eventGenerator(e.target.value, e, "cleanallbuttons")}">
            <option selected>choose one</option>
            <option class="multicolor">all types</option>
            ${this.datatypes?.map(
                    (e) =>
                      html` <option type="button"
                            class="optioncolor ${e.data.types[0].type.name}"
                            >
                            ${e.data.types[0].type.name}
                            </option>`
                  )}
          </select>
          </label>
    </form>
    <div class="container">     
      
    <label>Filter by features
      <div class="grid2">
        <div class="tipos" @click="${(e) => this.eventGenerator("maxpower", e, "0")}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-big-top"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffcc03"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M9 20v-8h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v8a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"
            />
          </svg>
        </div>
        <div class="tipos" @click="${(e) => this.eventGenerator("maxheight",e, 1)}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-big-top"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffcc03"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M9 20v-8h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v8a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"
            />
          </svg>
        </div>
        <div class="tipos" @click="${(e) => this.eventGenerator("maxweight",e, 2)}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-big-top"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffcc03"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M9 20v-8h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v8a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"
            />
          </svg>
        </div>
        <div class="features">exp</div>
        <div class="features">height</div>
        <div class="features">weight</div>
        <div class="tipos" @click="${(e) => this.eventGenerator("lesspower",e, 3)}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-big-down"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffcc03"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-8a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1z"
            />
          </svg>
        </div>
        <div class="tipos" @click="${(e) => this.eventGenerator("lessheight",e, 4)}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-big-down"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffcc03"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-8a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1z"
            />
          </svg>
        </div>
        <div class="tipos" @click="${(e) => this.eventGenerator("lessweight",e,5)}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-big-down"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffcc03"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-8a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1z"
            />
          </svg>
        </div>
      </div>
    </label>
    </div>  
    
      <div class="img" @click=${this.toPokeball}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/768px-Pok%C3%A9_Ball_icon.svg.png"
        />
      </div>
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
  }

  changeSelectedButton(number){
    if(number){
      const featuresDomSelected=[...this.shadowRoot.querySelectorAll(".tipos")];
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
      const featuresDomSelected=[...this.shadowRoot.querySelectorAll(".tipos")];
      featuresDomSelected.forEach((elem,i)=>{
      elem.classList.remove("press")
      })
    }
  }
  
  eventGenerator(param, param2, param3) {
    console.log(param3);
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
      Router.go("/post");
      this.showButtons();
  }

  hideButtons(){
    const container=this.shadowRoot.querySelector(".container");
    const select=this.shadowRoot.querySelector("#elselect");
    select.classList.add("hidden");
    container.classList.add("hidden");
  }

  showButtons(){
    const container=this.shadowRoot.querySelector(".container");
    const select=this.shadowRoot.querySelector("#elselect");
    select.classList.remove("hidden");
    container.classList.remove("hidden");
  }

  toPokeball(){
    if(localStorage.getItem("pokeInside")){ 
        Router.go("/pokeball");
        this.hideButtons();
      }
  
  }
  
}

customElements.define("nav-component", NavComponent);
