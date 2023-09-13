import template from './template.mjs';

class SwFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.shadowRoot.querySelector('button').onclick = event => {
            Calendly.initPopupWidget({url: 'https://calendly.com/thonly/consultation?hide_event_type_details=1&hide_gdpr_banner=1'});
            return false;
        }
    }
}

customElements.define("sw-footer", SwFooter);