import { THONLY } from 'https://thonly.org/global.mjs';
import kiitos from "./kiitos.mjs";
import template from './template.mjs';

class SwMain extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        window.addEventListener("hashchange", event => this.#render(false));
    }

    async connectedCallback() {
        await import(`${THONLY}/components/tl-main/tl-kiitos/element.mjs`);
        await import(`${THONLY}/components/tl-main/tl-robot/element.mjs`);
        //const observer = new IntersectionObserver(this.#observer.bind(this));
        //observer.observe(this.shadowRoot.querySelector('footer'));
        this.#render(true);
    }

    #render(refresh) {
        let element;
        const page = window.location.hash.substring(1);
        const header = this.shadowRoot.querySelector('header');
        const main = this.shadowRoot.querySelector('main');
        const footer = this.shadowRoot.querySelector('footer');
        header.style.display = 'none';
        main.style.display = 'none';
        footer.style.display = 'none';
        //this.shadowRoot.querySelectorAll('header, main, footer').forEach(element => element.style.display = 'none');
        
        if (page === 'hire' || page === 'earn' || page === '') {
            element = page === 'hire' ? main : page === 'earn' ? footer : document.body;
            main.style.display = 'block';
            footer.style.display = 'block';
        } else {
            element = document.body;
            this.shadowRoot.querySelector('tl-kiitos').render(kiitos[page]);
            header.style.display = 'block';
        }
        
        this.style.display = 'block';
        if (refresh) setTimeout(() => element.scrollIntoView({ behavior: "smooth", block: "start", inline: "center" }), 300)
        else element.scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
    }

    #observer(elements) {
        if (elements[0].intersectionRatio !== 0) {
            this.shadowRoot.querySelector('main video').pause();
            this.shadowRoot.querySelector('footer video').play();
        } else {
            this.shadowRoot.querySelector('main video').play();
            this.shadowRoot.querySelector('footer video').pause();
        }
    }
}

customElements.define("sw-main", SwMain);