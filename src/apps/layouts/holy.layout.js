import { LitElement, css, html } from "lit";

export class HolyLayout extends LitElement{

    constructor(){
        super();
    }

    static get styles(){
        return css`#holy {
            color: black;
            margin: 0 auto;
            min-height: 100vh;
            display: grid;
            grid-template-columns: 100%;
            grid-template-rows: 100px 1fr 1fr 100px 200px;
            grid-template-areas: "my-header my-header my-header" "my-nav my-nav my-nav" "my-main my-main my-main" "my-aside my-aside my-aside" "my-footer my-footer my-footer"
        }

        #holy-header {
        grid-area: my-header;
        background-color: var(--holy-header-background-color, blueviolet);
        }

        #holy-nav {
        grid-area: my-nav;
        background-color: var(--holy-nav-background-color, cornflowerblue);
        }

        #holy-aside {
        grid-area: my-aside;
        background-color: var(--holy-aside-background-color, darkmagenta);
        }

        #holy-content {
        padding: 1rem;
        grid-area: my-main;
        
        background-color: var(--holy-content-background-color, indigo);
        }

        #holy-footer {
        grid-area: my-footer;
        background-color: var(--holy-footer-background-color, darkorchid);
        }

        @media (min-width: 600px) and (max-width: 1000px) {
            #holy {
                grid-template-columns: 200px 1fr 200px;
                grid-template-rows: 50px 1fr 1fr 50px;
                grid-template-areas: "my-header my-header my-header" "my-nav my-nav my-nav" "my-aside my-main my-main" "my-footer my-footer my-footer"
            }
        }

        @media (min-width: 1001px) {
            #holy {
                grid-template-columns: 200px 1fr 200px;
                grid-template-rows: 50px 1fr 50px;
                grid-template-areas: "my-header my-header my-header" "my-nav my-main my-aside" "my-footer my-footer my-footer"
            }
        }`
    }

    render(){
        return html`
        <div id="holy">
            <header id="holy-header" role="banner">
            <slot name="header"></slot>
            </header>
            <nav id="holy-nav">
            <slot name="nav"></slot>
            </nav>
            <main id="holy-content" role="main">
            <slot name="section"></slot>
            </main>
            <aside id="holy-aside" role="complementary">
            <slot name="aside"></slot>
            </aside>
            <footer id="holy-footer" role="contentinfo">
            <slot name="footer"></slot>
            </footer>
        </div>
    `
    }
}

window.customElements.define("holy-layout", HolyLayout)