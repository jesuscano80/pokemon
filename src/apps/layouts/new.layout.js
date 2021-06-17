import { css, LitElement,html } from "lit"

export class NewLayout extends LitElement{
    constructor(){
        super();
    }
    static get styles (){
        return css`:host{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    }
                    section{
                    width:100vw;
                    height: 100vh;
                    display: flex;
                    overflow-x: hidden;
                    background-color: var(--color-newlayout-section, #D3D3D3);
                    overflow-y: auto;
                    }
                    aside{
                    max-width:280px;
                    min-width:280px;
                    display: flex;
                    border-right: 4px solid #356abc;
                    flex-direction: column;
                    background-color: var(--color-newlayout-aside, #696969);
                    position: sticky;
                    top:0;
                    }
                    article{
                    width:100%;
                    display: flex;
                    flex-direction: column;
                    }

                    *{
                    box-sizing: border-box;
                    padding: 0;
                    margin: 0;
                    }
                    @media screen and (max-width:768px){
                    
                    
                        aside{
                            max-width:160px;
                            min-width:160px;
                        }
                    }
                    @media screen and (max-width:475px){
                        aside{
                            max-width: auto;
                            min-width: 100%;
                            width: 100%;
                            position: fixed;
                            top: auto;
                            bottom: 0;
                            max-height: 60px;
                            min-height: 60px;
                            z-index: 1000;
                        }
                    section{
                        flex-direction: column-reverse;
                    }
                    article{
                        margin-bottom:80px;
                        padding-top: 20px;
                    
                    }
                  
                }
        ` 
    }

    static get properties(){
        return {}
    }

    render(){
        return html`<section>
                        <aside>
                            <slot name="aside"></slot>
                        </aside>
                        <article>
                            <slot name="article"></slot>
                        </article>
                    </section>
        ` 
    }

    connectedCallback(){
        super.connectedCallback();
    }
}
window.customElements.define("new-layout", NewLayout);