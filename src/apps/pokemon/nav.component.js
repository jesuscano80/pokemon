import { LitElement, css, html } from "lit";

export class NavComponent extends LitElement {
  constructor() {
    super();
  }
  static get properties() {
    return {
      datatypes: { type: Object },
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
      }
      #button {
        outline: none;
        border: 5px solid #f5fffa;
        border-left: none;
        height: 36.5px;
        width: 36.5px;
        border-radius: 0 8px 8px 0;
        background-color: #ffcc03;
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
      }
      img {
        height: 100%;
        transform: scale(1.2);
      }
      svg {
        color: red;
      }
      .logo {
        margin-left: 10px;
        width: 10%;
        height: 10%;
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
      .tipos {
        padding: 6px;
        border: 1px solid black;
        text-align: center;
      }
    `;
  }

  render() {
    return html`<section>
      <div class="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/320px-International_Pok%C3%A9mon_logo.svg.png"
        />
      </div>
      <select id="sel" @change=${(e) => this.eventGenerator()}>
        <option value="selected">Choose type of Pokemon</option>

        ${this.datatypes?.map(
          (e) => html`<option>${e.data.types[0].type.name}</option>`
        )}
      </select>
      <p>Choose type of Pokemon</p>
      <form>
        <!-- <input list="types" type="text" >
                     <datalist id="types">
                         <option value="pikachu"></option>
                         <option value="squirtel"></option>
                     </datalist> -->

        <div class="grid">
          ${this.datatypes?.map(
            (e) =>
              html` <div
                    class="tipos ${e.data.types[0].type.name}"
                    @click=${() => this.eventGenerator(e.data.types[0].type.name)}
                    >
                    ${e.data.types[0].type.name}
                    </div>`
          )}
        </div>

        <!-- <button type="submit" id="button"> -->
        <!-- <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="44" height="44" viewBox="0 0 24 24" stroke-width="2" stroke="#356abc" fill="none" stroke-linecap="round" stroke-linejoin="round">
                         <path stroke="none" d="M0 0h24v24H0z"/>
                         <circle cx="10" cy="10" r="7"/>
                         <line x1="21" y1="21" x2="15" y2="15"/>
                         </svg>
                     </button> -->
      </form>
      Filter by features
      <div class="grid">
        <div class="tipos" @click="${() => this.eventGenerator("maxpower")}">
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
        <div class="tipos" @click="${() => this.eventGenerator("maxheight")}">
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
        <div class="tipos" @click="${() => this.eventGenerator("maxweight")}">
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
        <div class="tipos">exp</div>
        <div class="tipos">height</div>
        <div class="tipos">weight</div>
        <div class="tipos" @click="${() => this.eventGenerator("lesspower")}">
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
        <div class="tipos" @click="${() => this.eventGenerator("lessheight")}">
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
        <div class="tipos" @click="${() => this.eventGenerator("lessweight")}">
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
      <div class="img">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/768px-Pok%C3%A9_Ball_icon.svg.png"
        />
      </div>
    </section>`;
  }
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("datatypes", (e) => {
      this.datatypes = e.detail.data;
      
    });
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

customElements.define("nav-component", NavComponent);
