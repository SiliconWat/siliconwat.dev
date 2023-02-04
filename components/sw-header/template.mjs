import { THONLY } from "https://thonly.org/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${THONLY}/components/tl-header/shadow.css">
    <link rel="stylesheet" href="components/sw-header/shadow.css">
    <header>
        <section>
            <a href="#"><img src="siliconwat.png"></a>
            <h1>Silicon Wat Agency</h1>
        </section>
        <input id="menu-toggle" type="checkbox">
        <label class='menu-button-container' for="menu-toggle">
            <span class='menu-button'></span>
        </label>
        <ul>
            <li>
                <h3>Pricing</h3>
                <nav>
                    <a href="#hire"><button class="coin">Hire Us</button></a>
                    <h4>FREE Static Website</h4>
                    <menu>
                        <li><a>Create Prototype</a></li>
                        <li><a>Migrate Existing</a></li>
                    </menu>
                    <h4>Custom Development</h4>
                    <menu>
                        <li><a>Web / Mobile</a></li>
                        <li><a>Blockchain</a></li>
                        <li><a>iOS / Android</a></li>
                    </menu>
                    <h4>Pay After Finished</h4>
                    <menu>
                        <li><a>Escrow Service</a></li>
                        <li><a>Maintenance Fee</a></li>
                    </menu>
                </nav>
            </li>
            <li>
                <h3>Earning</h3>
                <nav>
                    <a href="#earn"><button class="coin">Get Paid</button></a>
                    <h4>Earning Tiers</h4>
                    <menu>
                        <li><a>You Find + You Manage</a></li>
                        <li><a>We Find + You Manage</a></li>
                        <li><a>You Find + We Manage</a></li>
                        <li><a>We Find + We Manage</a></li>
                    </menu>
                </nav>
            </li>
        </ul>
        <aside>
            <select onchange="this.getRootNode().host.changeLanguage(event)">
                <option value="en">English</option>
                <option value="km" disabled>Khmer</option>
                <option value="ru" disabled>Russian</option>
                <!--<option value="es" disabled>Spanish</option>
                <option value="zh" disabled>Chinese</option>-->
            </select>
        </aside>
    </header>
`;

export default template;